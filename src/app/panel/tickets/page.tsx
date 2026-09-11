"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { PanelSidebar } from "@/features/panel/components/panel-sidebar";
import { TicketsHeader } from "@/features/panel/components/tickets-header";
import { TicketItemCard } from "@/features/panel/components/ticket-item-card";
import { NewTicketModal } from "@/features/panel/components/new-ticket-modal";
import { CUSTOMER_TICKETS } from "@/features/panel/api";
import { PanelTicket } from "@/features/panel/types";

function TicketsContent() {
  const searchParams = useSearchParams();
  const statusFilter = searchParams.get("status") || "all";

  const [tickets, setTickets] = useState<PanelTicket[]>(CUSTOMER_TICKETS);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (statusFilter === "all") {
      setTickets(CUSTOMER_TICKETS);
    } else {
      setTickets(CUSTOMER_TICKETS.filter((t) => t.status === statusFilter));
    }
  }, [statusFilter]);

  const handleCreateTicket = (data: any) => {
    const newTicket: PanelTicket = {
      id: `tkt-${Date.now()}`,
      ticketNumber: `TK-${Math.floor(1000 + Math.random() * 9000)}`,
      subject: data.subject,
      department: data.department === "drive" ? "پشتیبانی درایو و تابلو فرمان" : "استعلام قطعات و خدمات",
      priority: data.priority,
      priorityLabel: data.priority === "critical" ? "بحرانی (P1)" : "عادی",
      status: "open",
      statusLabel: "در انتظار بررسی مهندسی",
      createdAt: "لحظاتی پیش",
      updatedAt: "لحظاتی پیش",
      messages: [
        {
          id: `m-${Date.now()}`,
          sender: "customer",
          senderName: "علیرضا سلیمانی (مدیر ساختمان)",
          senderRole: "کارفرما",
          date: "امروز",
          text: data.message,
        },
      ],
    };

    setTickets([newTicket, ...tickets]);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-20">
      <div className="flex flex-col lg:flex-row items-start gap-6">
        
        {/* سایدبار پنل کارفرما */}
        <PanelSidebar />

        {/* محتوای تیکتینگ */}
        <div className="flex-1 w-full space-y-5">
          
          <TicketsHeader
            totalTickets={tickets.length}
            onOpenNewTicket={() => setModalOpen(true)}
          />

          {tickets.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-300 dark:border-industrial-800 bg-white dark:bg-industrial-900 p-8 text-center space-y-2">
              <span className="text-2xl block">💬</span>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                هیچ تیکتی در این وضعیت یافت نشد.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {tickets.map((t) => (
                <TicketItemCard key={t.id} ticket={t} />
              ))}
            </div>
          )}

        </div>

      </div>

      {/* مدال ثبت تیکت جدید */}
      <NewTicketModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onCreated={handleCreateTicket}
      />
    </div>
  );
}

export default function CustomerTicketsPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-xs text-slate-500">در حال بارگذاری میز تیکت‌ها...</div>}>
      <TicketsContent />
    </Suspense>
  );
}