"use client";

import { useEffect, useRef } from "react";
import { TicketMessage } from "../types";

interface TicketChatMessagesProps {
  messages: TicketMessage[];
}

export function TicketChatMessages({ messages }: TicketChatMessagesProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // اسکرول اختصاصی فقط درون محفظه پیام‌ها (بدون پرش صفحه اصلی)
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  return (
    <div
      ref={containerRef}
      className="flex-1 overflow-y-auto p-3 sm:p-5 space-y-3.5 scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-industrial-700"
    >
      {/* جداکننده شروع تاریخچه */}
      <div className="text-center my-1">
        <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-slate-100 dark:bg-industrial-800 text-slate-500 dark:text-slate-400 select-none">
          آغاز گفتگوی فنی با سرپرست ناظر لیفتالند
        </span>
      </div>

      {messages.map((msg) => {
        const isCustomer = msg.sender === "customer";

        return (
          <div
            key={msg.id}
            className={`flex flex-col ${isCustomer ? "items-start" : "items-end"}`}
          >
            {/* عنوان فرستنده */}
            <span className="text-[9px] font-bold text-slate-400 dark:text-slate-500 mb-1 px-1">
              {msg.senderName} {isCustomer ? "" : "• ناظر فنی لیفتالند"}
            </span>

            {/* حباب چت با کنتراست دقیق و هماهنگ با دارک‌مود */}
            <div
              className={`relative max-w-[92%] sm:max-w-[75%] p-3.5 rounded-2xl shadow-2xs text-xs sm:text-[13px] leading-relaxed transition-all ${
                isCustomer
                  ? "bg-slate-100 dark:bg-industrial-800 text-slate-900 dark:text-slate-100 rounded-tr-xs border border-slate-200 dark:border-industrial-700"
                  : "bg-white dark:bg-industrial-950 text-slate-900 dark:text-slate-100 rounded-tl-xs border-2 border-slate-200 dark:border-industrial-700 shadow-xs"
              }`}
            >
              <p className="whitespace-pre-wrap break-words leading-relaxed pl-12 pb-1.5 text-justify">
                {msg.text}
              </p>

              {/* نشان تاییدیه برای پیام ادمین */}
              {!isCustomer && (
                <div className="pt-2 mt-1 border-t border-slate-100 dark:border-industrial-800 flex items-center gap-1 text-[10px] font-bold text-amber-600 dark:text-amber-400">
                  <span>✓</span>
                  <span>پاسخ رسمی سرپرست فنی لیفتالند</span>
                </div>
              )}

              {/* زمان و تیک دوگانه تلگرامی */}
              <div className="absolute bottom-1.5 left-2.5 flex items-center gap-1 text-[10px] text-slate-400 font-mono select-none">
                <span>{msg.date}</span>
                <span className="text-techBlue-600 dark:text-blue-400 font-bold">✓✓</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}