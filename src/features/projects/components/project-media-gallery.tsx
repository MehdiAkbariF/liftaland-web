"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ProjectVideo } from "../types";

interface ProjectMediaGalleryProps {
  mainImage: string;
  gallery?: string[];
  videos?: ProjectVideo[];
  projectTitle: string;
}

export function ProjectMediaGallery({
  mainImage,
  gallery = [],
  videos = [],
  projectTitle,
}: ProjectMediaGalleryProps) {
  const images = gallery.length > 0 ? gallery : [mainImage];
  const [activeImage, setActiveImage] = useState(images[0]);
  const [activeVideo, setActiveVideo] = useState<ProjectVideo | null>(null);

  // بستن مدال با دکمه Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveVideo(null);
    };
    if (activeVideo) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeVideo]);

  return (
    <div className="space-y-6">
      
      {/* بخش اول: گالری عکس کارگاهی پروژه */}
      <div className="space-y-3">
        {/* تصویر شاخص فعلی با نسبت ابعاد دقیق */}
        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-slate-200 dark:border-industrial-800 bg-slate-100 dark:bg-industrial-950 shadow-xs">
          <Image
            src={activeImage}
            alt={projectTitle}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 800px"
            className="object-cover transition-all duration-300"
          />
        </div>

        {/* بندانگشتی‌های گالری عکس */}
        {images.length > 1 && (
          <div className="flex items-center gap-2.5 overflow-x-auto pb-1 scrollbar-none">
            {images.map((img, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveImage(img)}
                className={`relative w-24 sm:w-28 aspect-[16/10] rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                  activeImage === img
                    ? "border-safety-500 scale-102 shadow-xs"
                    : "border-slate-200 dark:border-industrial-800 opacity-70 hover:opacity-100"
                }`}
              >
                <Image
                  src={img}
                  alt={`نمای کارگاهی ${idx + 1}`}
                  fill
                  sizes="120px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* بخش دوم: ویدیو گالری آزمون‌های میدانی (پخش بومی در سایت + اینستاگرام) */}
      {videos.length > 0 && (
        <div className="rounded-2xl border border-slate-200 dark:border-industrial-800 bg-white dark:bg-industrial-900 p-5 sm:p-6 shadow-xs space-y-4">
          
          {/* سربرگ ویدیو گالری */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100 dark:border-industrial-800">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                <span className="text-[11px] font-bold text-rose-600 dark:text-rose-400 font-mono tracking-wider">
                  FIELD VIDEO EVIDENCE
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">
                ویدیوهای مستند آزمون، صداگیری و لرزش‌سنجی این پروژه
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[11px] text-slate-400 font-medium">
                تعداد ویدیوها: {videos.length} مورد
              </span>
            </div>
          </div>

          {/* گرید ویدیوهای کارگاهی */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {videos.map((vid) => (
              <div
                key={vid.id}
                className="group relative rounded-xl overflow-hidden border border-slate-200 dark:border-industrial-800 bg-slate-950 flex flex-col justify-between"
              >
                {/* کاور ویدیو با دکمه پلی */}
                <div
                  onClick={() => setActiveVideo(vid)}
                  className="relative aspect-[16/10] w-full cursor-pointer overflow-hidden"
                >
                  <Image
                    src={vid.thumbnail}
                    alt={vid.title}
                    fill
                    sizes="400px"
                    className="object-cover opacity-65 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />

                  {/* تگ موضوع و زمان */}
                  <div className="absolute top-2.5 right-2.5 left-2.5 flex items-center justify-between pointer-events-none">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white/20 backdrop-blur-md text-white">
                      {vid.topic}
                    </span>
                    <span className="text-[10px] font-mono text-slate-300 bg-black/60 px-1.5 py-0.5 rounded">
                      {vid.duration}
                    </span>
                  </div>

                  {/* دکمه پلی وسط کاور */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-11 h-11 rounded-full bg-white/25 backdrop-blur-md border border-white/40 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-rose-600 transition-all shadow-md">
                      <svg className="w-5 h-5 translate-x-[-1px]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* عنوان و دکمه‌های اقدام زیر ویدیو */}
                <div className="p-3.5 bg-slate-900 border-t border-white/10 space-y-2.5">
                  <h4
                    onClick={() => setActiveVideo(vid)}
                    className="text-xs font-bold text-white hover:text-rose-400 cursor-pointer transition-colors leading-snug line-clamp-2"
                  >
                    {vid.title}
                  </h4>

                  <div className="flex items-center justify-between gap-2 pt-2 border-t border-white/10 text-[11px]">
                    <button
                      type="button"
                      onClick={() => setActiveVideo(vid)}
                      className="inline-flex items-center gap-1 font-bold text-rose-400 hover:text-rose-300 transition-colors"
                    >
                      <span>پخش آنلاین در سایت</span>
                      <span>▶</span>
                    </button>

                    {vid.instagramUrl && (
                      <a
                        href={vid.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-white transition-colors flex items-center gap-1"
                      >
                        <span>اینستاگرام</span>
                        <span>↗</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      )}

      {/* مدال لایت‌باکس بومی پخش ویدیو در خود سایت (Native HTML5 Video Modal) */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* پس‌زمینه تیره بلور */}
          <div
            onClick={() => setActiveVideo(null)}
            className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
          />

          {/* بدنه پلیر */}
          <div className="relative z-10 w-full max-w-3xl rounded-2xl border border-slate-700 bg-slate-950 shadow-2xl overflow-hidden">
            
            {/* هدر مدال پلیر */}
            <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/80">
              <div className="flex items-center gap-2 text-white text-xs font-bold truncate pl-4">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse shrink-0" />
                <span className="truncate">{activeVideo.title}</span>
              </div>
              <button
                type="button"
                onClick={() => setActiveVideo(null)}
                className="w-8 h-8 rounded-lg border border-slate-700 text-slate-400 hover:text-white hover:bg-slate-800 flex items-center justify-center text-xs shrink-0 transition-colors"
              >
                ✕
              </button>
            </div>

            {/* پخش‌کننده بومی HTML5 با کنترل‌های استاندارد */}
            <div className="relative aspect-[16/9] w-full bg-black">
              {activeVideo.videoSrc ? (
                <video
                  src={activeVideo.videoSrc}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                >
                  مرورگر شما از پخش ویدیو پشتیبانی نمی‌کند.
                </video>
              ) : (
                <div className="w-full h-full flex items-center justify-center text-xs text-slate-400">
                  فایل ویدیو در دسترس نیست.
                </div>
              )}
            </div>

            {/* فوتر مدال و دسترسی اینستاگرام */}
            <div className="p-3.5 bg-slate-900 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <span className="text-slate-400 text-[11px]">
                مستند رسمی آزمون مکانیکی و بازرسی فنی لیفتالند
              </span>

              {activeVideo.instagramUrl && (
                <a
                  href={activeVideo.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-rose-600 to-pink-600 hover:opacity-90 text-white font-bold text-[11px] transition-all"
                >
                  <span>مشاهده نظرات همکاران در اینستاگرام</span>
                  <span>←</span>
                </a>
              )}
            </div>

          </div>
        </div>
      )}

    </div>
  );
}