"use client";

import { useState, useEffect } from "react";
import { notFound } from "next/navigation";
import { getTicketById, getPanelData } from "@/features/panel/api";
import { PanelTicket, PanelData } from "@/features/panel/types";
import { PanelSidebar } from "@/features/panel/components/panel-sidebar";
import { TicketChatHeader } from "@/features/panel/components/ticket-chat-header";
import { TicketChatMessages } from "@/features/panel/components/ticket-chat-messages";
import { TicketChatComposer } from "@/features/panel/components/ticket-chat-composer";

interface TicketDetailPageProps {
  params: {
    id: string;
  };
}

export default function TicketDetailPage({ params }: TicketDetailPageProps) {
  const [ticket, setTicket] = useState<PanelTicket | null>(null);
  const [panelData, setPanelData] = useState<PanelData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      const [tkt, pData] = await Promise.all([
        getTicketById(params.id),
        getPanelData(),
      ]);

      if (!tkt) {
        notFound();
      }

      setTicket(tkt);
      setPanelData(pData);
      setLoading(false);
    }
    loadData();
  }, [params.id]);

  if (loading || !ticket || !panelData) {
    return <div className="p-8 text-center text-xs text-slate-500">در حال بارگذاری چت تیکت...</div>;
  }

  const handleSendMessage = (text: string) => {
    const newMsg = {
      id: `msg-${Date.now()}`,
      sender: "customer" as const,
      senderName: panelData.passport.managerName,
      senderRole: "کارفرما",
      date: new Date().toLocaleTimeString("fa-IR", { hour: "2-digit", minute: "2-digit" }),
      text,
    };

    setTicket({
      ...ticket,
      messages: [...ticket.messages, newMsg],
      updatedAt: "هم‌اکنون",
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-2 sm:py-4">
      <div className="flex items-start gap-5">
        
        {/* سایدبار در دسکتاپ فعال و در موبایل مخفی است */}
        <div className="hidden lg:block shrink-0">
          <PanelSidebar />
        </div>

        {/* کادر چت متمرکز و تمام‌عرض */}
        <div className="flex-1 w-full flex h-[calc(100dvh-140px)] lg:h-[calc(100vh-125px)]">
          <div className="flex-1 flex flex-col rounded-2xl border border-slate-200 dark:border-industrial-800 bg-white dark:bg-industrial-900 shadow-xs overflow-hidden">
            
            <TicketChatHeader ticket={ticket} />

            <TicketChatMessages messages={ticket.messages} />

            <TicketChatComposer
              onSendMessage={handleSendMessage}
              isClosed={ticket.status === "closed"}
            />

          </div>
        </div>

      </div>
    </div>
  );
}