import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getProductBySlug,
  getProducts,
  getRelatedProducts,
} from "@/features/products/api";
import { ProductDetailHeader } from "@/features/products/components/product-detail-header";
import { ProductGallery } from "@/features/products/components/product-gallery";
import { ProductSpecTable } from "@/features/products/components/product-spec-table";
import { ProductPurchaseBox } from "@/features/products/components/product-purchase-box";
import { ProductReviews } from "@/features/products/components/product-reviews";
import { RelatedProducts } from "@/features/products/components/related-products";

interface ProductDetailPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const { products } = await getProducts({ limit: 100 });
  return products.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductDetailPageProps): Promise<Metadata> {
  const product = await getProductBySlug(params.slug);
  if (!product) {
    return {
      title: "قطعه مورد نظر یافت نشد | لیفتالند",
    };
  }

  return {
    title: `${product.name} (${product.partNumber}) | مشخصات فنی و استعلام | لیفتالند`,
    description: product.shortDescription,
  };
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = await getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = await getRelatedProducts(product.id, product.category);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 space-y-6 pb-20">
      
      {/* سربرگ مشخصات و پارت‌نامبر با کنتراست اصلاح‌شده */}
      <ProductDetailHeader product={product} />

      {/* چیدمان دو ستونی استاندارد */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start relative">
        
        {/* ستون اصلی: گالری عکس، پلاک فنی، ماتریس سازگاری، دانلود مستندات و نظرات تخصصی (۸ ستون) */}
        <div className="lg:col-span-8 space-y-6">
          <ProductGallery product={product} />
          <ProductSpecTable product={product} />
          <ProductReviews />
        </div>

        {/* سایدبار چسبان (Sticky) با اسکرول آزاد همراه با صفحه (۴ ستون) */}
        <aside className="lg:col-span-4 w-full sticky top-20 z-10">
          <ProductPurchaseBox product={product} />
        </aside>

      </div>

      {/* قطعات مکمل و پیشنهادی */}
      <RelatedProducts products={relatedProducts} />

    </div>
  );
}