"use client";

import { useEffect, useRef } from "react";
import { TicketMessage } from "../types";

interface TicketChatMessagesProps {
  messages: TicketMessage[];
}

export function TicketChatMessages({ messages }: TicketChatMessagesProps) {
  const scrollEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto p-3 sm:p-5 space-y-3 scrollbar-thin">
      
      {/* جداکننده تاریخچه */}
      <div className="text-center my-1">
        <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-industrial-800 text-slate-500 dark:text-slate-400">
          آغاز گفتگوی فنی با سرپرست ناظر
        </span>
      </div>

      {messages.map((msg) => {
        const isCustomer = msg.sender === "customer";

        return (
          <div
            key={msg.id}
            className={`flex flex-col ${isCustomer ? "items-start" : "items-end"}`}
          >
            {/* فرستنده */}
            <span className="text-[9px] font-bold text-slate-400 dark:text-slate-500 mb-0.5 px-1">
              {msg.senderName} {isCustomer ? "" : "• ناظر فنی لیفتالند"}
            </span>

            {/* حباب چت */}
            <div
              className={`relative max-w-[92%] sm:max-w-[75%] p-3 rounded-2xl shadow-xs text-xs sm:text-[13px] leading-relaxed ${
                isCustomer
                  ? "bg-slate-100 dark:bg-industrial-800 text-slate-900 dark:text-slate-100 rounded-tr-xs border border-slate-200 dark:border-industrial-700"
                  : "bg-safety-50 dark:bg-safety-950/30 text-slate-900 dark:text-slate-100 rounded-tl-xs border border-safety-500/30"
              }`}
            >
              <p className="whitespace-pre-wrap break-words leading-relaxed pl-10 pb-1">
                {msg.text}
              </p>

              {/* زمان و تیک */}
              <div className="absolute bottom-1 left-2 flex items-center gap-0.5 text-[9px] text-slate-400 font-mono select-none">
                <span>{msg.date}</span>
                <span className="text-techBlue-600 dark:text-blue-400 font-bold">✓✓</span>
              </div>
            </div>
          </div>
        );
      })}

      <div ref={scrollEndRef} />
    </div>
  );
}