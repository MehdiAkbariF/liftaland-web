import { ServiceFAQ } from "../types";

interface ServiceFAQProps {
  faqs: ServiceFAQ[];
}

export function ServiceFAQSection({ faqs }: ServiceFAQProps) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="rounded-2xl border border-slate-200 dark:border-industrial-800 bg-white dark:bg-industrial-900 p-5 sm:p-7 shadow-2xs">
      <div className="mb-4 pb-3 border-b border-slate-100 dark:border-industrial-800">
        <h3 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
          <span>❓</span>
          <span>پرسش‌های متداول مدیران ساختمان و کارفرمایان</span>
        </h3>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="p-4 rounded-xl border border-slate-100 dark:border-industrial-800 bg-slate-50/70 dark:bg-industrial-950"
          >
            <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 mb-2 leading-snug">
              {faq.question}
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}