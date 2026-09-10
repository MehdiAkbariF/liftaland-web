import Link from "next/link";
import { Product } from "../types";

interface ProductDetailHeaderProps {
  product: Product;
}

export function ProductDetailHeader({ product }: ProductDetailHeaderProps) {
  return (
    <div className="w-full pb-4 border-b border-slate-200 dark:border-industrial-800 space-y-3">
      {/* مسیر ناوبری (Breadcrumbs) */}
      <nav className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium overflow-x-auto whitespace-nowrap scrollbar-none">
        <Link href="/" className="hover:text-slate-900 dark:hover:text-white transition-colors">
          صفحه اصلی
        </Link>
        <span className="text-slate-300 dark:text-slate-600">/</span>
        <Link href="/products" className="hover:text-slate-900 dark:hover:text-white transition-colors">
          کاتالوگ قطعات
        </Link>
        <span className="text-slate-300 dark:text-slate-600">/</span>
        <Link href={`/products?category=${product.category}`} className="hover:text-slate-900 dark:hover:text-white transition-colors">
          {product.categoryLabel}
        </Link>
        <span className="text-slate-300 dark:text-slate-600">/</span>
        <span className="text-slate-900 dark:text-slate-100 font-bold truncate">
          {product.name}
        </span>
      </nav>

      {/* متاداده و تگ‌های پارت‌نامبر با کنتراست دقیق و سازگار با دارک‌مود */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-slate-100 dark:bg-industrial-800 text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-industrial-700 font-mono">
          {product.partNumber}
        </span>
        <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-slate-100 dark:bg-industrial-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-industrial-700">
          {product.brand}
        </span>
        <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-slate-100 dark:bg-industrial-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-industrial-700 font-mono">
          {product.standard}
        </span>
      </div>

      <h1 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
        {product.name}
      </h1>
    </div>
  );
}