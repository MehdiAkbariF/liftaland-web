import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function AuthDedicatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-50 dark:bg-industrial-950 text-slate-900 dark:text-slate-100 transition-colors">
      
      {/* هدر مینیمال: دکمه بازگشت به خانه + تم تاگل */}
      <header className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-extrabold text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-colors"
        >
          <span>→</span>
          <span>بازگشت به خانه</span>
        </Link>

        <ThemeToggle />
      </header>

      {/* محتوای فرم ورود در مرکز */}
      <main className="flex-1 flex items-center justify-center p-4">
        {children}
      </main>

      {/* فوتر مینیمال: لینک درباره لیفتالند */}
      <footer className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400 border-t border-slate-200/60 dark:border-industrial-800/60">
        <Link
          href="/about"
          className="font-bold hover:text-slate-900 dark:hover:text-white transition-colors"
        >
          درباره لیفتالند
        </Link>
        <p className="text-[11px] font-sans">
          © {new Date().toLocaleDateString("fa-IR-u-nu-latn", { year: "numeric" })} سامانه مهندسی قطعات و خدمات آسانسور لیفتالند
        </p>
      </footer>

    </div>
  );
}