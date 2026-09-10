import type { Metadata } from "next";
import { getPanelData } from "@/features/panel/api";
import { PanelSidebar } from "@/features/panel/components/panel-sidebar";
import { ProfileHeader } from "@/features/panel/components/profile-header";
import { ProfileForm } from "@/features/panel/components/profile-form";

export const metadata: Metadata = {
  title: "شناسنامه آسانسور و مشخصات کارفرما | پنل لیفتالند",
  description: "مدیریت اطلاعات ساختمان، پلاک مشخصات فنی موتور، تابلو فرمان و وضعیت بیمه‌نامه آسانسور.",
};

export default async function CustomerProfilePage() {
  const data = await getPanelData();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-20">
      <div className="flex flex-col lg:flex-row items-start gap-6">
        
        {/* سایدبار ناوبری پنل کارفرما */}
        <PanelSidebar />

        {/* محتوای پرونده و فرم شناسنامه */}
        <div className="flex-1 w-full space-y-6">
          <ProfileHeader />
          <ProfileForm initialPassport={data.passport} />
        </div>

      </div>
    </div>
  );
}