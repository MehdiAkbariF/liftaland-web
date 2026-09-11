import type { Metadata } from "next";
import { LoginForm } from "@/features/auth/components/login-form";

export const metadata: Metadata = {
  title: "ورود به پنل کاربری | لیفتالند",
  description: "ورود سریع با شماره تلفن همراه و کد یکبار مصرف جهت پیگیری سفارشات و سوابق سرویس آسانسور.",
};

export default function LoginPage() {
  return <LoginForm />;
}