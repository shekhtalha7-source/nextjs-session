
import { Suspense } from "react";

const getProducts = async (id) => {
  const res = await fetch(
    `https://fakestoreapi.com/products/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  return res.json();
};

async function ProductInfo({ params }) {
  const { id } = await params;
  const product = await getProducts(id);

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-12">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl bg-white shadow-lg">

        <div className="grid grid-cols-1 md:grid-cols-2">

          {/* Product Image */}
          <div className="flex items-center justify-center bg-gray-50 p-8 md:p-12">
            <img
              src={product.image}
              alt={product.title}
              className="h-72 w-full object-contain transition duration-300 hover:scale-105 md:h-96"
            />
          </div>

          {/* Product Information */}
          <div className="flex flex-col justify-center p-6 md:p-10">

            <p className="mb-3 w-fit rounded-full bg-green-100 px-4 py-1 text-sm font-semibold capitalize text-green-700">
              {product.category}
            </p>

            <h1 className="mb-4 text-2xl font-bold leading-snug text-gray-800 md:text-3xl">
              {product.title}
            </h1>

            <div className="mb-5 flex items-center gap-2">
              <span className="text-lg text-yellow-500">
                ★ {product.rating.rate}
              </span>

              <span className="text-sm text-gray-500">
                ({product.rating.count} reviews)
              </span>
            </div>

            <p className="mb-2 text-sm text-gray-500">
              Price
            </p>

            <p className="mb-6 text-3xl font-extrabold text-green-600">
              ${product.price.toFixed(2)}
            </p>

            <div className="mb-8 border-t border-gray-200 pt-5">
              <h2 className="mb-2 text-lg font-semibold text-gray-800">
                Product Description
              </h2>

              <p className="text-sm leading-7 text-gray-600">
                {product.description}
              </p>
            </div>

            <button
              type="button"
              className="w-full rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700 active:scale-95"
            >
              Add to Cart
            </button>

            <p className="mt-4 text-center text-xs text-gray-400">
              Product ID: {product.id}
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductDetails({ params }) {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
          <p className="animate-pulse text-lg font-medium text-green-600">
            Loading product...
          </p>
        </div>
      }
    >
      <ProductInfo params={params} />
    </Suspense>
  );
}
