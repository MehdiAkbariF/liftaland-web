"use client";

import { useState } from "react";

interface NewTicketModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreated: (ticketData: any) => void;
}

export function NewTicketModal({ isOpen, onClose, onCreated }: NewTicketModalProps) {
  const [department, setDepartment] = useState("drive");
  const [priority, setPriority] = useState<"normal" | "high" | "critical">("normal");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!subject || !message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      onCreated({
        subject,
        department,
        priority,
        message,
      });
      setIsSubmitting(false);
      onClose();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/75 backdrop-blur-xs transition-opacity"
      />

      <div className="relative z-10 w-full max-w-lg rounded-2xl border border-slate-200 dark:border-industrial-700 bg-white dark:bg-industrial-900 shadow-2xl overflow-hidden">
        
        {/* هدر مدال */}
        <div className="p-4 sm:p-5 border-b border-slate-100 dark:border-industrial-800 flex items-center justify-between">
          <div>
            <h3 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">
              طرح پرسش یا درخواست فنی جدید
            </h3>
            <span className="text-[11px] text-slate-400">ارسال مستقیم به کارتابل سرپرست مهندسی لیفتالند</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-lg border border-slate-200 dark:border-industrial-700 text-slate-400 hover:text-slate-900 dark:hover:text-white flex items-center justify-center text-xs"
          >
            ✕
          </button>
        </div>

        {/* فرم */}
        <form onSubmit={handleSubmit} className="p-5 space-y-4 text-xs">
          
          {/* هشدار هوشمند برای موارد بحرانی */}
          {priority === "critical" && (
            <div className="p-3 rounded-xl border border-rose-200 dark:border-rose-800/40 bg-rose-50 dark:bg-rose-950/30 text-rose-700 dark:text-rose-300 space-y-1">
              <strong className="block">آیا آسانسور متوقف شده یا مسافر محبوس است؟</strong>
              <p className="text-[11px]">
                در موارد اضطراری لطفاً منتظر تیکت نمانید و فوراً با خط مستقیم کشیک فوریت‌ها (<a href="tel:02188880001" className="underline font-bold dir-ltr">۰۲۱-۸۸۸۸۰۰۰۱</a>) تماس بگیرید.
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1.5">
                دپارتمان مهندسی مربوطه:
              </label>
              <select
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className="w-full h-10 px-3 rounded-xl border border-slate-300 dark:border-industrial-700 bg-white dark:bg-industrial-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-safety-500"
              >
                <option value="drive">پشتیبانی درایو و تابلو فرمان</option>
                <option value="inspection">ممیزی و بازرسی استاندارد</option>
                <option value="parts">استعلام اصالت و پارت‌نامبر قطعه</option>
                <option value="finance">امور قراردادها و صورتحساب</option>
              </select>
            </div>

            <div>
              <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1.5">
                سطح فوریت و اولویت:
              </label>
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value as any)}
                className="w-full h-10 px-3 rounded-xl border border-slate-300 dark:border-industrial-700 bg-white dark:bg-industrial-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-safety-500"
              >
                <option value="normal">عادی (پاسخ ظرف ۲۴ ساعت)</option>
                <option value="high">بالا (پاسخ ظرف ۳ ساعت)</option>
                <option value="critical">بحرانی / توقف سیستم (اولویت ۱)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1.5">
              موضوع تیکت (مختصر): *
            </label>
            <input
              type="text"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="مثال: صدای زوزه درایو هنگام استارت طبقه ۳"
              className="w-full h-10 px-3 rounded-xl border border-slate-300 dark:border-industrial-700 bg-white dark:bg-industrial-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-safety-500"
            />
          </div>

          <div>
            <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1.5">
              شرح دقیق خطا، سوال یا عیب آسانسور: *
            </label>
            <textarea
              rows={4}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="کد خطای نمایشگر، زمان بروز صدا، یا مشخصات دقیق قطعه مورد نظر را قید فرمایید..."
              className="w-full p-3 rounded-xl border border-slate-300 dark:border-industrial-700 bg-white dark:bg-industrial-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-safety-500 resize-none"
            />
          </div>

          <div className="pt-2 flex items-center justify-end gap-2 border-t border-slate-100 dark:border-industrial-800">
            <button
              type="button"
              onClick={onClose}
              className="px-4 h-10 rounded-xl border border-slate-300 dark:border-industrial-700 text-slate-600 dark:text-slate-300 font-bold hover:bg-slate-100 dark:hover:bg-industrial-800"
            >
              انصراف
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 h-10 rounded-xl bg-safety-500 hover:bg-safety-600 text-industrial-950 font-extrabold transition-all shadow-xs disabled:opacity-50"
            >
              {isSubmitting ? "در حال ثبت..." : "ارسال به کارشناس"}
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}