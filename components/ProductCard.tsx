import { TProduct } from "@/types/TProduct";
import Image from "next/image";
import Link from "next/link";

interface DataProps {
  data: Promise<TProduct[]>;
}

export default async function ProductCard({ data }: DataProps) {
  const products = await data;

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2">
      {products.map((product) => (
        <>
          <div
            key={product.id}
            className="rounded p-4 my-2 bg-white flex flex-col items-center justify-center hover:scale-y-105 duration-300 ease-in-out"
          >
            <h5 className="text-slate-900 text-lg font-bold">
              {product.title}
            </h5>
            <Link href={`/products/${product.id}`}>
              <Image
                src={product.image}
                alt="product-image"
                width={140}
                height={140}
                className="m-4"
              />
            </Link>
          </div>
        </>
      ))}
    </div>
  );
}
