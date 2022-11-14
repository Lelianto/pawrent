import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import ModalProduct from "./ProductModal";

export interface IProductCard {
  imageUrl?: string;
  name?: string;
  description?: string;
  city?: string;
  price?: string | number;
  stocks?: number;
  sku?: string;
}

const ProductCard: FC<IProductCard> = ({
  imageUrl,
  name,
  city,
  price,
  stocks = 0,
  description,
  sku,
}) => {
  const router = useRouter();
  const [update, setUpdate] = useState<boolean>(false);

  return (
    <div className="relative">
      <div
        onClick={() => router.push("/product-detail")}
        className="rounded-lg overflow-hidden shadow-lg border border-slate-100 cursor-pointer"
      >
        <img className="w-full" src={imageUrl} alt="Sunset in the mountains" />
        <div className="px-4 pb-4 pt-2">
          <div className="text-sm mb-2">{name}</div>
          <p className="text-gray-700 text-xs">{city}</p>
          <p className="text-gray-700 text-sm font-bold mt-2">{price}</p>
          <p className="text-gray-700 text-sm mt-2">
            Persediaan: <span className="font-bold">{stocks}</span> barang
          </p>
        </div>
      </div>
      {router.asPath.includes("manage-pet-shop") && (
        <div
          onClick={() => setUpdate(true)}
          className="cursor-pointer absolute top-0 left-0 right-0 bottom-0 hover:bg-white/80 text-center flex flex-col justify-center font-bold text-white/50 hover:text-slate-500"
        >
          Perbarui Produk
        </div>
      )}
      {update && (
        <ModalProduct
          setShowModal={setUpdate}
          name={name}
          price={price}
          stocks={stocks}
          description={description}
          sku={sku}
        />
      )}
    </div>
  );
};

export default ProductCard;
