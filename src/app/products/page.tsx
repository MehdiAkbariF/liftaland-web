import type { Metadata } from "next";
import { getProducts } from "@/features/products/api";
import { ProductsHeader } from "@/features/products/components/products-header";
import { ProductFilters } from "@/features/products/components/product-filters";
import { ProductGrid } from "@/features/products/components/product-grid";

export const metadata: Metadata = {
  title: "کاتالوگ و فروش قطعات تخصصی آسانسور | پارت‌نامبر و مشخصات فنی | لیفتالند",
  description:
    "مرجع استعلام و تامین قطعات آسانسور شامل موتورهای گیرلس سیسیور و ساسی، تابلو فرمان آریان با درایو آرکد، پاراشوت دیناتک، درب‌های سلکوم و یاسکاوا با اصالت کالا.",
};

interface ProductsPageProps {
  searchParams: {
    category?: string;
    q?: string;
    brand?: string;
    sort?: string;
    page?: string;
    limit?: string;
  };
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const pageNum = searchParams.page ? parseInt(searchParams.page, 10) : 1;
  const limitNum = searchParams.limit ? parseInt(searchParams.limit, 10) : 6;

  const { products, total, totalPages, currentPage, limit } = await getProducts({
    category: searchParams.category,
    query: searchParams.q,
    brand: searchParams.brand,
    sort: searchParams.sort,
    page: pageNum,
    limit: limitNum,
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 space-y-5 pb-16">
      
      {/* سربرگ جستجو و دسته‌بندی سریع */}
      <ProductsHeader />

      {/* چیدمان اصلی: سایدبار فیلترها + گرید قطعات با پیجینیشن */}
      <div className="flex flex-col lg:flex-row items-start gap-6">
        
        <ProductFilters />

        <div className="flex-1 w-full">
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100 dark:border-industrial-800 text-xs text-slate-500 dark:text-slate-400">
            <span>
              نمایش <strong className="text-slate-900 dark:text-white">{products.length}</strong> از <strong className="text-slate-900 dark:text-white">{total}</strong> قلم قطعه شناسنامه‌دار
            </span>
            <span className="text-[11px] font-mono">EN 81 COMPLIANT</span>
          </div>

          <ProductGrid
            products={products}
            total={total}
            totalPages={totalPages}
            currentPage={currentPage}
            limit={limit}
          />
        </div>

      </div>

    </div>
  );
}