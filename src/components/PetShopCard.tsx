import { useRouter } from "next/router";

const PetShopCard = () => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/pet-shop")}
      className="rounded-lg overflow-hidden shadow-lg cursor-pointer"
    >
      <img
        className="w-full"
        src="https://images.tokopedia.net/img/cache/215-square/shops-1/2019/7/11/4760578/4760578_17ab3267-ea03-4b20-a924-cfa667881944.png"
        alt="Sunset in the mountains"
      />
      <div className="px-4 pb-4 pt-2">
        <div className="text-sm mb-2 font-bold">PetShop Kita</div>
        <p className="font-semibold bg-sky-400 max-w-fit text-white text-xs px-2 py-1 rounded-md">
          Kota Tangerang
        </p>
        <p className="text-gray-700 text-xs mt-2">
          Tempat berkualitas untuk memenuhi kebutuhan anabul kalian.
        </p>
      </div>
    </div>
  );
};

export default PetShopCard;
