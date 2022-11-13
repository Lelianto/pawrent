import { useRouter } from "next/router";
import { FC } from "react";

export interface IProductCard {
  imageUrl?: string;
  name?: string;
  city?: string;
  price?: string;
}

const ProductCard: FC<IProductCard> = ({ imageUrl, name, city, price }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/product-detail")}
      className="rounded-lg overflow-hidden shadow-lg border border-slate-100 cursor-pointer"
    >
      <img className="w-full" src={imageUrl} alt="Sunset in the mountains" />
      <div className="px-4 pb-4 pt-2">
        <div className="text-sm mb-2">{name}</div>
        <p className="text-gray-700 text-xs">{city}</p>
        <p className="text-gray-700 text-sm font-bold mt-2">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
