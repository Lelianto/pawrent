import React from "react";
import Layout from "../components/Layout";

const ThreadById = () => {
  return (
    <Layout title="Pawrent">
      <div className="px-10 my-8">
        <div className="grid grid-cols-4 border-b border-gray mb-4">
          <div className="flex items-center my-4">
            <img
              className="w-10 h-10 rounded-full mr-4"
              src="/personal.webp"
              alt="Avatar of Jonathan Reinink"
            />
            <div className="text-sm">
              <p className="text-gray-900 leading-none">
                Si Paling Pecinta Hewan
              </p>
              <p className="text-gray-600">14 Nov 2022</p>
            </div>
          </div>
          <div className="col-span-3">
            <div className="font-bold mb-4">
              Bagaimana cara merawat Anjing Ras yang baik?
            </div>
            <div>
              Izin nanya ke para pawrent di sini, gimana ya cara rawat anjing
              corgi yang baru berumur 2 bulan? khawatir banget nih, thx.
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 border-b border-gray mb-4">
          <div className="flex items-center my-4">
            <img
              className="w-10 h-10 rounded-full mr-4"
              src="/personal.webp"
              alt="Avatar of Jonathan Reinink"
            />
            <div className="text-sm">
              <p className="text-gray-900 leading-none">Si Paling Gampang</p>
              <p className="text-gray-600">15 Nov 2022</p>
            </div>
          </div>
          <div className="col-span-3">
            <div>Anjing corgi mah cara rawatnya gampang gan.</div>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-black text-sm font-bold mb-1">
            Tanggapi Thread
          </label>
          <textarea
            rows={6}
            className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 text-sm rounded mb-4"
            type="button"
          >
            Kirim Tanggapan
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default ThreadById;
