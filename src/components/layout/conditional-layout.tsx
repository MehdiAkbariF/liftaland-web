"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { BottomNav } from "@/components/layout/bottom-nav";

export function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  // اگر در مسیر لاگین یا احراز هویت بودیم، هدر و فوتر عمومی را حذف کن
  const isAuthPage = pathname.startsWith("/login") || pathname.startsWith("/auth");

  if (isAuthPage) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <main className="flex-1 pb-16 lg:pb-0">{children}</main>
      <Footer />
      <BottomNav />
    </>
  );
}