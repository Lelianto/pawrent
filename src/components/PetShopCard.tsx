import { useRouter } from "next/router";
import { FC } from "react";

export interface IPetShopCard {
  imageUrl?: string;
  name?: string;
  city?: string;
  description?: string;
}

const PetShopCard: FC<IPetShopCard> = ({
  imageUrl,
  name,
  city,
  description,
}) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/pet-shop")}
      className="rounded-lg overflow-hidden shadow-lg border border-slate-100 cursor-pointer"
    >
      <img className="w-full" src={imageUrl} alt="Sunset in the mountains" />
      <div className="px-4 pb-4 pt-2">
        <div className="text-sm mb-2 font-bold">{name}</div>
        <p className="font-semibold bg-sky-400 max-w-fit text-white text-xs px-2 py-1 rounded-md">
          {city}
        </p>
        <p className="text-gray-700 text-xs mt-2">{description}</p>
      </div>
    </div>
  );
};

export default PetShopCard;
