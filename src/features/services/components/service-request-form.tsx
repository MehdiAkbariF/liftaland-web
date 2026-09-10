"use client";

import { useState } from "react";

interface ServiceRequestFormProps {
  serviceTitle: string;
}

export function ServiceRequestForm({ serviceTitle }: ServiceRequestFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    buildingType: "residential",
    stops: "5",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    // ارسال به API در فازهای بعدی متصل می‌شود
    setSubmitted(true);
  };

  return (
    <div className="rounded-2xl border-2 border-slate-200 dark:border-industrial-800 bg-white dark:bg-industrial-900 p-5 sm:p-6 shadow-sm sticky top-20">
      <div className="mb-4 pb-3 border-b border-slate-100 dark:border-industrial-800">
        <span className="text-[10px] font-bold text-safety-600 dark:text-safety-400 tracking-wider block mb-1">
          ON-SITE TECHNICAL AUDIT
        </span>
        <h3 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">
          درخواست بازدید کارشناسی حضوری
        </h3>
        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
          برای: {serviceTitle}
        </p>
      </div>

      {submitted ? (
        <div className="p-4 rounded-xl border border-emerald-200 dark:border-emerald-800/50 bg-emerald-50 dark:bg-emerald-950/40 text-center space-y-2">
          <span className="w-8 h-8 rounded-full bg-emerald-500 text-white inline-flex items-center justify-center font-bold text-sm">
            ✓
          </span>
          <h4 className="text-xs font-bold text-emerald-800 dark:text-emerald-300">
            درخواست کارشناسی شما با موفقیت ثبت شد
          </h4>
          <p className="text-[11px] text-emerald-700 dark:text-emerald-400 leading-relaxed">
            مهندس کشیک منطقه ظرف ۳۰ دقیقه آینده جهت هماهنگی ساعت بازدید با شماره {formData.phone} تماس خواهد گرفت.
          </p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="text-[11px] text-emerald-800 dark:text-emerald-300 underline font-semibold mt-2 block mx-auto"
          >
            ثبت درخواست جدید
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
          <div>
            <label className="block text-slate-700 dark:text-slate-300 font-semibold mb-1">
              نام و نام‌خانوادگی (مدیر / کارفرما): *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="مثال: مهندس رضایی"
              className="w-full h-10 px-3 rounded-lg border border-slate-300 dark:border-industrial-700 bg-white dark:bg-industrial-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-safety-500"
            />
          </div>

          <div>
            <label className="block text-slate-700 dark:text-slate-300 font-semibold mb-1">
              شماره تلفن همراه جهت هماهنگی: *
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="۰۹۱۲۳۴۵۶۷۸۹"
              className="w-full h-10 px-3 rounded-lg border border-slate-300 dark:border-industrial-700 bg-white dark:bg-industrial-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-safety-500 font-sans"
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-slate-700 dark:text-slate-300 font-semibold mb-1">
                نوع کاربری:
              </label>
              <select
                value={formData.buildingType}
                onChange={(e) => setFormData({ ...formData, buildingType: e.target.value })}
                className="w-full h-10 px-2 rounded-lg border border-slate-300 dark:border-industrial-700 bg-white dark:bg-industrial-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-safety-500"
              >
                <option value="residential">مسکونی</option>
                <option value="commercial">اداری / تجاری</option>
                <option value="medical">پزشکی / بیمارستان</option>
              </select>
            </div>

            <div>
              <label className="block text-slate-700 dark:text-slate-300 font-semibold mb-1">
                تعداد توقف:
              </label>
              <input
                type="number"
                min="2"
                max="40"
                value={formData.stops}
                onChange={(e) => setFormData({ ...formData, stops: e.target.value })}
                className="w-full h-10 px-3 rounded-lg border border-slate-300 dark:border-industrial-700 bg-white dark:bg-industrial-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-safety-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-slate-700 dark:text-slate-300 font-semibold mb-1">
              شرح وضعیت، نقص یا آدرس تقریبی:
            </label>
            <textarea
              rows={3}
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              placeholder="مثال: منطقه سعادت‌آباد، صدای غیرعادی هنگام توقف در طبقه ۴..."
              className="w-full p-2.5 rounded-lg border border-slate-300 dark:border-industrial-700 bg-white dark:bg-industrial-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-safety-500 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full h-11 rounded-lg bg-safety-500 hover:bg-safety-600 text-industrial-950 font-extrabold text-xs transition-colors shadow-xs"
          >
            ثبت نهایی و اعزام کارشناس اولیه
          </button>

          <p className="text-[10px] text-slate-400 text-center">
            بازدید اولیه و ممیزی نواقص در تهران رایگان است.
          </p>
        </form>
      )}

      {/* خط ارتباط اضطراری در پایین فرم */}
      <div className="mt-4 pt-4 border-t border-slate-100 dark:border-industrial-800 text-center">
        <span className="text-[11px] text-slate-400 block mb-1">
          نیاز به اعزام فوری یا رفع توقف بحرانی دارید؟
        </span>
        <a
          href="tel:02188880000"
          className="text-xs font-bold text-safety-600 dark:text-safety-400 hover:underline inline-flex items-center gap-1.5"
        >
          <span>تماس مستقیم با مهندس کشیک:</span>
          <span className="dir-ltr font-bold">۰۲۱ - ۸۸۸۸ ۰۰۰۰</span>
        </a>
      </div>
    </div>
  );
}