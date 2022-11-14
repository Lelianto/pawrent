import { FC, useState } from "react";

interface IPetShop {
  edit?: boolean;
}

interface IProfile {
  name?: string;
  description?: string;
  operation?: string;
  city?: string;
}

const PetShop: FC<IPetShop> = ({ edit = false }) => {
  const [update, setUpdate] = useState<boolean>(false);
  const [profile, setProfile] = useState<IProfile>({
    name: "PetShop Kita",
    description:
      "Dear buyer, tolong rekam video unpackingnya agar barang bisa dikembalikan jika ada masalah. Untuk masalah produk, Anda dapat menghubungi layanan pelanggan untuk pengembalian dan penukaran.",
    operation: "Buka 24 jam",
    city: "Kota Tangerang",
  });
  const profileControl = (key: string, value: string | number) => {
    setProfile((oldData) => {
      oldData[`${key}`] = value;
      return { ...oldData };
    });
  };
  return (
    <div className="relative border border-gray rounded-lg p-4">
      <div className="grid grid-cols-12 gap-1">
        <div className="flex flex-col justify-center">
          <div className="w-24 h-24 rounded-full overflow-hidden">
            <img src="/petshop.jpeg" alt="" />
          </div>
        </div>
        <div className="col-span-6 flex flex-col justify-between pl-4">
          <div className="mb-4">
            <div className="font-bold text-xl text-black">{profile.name}</div>
            {update && (
              <input
                type="text"
                className="border border-slate-500 py-1 px-2 mb-4 rounded-md text-slate-500"
                value={profile.name}
                onChange={(e) => profileControl("name", e.target.value)}
              />
            )}
            <div className="text-slate-400 text-sm">{profile.city}</div>
            {update && (
              <input
                type="text"
                className="border border-slate-400 py-1 px-2 mb-4 rounded-md text-slate-400 text-sm"
                value={profile.city}
                onChange={(e) => profileControl("city", e.target.value)}
              />
            )}
          </div>
          <div className="text-slate-400 text-sm">{profile.description}</div>
          {update && (
            <textarea
              rows={6}
              className="border border-slate-400 py-1 px-2 mb-4 rounded-md text-slate-400 text-sm"
              value={profile.description}
              onChange={(e) => profileControl("description", e.target.value)}
            />
          )}
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
              <div className="text-slate-400 text-sm">Pesanan diproses</div>
            </div>
            <div>
              <div className="font-bold text-lg text-black">
                {profile.operation}
              </div>
              {update && (
                <div className="px-4">
                  <input
                    type="text"
                    className="border w-full border-slate-500 py-1 px-2 mb-4 rounded-md text-slate-500 text-sm"
                    value={profile.operation}
                    onChange={(e) =>
                      profileControl("operation", e.target.value)
                    }
                  />
                </div>
              )}
              <div className="text-slate-400 text-sm">Jam operasi toko</div>
            </div>
          </div>
        </div>
      </div>
      {edit && (
        <div className="absolute top-2 right-2">
          {update ? (
            <button
              onClick={() => setUpdate(false)}
              className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded mb-4 text-sm"
            >
              Simpan Profil Toko
            </button>
          ) : (
            <button
              onClick={() => setUpdate(true)}
              className="bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded mb-4 text-sm"
            >
              Ubah Profil Toko
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default PetShop;
