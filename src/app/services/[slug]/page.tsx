import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug, getAllServices } from "@/features/services/api";
import { ServiceDetailHeader } from "@/features/services/components/service-detail-header";
import { ServiceChecklist } from "@/features/services/components/service-checklist";
import { ServiceFAQSection } from "@/features/services/components/service-faq";
import { ServiceRequestForm } from "@/features/services/components/service-request-form";

interface ServiceDetailPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const services = await getAllServices();
  return services.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const service = await getServiceBySlug(params.slug);
  if (!service) {
    return {
      title: "خدمت مورد نظر یافت نشد | لیفتالند",
    };
  }

  return {
    title: `${service.title} | استاندارد، چک‌لیست و تعرفه | لیفتالند`,
    description: service.problemSolved,
  };
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const service = await getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 space-y-6 pb-20">
      {/* سربرگ مشخصات خدمت */}
      <ServiceDetailHeader service={service} />

      {/* چیدمان اصلی دو ستونی (ستون محتوای تخصصی + سایدبار فرم کارشناسی) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        
        {/* ستون اصلی: شرح اهداف، پروتکل‌ها، چک‌لیست و پرسش‌های متداول (۸ ستون) */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* بخش تشریح ارزش و دامنه عارضه‌یابی */}
          <section className="rounded-2xl border border-slate-200 dark:border-industrial-800 bg-white dark:bg-industrial-900 p-5 sm:p-7 shadow-2xs">
            <h2 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white mb-2">
              هدف و ضرورت اجرای {service.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              {service.problemSolved}
            </p>

            <div className="space-y-2 p-3.5 rounded-xl border-r-4 border-safety-500 bg-slate-50 dark:bg-industrial-950 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              <span className="font-bold block text-slate-900 dark:text-white mb-1">
                تعهد انطباق استاندارد و گارانتی:
              </span>
              کلیه اقدامات اجرایی این بخش تحت ممیزی ناظران رسمی دارای پروانه از وزارت راه و شهرسازی و سندیکای آسانسور انجام شده و دارای پوشش رسمی بیمه مسئولیت مدنی حوادث است.
            </div>
          </section>

          {/* چک‌لیست بازرسی میدانی و اسناد تحویلی */}
          <ServiceChecklist
            checklistGroups={service.checklistGroups}
            deliverables={service.deliverables}
          />

          {/* پرسش‌های متداول فنی و حقوقی */}
          <ServiceFAQSection faqs={service.faqs} />

        </div>

        {/* سایدبار چسبان (Sticky): فرم ثبت درخواست کارشناسی حضوری (۴ ستون) */}
        <aside className="lg:col-span-4 w-full">
          <ServiceRequestForm serviceTitle={service.title} />
        </aside>

      </div>
    </div>
  );
}