import Link from "next/link";

export default function ProductCard(props) {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition hover:shadow-xl">

      <div className="flex h-56 items-center justify-center p-5">
        <img
          src={props.product.image}
          alt={props.product.title}
          className="h-full max-w-full object-contain"
        />
      </div>

      <div className="p-5">
        <p className="mb-2 text-sm capitalize text-gray-500">
          {props.product.category}
        </p>

        <h2 className="mb-3 line-clamp-2 text-lg font-bold text-gray-800">
          {props.product.title}
        </h2>

        <p className="mb-4 line-clamp-3 text-sm text-gray-600">
          {props.product.description}
        </p>

        <div className="mb-4 flex items-center justify-between">
          <p className="text-2xl font-bold text-green-600">
            ${props.product.price}
          </p>

          <p className="text-sm text-yellow-600">
            ⭐ {props.product.rating.rate}
            <span className="ml-1 text-gray-500">
              ({props.product.rating.count})
            </span>
          </p>
        </div>
<Link href={`/products/${props.product.id}`}>
<button className="w-full rounded-lg bg-green-600 px-4 py-3 font-semibold text-white transition hover:bg-green-700">
          View Details
        </button>
</Link>
        
      </div>
    </div>
  );
}