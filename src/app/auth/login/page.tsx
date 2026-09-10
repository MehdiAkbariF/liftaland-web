import type { Metadata } from "next";
import { LoginForm } from "@/features/auth/components/login-form";

export const metadata: Metadata = {
  title: "ورود به پنل کاربری | سامانه مهندسی آسانسور لیفتالند",
  description: "ورود سریع با شماره تلفن همراه و رمز یکبار مصرف جهت پیگیری سفارشات، سوابق سرویس دوره‌ای و تیکت‌های فنی.",
};

export default function LoginPage() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-12">
      <LoginForm />
    </div>
  );
}