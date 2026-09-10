import Link from "next/link";
import { Product } from "../types";
import { formatPrice } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group flex flex-col justify-between rounded-xl border border-slate-200 dark:border-industrial-800 bg-white dark:bg-industrial-900 p-5 transition-all hover:border-slate-300 dark:hover:border-industrial-700 hover:shadow-sm">
      <div>
        {/* شناسه فنی و پارت‌نامبر */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <Badge variant="tech">{product.partNumber}</Badge>
          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
            {product.brand}
          </span>
        </div>

        {/* نام اصلی و دسته‌بندی */}
        <Link href={`/products/${product.slug}`} className="block">
          <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 group-hover:text-techBlue-600 dark:group-hover:text-blue-400 transition-colors leading-snug mb-2">
            {product.name}
          </h3>
        </Link>
        <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed mb-4">
          {product.shortDescription}
        </p>

        {/* شاخص‌های فنی کلیدی با فونت روان فارسی */}
        <div className="grid grid-cols-2 gap-2 p-2.5 rounded-lg bg-slate-50 dark:bg-industrial-950/60 border border-slate-100 dark:border-industrial-800/60 text-xs mb-4">
          {product.specs.slice(0, 2).map((spec, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-[11px] text-slate-400 dark:text-slate-500">{spec.key}</span>
              <span className="text-slate-800 dark:text-slate-200 font-semibold truncate">
                {spec.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* قیمت و اکشن مشاهده */}
      <div className="pt-3 border-t border-slate-100 dark:border-industrial-800/80 flex items-center justify-between">
        <div>
          <span className="block text-[11px] text-slate-400 dark:text-slate-500">قیمت واحد:</span>
          <span className="text-sm font-bold text-slate-900 dark:text-white">
            {formatPrice(product.price)}
          </span>
        </div>
        <Link
          href={`/products/${product.slug}`}
          className="inline-flex items-center justify-center text-xs font-semibold px-3 py-1.5 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-800 dark:bg-industrial-800 dark:text-slate-200 dark:hover:bg-industrial-700 transition-colors"
        >
          بررسی فنی
        </Link>
      </div>
    </div>
  );
}