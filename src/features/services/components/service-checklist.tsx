import { ChecklistGroup } from "../types";

interface ServiceChecklistProps {
  checklistGroups: ChecklistGroup[];
  deliverables: string[];
}

export function ServiceChecklist({ checklistGroups, deliverables }: ServiceChecklistProps) {
  return (
    <div className="space-y-6">
      {/* ۱. چک‌لیست ۴۲ گانه تفکیکی */}
      <div>
        <div className="mb-4">
          <h2 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-safety-500" />
            <span>چک‌لیست نقاط بازرسی و پروتکل‌های فنی در محل پروژه</span>
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            آیتم‌هایی که توسط کارشناس در هر بازدید ممیزی و در شناسنامه آسانسور ثبت می‌گردند:
          </p>
        </div>

        <div className="space-y-4">
          {checklistGroups.map((group, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-slate-200 dark:border-industrial-800 bg-white dark:bg-industrial-900 p-4 sm:p-5 shadow-2xs"
            >
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 mb-3 pb-2 border-b border-slate-100 dark:border-industrial-800">
                {group.category}
              </h3>
              <ul className="space-y-2">
                {group.items.map((item, itemIdx) => (
                  <li
                    key={itemIdx}
                    className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300 leading-relaxed"
                  >
                    <span className="text-safety-500 font-bold shrink-0 mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ۲. اسناد و خروجی‌های تحویلی به کارفرما */}
      <div className="rounded-xl border border-slate-200 dark:border-industrial-800 bg-slate-50/70 dark:bg-industrial-950 p-5">
        <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
          <span>📋</span>
          <span>اسناد، مدارک و تعهدات تحویلی به مدیر ساختمان</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {deliverables.map((item, dIdx) => (
            <div
              key={dIdx}
              className="p-3 rounded-lg border border-slate-200/80 dark:border-industrial-800/80 bg-white dark:bg-industrial-900 text-xs text-slate-700 dark:text-slate-300 font-medium flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-techBlue-500 shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}