const ProductCard = () => {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg cursor-pointer">
      <img
        className="w-full"
        src="https://images.tokopedia.net/img/cache/900/VqbcmM/2022/6/23/659c0639-9099-4a4d-b390-d314feec49f1.jpg"
        alt="Sunset in the mountains"
      />
      <div className="px-4 pb-4 pt-2">
        <div className="text-sm mb-2">
          Royal Canin Sensible 33 Makanan Kucing Dewasa Dry 400gr
        </div>
        <p className="text-gray-700 text-xs">Kota Tangerang</p>
        <p className="text-gray-700 text-sm font-bold mt-2">Rp65.000</p>
      </div>
    </div>
  );
};

export default ProductCard;
