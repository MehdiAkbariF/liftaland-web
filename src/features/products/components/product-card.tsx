import Link from "next/link";
import Image from "next/image";
import { Product } from "../types";
import { formatPrice } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group flex flex-col justify-between rounded-xl border border-slate-200 dark:border-industrial-800 bg-white dark:bg-industrial-900 overflow-hidden transition-all hover:border-slate-300 dark:hover:border-industrial-700 hover:shadow-xs">
      <div>
        {/* باکس عکس فشرده و مهندسی با نسبت 16:10 */}
        <Link
          href={`/products/${product.slug}`}
          className="block relative aspect-[16/10] w-full overflow-hidden bg-slate-100 dark:bg-industrial-950/80 border-b border-slate-100 dark:border-industrial-800/80"
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            loading="lazy"
          />
          
          {/* برچسب‌های اطلاعاتی روی عکس */}
          <div className="absolute top-2.5 right-2.5 left-2.5 flex items-center justify-between pointer-events-none">
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white/90 dark:bg-industrial-900/90 text-slate-900 dark:text-white backdrop-blur-xs shadow-2xs">
              {product.brand}
            </span>
            {product.isAvailable && (
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/95 text-white backdrop-blur-xs shadow-2xs flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                موجود در انبار
              </span>
            )}
          </div>
        </Link>

        {/* محتوای فنی کارت با پدینگ متوازن */}
        <div className="p-3.5 sm:p-4">
          <div className="flex items-center justify-between gap-2 mb-2">
            <Badge variant="tech">{product.partNumber}</Badge>
            <span className="text-[10px] font-mono text-slate-400">
              {product.standard}
            </span>
          </div>

          <Link href={`/products/${product.slug}`} className="block">
            <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 group-hover:text-techBlue-600 dark:group-hover:text-blue-400 transition-colors leading-snug mb-1.5 line-clamp-1">
              {product.name}
            </h3>
          </Link>

          <p className="text-[11px] text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed mb-3">
            {product.shortDescription}
          </p>

          {/* شاخص‌های فنی فشرده دو ستونی */}
          <div className="grid grid-cols-2 gap-1.5 p-2 rounded-md bg-slate-50 dark:bg-industrial-950/60 border border-slate-100 dark:border-industrial-800/60 text-[11px]">
            {product.specs.slice(0, 2).map((spec, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-[10px] text-slate-400 dark:text-slate-500">{spec.key}</span>
                <span className="text-slate-800 dark:text-slate-200 font-bold truncate">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* قیمت و دکمه با پدینگ استاندارد و بدون Wrap */}
      <div className="p-3.5 sm:p-4 pt-0">
        <div className="pt-2.5 border-t border-slate-100 dark:border-industrial-800/80 flex items-center justify-between gap-2">
          <div>
            <span className="block text-[10px] text-slate-400 dark:text-slate-500">قیمت کارشناسی:</span>
            <span className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">
              {formatPrice(product.price)}
            </span>
          </div>

          <Link
            href={`/products/${product.slug}`}
            className="inline-flex items-center justify-center text-xs font-bold px-4 h-9 rounded-lg bg-industrial-900 hover:bg-industrial-800 text-white dark:bg-white dark:text-industrial-950 dark:hover:bg-slate-200 transition-colors shrink-0 shadow-2xs whitespace-nowrap"
          >
            بررسی مشخصات
          </Link>
        </div>
      </div>
    </div>
  );
}