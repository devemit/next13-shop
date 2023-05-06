import getProduct from "@/lib/getProduct";
import { TProduct } from "@/types/TProduct";
import Image from "next/image";

interface ParamsProps {
  params: {
    id: string;
  };
}

export default async function SingleProduct({ params: { id } }: ParamsProps) {
  const response: Promise<TProduct> = getProduct(id);
  const product = await response;

  return (
    <>
      <div className="flex h-screen items-center justify-center p-4 bg-white">
        <div className="flex flex-col text-left lg:mx-10">
          <h1 className="text-blue-600 text-3xl md:text-3xl lg:text-4xl font-semibold max-w-sm">
            {product.title}
          </h1>
          <p className="max-w-sm md:max-w-lg md:text-xl text-gray-500 text-lg my-10">
            {product.description}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <Image
            className="mix-blend-multiply contrast-100"
            width={220}
            height={250}
            src={product.image}
            alt="single-product"
          />
          <button
            type="button"
            className="text-white w-full justify-between bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {product.price}
            <span className="mr-1.5">$</span>
          </button>
          <button
            type="button"
            className="text-white justify-between bg-blue-700 w-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to Cart
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
