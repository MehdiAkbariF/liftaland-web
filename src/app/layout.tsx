import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ConditionalLayout } from "@/components/layout/conditional-layout";

const iranYekan = localFont({
  src: [
    {
      path: "../../public/fonts/IRANYekanXFaNum-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/IRANYekanWebFn-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/IRANYekanXFaNum-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-iranyekan",
  display: "swap",
});

export const metadata: Metadata = {
  title: "لیفتالند | سامانه مهندسی قطعات و خدمات آسانسور",
  description:
    "مرجع تخصصی معرفی و تامین قطعات فنی، موتور، تابلو فرمان و خدمات استاندارد، سرویس و نوسازی آسانسور.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className={iranYekan.variable} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme');
                const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (theme === 'dark' || (!theme && systemDark)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-slate-50 dark:bg-industrial-950 text-slate-900 dark:text-slate-100 font-sans antialiased selection:bg-safety-500 selection:text-black">
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  );
}