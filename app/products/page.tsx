import getAllProducts from "@/lib/getAllProducts";
import { TProduct } from "@/types/TProduct";
import ProductCard from "@/components/ProductCard";
import { Suspense } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";
export default async function page() {
  const productData: Promise<TProduct[]> = getAllProducts();

  return (
    <>
      <div className="p-4">
        <Suspense fallback={<LoadingSpinner />}>
          {/* @ts-expect-error Server Component */}
          <ProductCard data={productData} />
        </Suspense>
      </div>
    </>
  );
}
