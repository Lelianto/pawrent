const PetShop = () => {
  return (
    <div className="border border-gray rounded-lg p-4">
      <div className="grid grid-cols-12 gap-1">
        <div className="flex flex-col justify-center">
          <div className="w-24 h-24 rounded-full overflow-hidden">
            <img src="/petshop.jpeg" alt="" />
          </div>
        </div>
        <div className="col-span-6 flex flex-col justify-between pl-4">
          <div className="mb-4">
            <div className="font-bold text-xl text-black">PetShop Kita</div>
            <div className="text-slate-400 text-sm">Kota Tangerang</div>
          </div>
          <div className="text-slate-400 text-sm">
            Dear buyer, tolong rekam video unpackingnya agar barang bisa
            dikembalikan jika ada masalah. Untuk masalah produk, Anda dapat
            menghubungi layanan pelanggan untuk pengembalian dan penukaran.
          </div>
        </div>
        <div className="col-span-5 flex flex-col justify-center">
          <div className="grid grid-cols-3 text-center">
            <div>
              <div className="font-bold text-lg text-black">
                <span className="text-yellow-400">&#9733;</span> 4.8
              </div>
              <div className="text-slate-400 text-sm">Rating & Ulasan</div>
            </div>
            <div className="border-l border-r border-gray">
              <div className="font-bold text-lg text-black">&#177; 2 jam</div>
              <div className="text-slate-400 text-sm">Rating & Ulasan</div>
            </div>
            <div>
              <div className="font-bold text-lg text-black">Buka 24 jam</div>
              <div className="text-slate-400 text-sm">Rating & Ulasan</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetShop;
