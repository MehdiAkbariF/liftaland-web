"use client";

import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "emergency",
    stops: "",
    address: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <div className="rounded-2xl border border-slate-200 dark:border-industrial-800 bg-white dark:bg-industrial-900 p-6 sm:p-8 shadow-xs">
      <div className="mb-6 pb-4 border-b border-slate-100 dark:border-industrial-800">
        <span className="text-[11px] font-bold text-safety-600 dark:text-safety-400 tracking-wider block mb-1">
          DIRECT ENGINEERING INQUIRY
        </span>
        <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">
          ثبت الکترونیکی درخواست کارشناسی و استعلام قطعه
        </h2>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
          اطلاعات آسانسور خود را وارد نمایید؛ کارشناس مربوطه ظرف حداکثر ۳۰ دقیقه با شما تماس خواهد گرفت.
        </p>
      </div>

      {submitted ? (
        <div className="p-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/40 text-center space-y-3">
          <span className="w-10 h-10 rounded-full bg-emerald-500 text-white inline-flex items-center justify-center font-bold text-base">
            ✓
          </span>
          <h3 className="text-sm font-bold text-emerald-800 dark:text-emerald-300">
            درخواست فنی شما با موفقیت در کارتابل مهندسی ثبت شد
          </h3>
          <p className="text-xs text-emerald-700 dark:text-emerald-400 max-w-md mx-auto leading-relaxed">
            کد رهگیری پیگیری شما: <strong className="font-mono text-slate-900 dark:text-white">LFT-{Math.floor(100000 + Math.random() * 900000)}</strong>
            <br />
            کارشناس شیفت با شماره {formData.phone} تماس حاصل خواهد نمود.
          </p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="text-xs text-emerald-800 dark:text-emerald-300 underline font-semibold mt-3 block mx-auto"
          >
            ثبت درخواست جدید
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1.5">
                نام و نام‌خانوادگی (مدیر / خریدار): *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="مثال: مهندس رضوانی"
                className="w-full h-10 px-3 rounded-lg border border-slate-300 dark:border-industrial-700 bg-white dark:bg-industrial-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-safety-500"
              />
            </div>

            <div>
              <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1.5">
                شماره تلفن تماس مستقیم: *
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
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1.5">
                موضوع و حوزه درخواست:
              </label>
              <select
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full h-10 px-3 rounded-lg border border-slate-300 dark:border-industrial-700 bg-white dark:bg-industrial-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-safety-500"
              >
                <option value="emergency">اعزام فوری و رفع خرابی اضطراری</option>
                <option value="parts">استعلام قیمت و موجودی قطعه با پارت‌نامبر</option>
                <option value="maintenance">انعقاد قرارداد سرویس و نگهداری ماهانه</option>
                <option value="standard">ممیزی و اخذ تاییدیه استاندارد ادواری</option>
                <option value="modernization">طرح نوسازی و بازسازی موتورخانه</option>
              </select>
            </div>

            <div>
              <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1.5">
                تعداد توقف (طبقات ساختمان):
              </label>
              <input
                type="text"
                value={formData.stops}
                onChange={(e) => setFormData({ ...formData, stops: e.target.value })}
                placeholder="مثال: ۸ توقف مسکونی"
                className="w-full h-10 px-3 rounded-lg border border-slate-300 dark:border-industrial-700 bg-white dark:bg-industrial-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-safety-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1.5">
              آدرس تقریبی یا منطقه پروژه (اختیاری):
            </label>
            <input
              type="text"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              placeholder="مثال: تهران، منطقه ۲، سعادت‌آباد"
              className="w-full h-10 px-3 rounded-lg border border-slate-300 dark:border-industrial-700 bg-white dark:bg-industrial-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-safety-500"
            />
          </div>

          <div>
            <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1.5">
              شرح درخواست، پارت‌نامبر قطعه یا نوع صدا و خطای آسانسور:
            </label>
            <textarea
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="لطفاً مدل موتور، نام قطعه یا شرح توقف آسانسور را برای آمادگی بیشتر تکنسین قید فرمایید..."
              className="w-full p-3 rounded-lg border border-slate-300 dark:border-industrial-700 bg-white dark:bg-industrial-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-safety-500 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto px-8 h-11 rounded-lg bg-safety-500 hover:bg-safety-600 text-industrial-950 font-extrabold text-xs transition-colors shadow-2xs"
          >
            ثبت و ارسال به کارشناس شیفت
          </button>
        </form>
      )}
    </div>
  );
}