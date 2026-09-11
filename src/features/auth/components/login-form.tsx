"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { formatNumber } from "@/lib/utils";

export function LoginForm() {
  const router = useRouter();
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const [timeLeft, setTimeLeft] = useState(120);
  const [timerActive, setTimerActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // مدیریت تایمر معکوس ۲ دقیقه‌ای
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (timerActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setTimerActive(false);
    }
    return () => clearInterval(interval);
  }, [timerActive, timeLeft]);

  // ارسال شماره موبایل و رفتن به مرحله کد تایید
  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || phone.length < 10) return;
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setStep("otp");
      setTimeLeft(120);
      setTimerActive(true);
    }, 600);
  };

  // مدیریت اینپوت‌های ۵ رقمی کد یکبار مصرف
  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) value = value.slice(-1);
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // فوکوس خودکار به اینپوت بعدی
    if (value && index < 4) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput?.focus();
    }
  };

  // تایید نهایی کد و هدایت به پنل کاربری
  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    const fullCode = otp.join("");
    if (fullCode.length < 5) return;
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      localStorage.setItem("user_session", JSON.stringify({ phone, authenticated: true, role: "customer" }));
      router.push("/panel");
    }, 800);
  };

  const handleResend = () => {
    setTimeLeft(120);
    setTimerActive(true);
    setOtp(["", "", "", "", ""]);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${formatNumber(mins).padStart(2, "۰")}:${formatNumber(secs).padStart(2, "۰")}`;
  };

  return (
    <div className="w-full max-w-md mx-auto rounded-2xl border border-slate-200 dark:border-industrial-800 bg-white dark:bg-industrial-900 p-6 sm:p-8 shadow-sm">
      
      {/* لوگو و عنوان بالای فرم */}
      <div className="text-center mb-6">
        <div className="w-10 h-10 rounded-xl bg-industrial-900 dark:bg-white text-white dark:text-industrial-950 flex items-center justify-center font-black text-base mx-auto mb-3">
          L
        </div>
        <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
          {step === "phone" ? "ورود به حساب کاربری" : "تایید شماره تلفن همراه"}
        </h2>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
          {step === "phone"
            ? "شماره همراه خود را جهت دریافت کد تایید یکبار مصرف وارد نمایید"
            : `کد پیامک‌شده به شماره ${phone} را وارد فرمایید`}
        </p>
      </div>

      {/* مرحله اول: شماره همراه */}
      {step === "phone" ? (
        <form onSubmit={handlePhoneSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
              شماره تلفن همراه 
            </label>
            <div className="relative flex items-center">
              <input
                type="tel"
                required
                autoFocus
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                className="w-full h-11 pr-3 pl-12 text-sm rounded-xl border border-slate-300 dark:border-industrial-700 bg-white dark:bg-industrial-950 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-safety-500 font-sans tracking-wide"
              />
              <span className="absolute left-3 text-xs font-mono text-slate-400 pointer-events-none">
                +۹۸
              </span>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading || !phone}
            className="w-full h-11 rounded-xl bg-industrial-900 hover:bg-industrial-800 text-white dark:bg-white dark:text-industrial-950 dark:hover:bg-slate-200 text-xs font-extrabold transition-all shadow-xs disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
            ) : (
              <span>دریافت کد تایید یکبار مصرف (SMS)</span>
            )}
          </button>

          <p className="text-[11px] text-slate-400 text-center leading-relaxed pt-2">
            ورود شما به منزله پذیرش ضوابط خدمات و استانداردهای بازرسی لیفتالند است.
          </p>
        </form>
      ) : (
        /* مرحله دوم: کد ۵ رقمی */
        <form onSubmit={handleVerifyOtp} className="space-y-5">
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                کد تایید ۵ رقمی:
              </span>
              <button
                type="button"
                onClick={() => setStep("phone")}
                className="text-[11px] text-techBlue-600 dark:text-blue-400 hover:underline"
              >
                ویرایش شماره
              </button>
            </div>

            <div className="flex justify-between gap-2 dir-ltr">
              {otp.map((digit, idx) => (
                <input
                  key={idx}
                  id={`otp-${idx}`}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  autoFocus={idx === 0}
                  onChange={(e) => handleOtpChange(idx, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(idx, e)}
                  className="w-11 sm:w-12 h-12 text-center text-lg font-bold rounded-xl border border-slate-300 dark:border-industrial-700 bg-white dark:bg-industrial-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-safety-500 font-mono shadow-2xs"
                />
              ))}
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading || otp.join("").length < 5}
            className="w-full h-11 rounded-xl bg-safety-500 hover:bg-safety-600 text-industrial-950 text-xs font-extrabold transition-all shadow-xs disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
            ) : (
              <span>تایید و ورود به پنل</span>
            )}
          </button>

          <div className="text-center text-xs text-slate-500 dark:text-slate-400 pt-1">
            {timerActive ? (
              <p>
                ارسال مجدد کد پس از:{" "}
                <span className="font-mono font-bold text-safety-600 dark:text-safety-400 dir-ltr inline-block">
                  {formatTime(timeLeft)}
                </span>
              </p>
            ) : (
              <button
                type="button"
                onClick={handleResend}
                className="font-bold text-industrial-900 dark:text-white hover:text-safety-500 underline"
              >
                ارسال مجدد کد پیامکی
              </button>
            )}
          </div>
        </form>
      )}

      <div className="mt-6 pt-4 border-t border-slate-100 dark:border-industrial-800 text-center">
        <Link
          href="/"
          className="text-xs text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
        >
          بازگشت به صفحه اصلی سایت ←
        </Link>
      </div>

    </div>
  );
}