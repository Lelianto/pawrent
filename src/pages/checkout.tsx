import { useRouter } from "next/router";
import { useState } from "react";
import Layout from "../components/Layout";

const CheckoutPage = () => {
  const router = useRouter();
  const [success, setSuccess] = useState<boolean>(false);
  const handleSUbmit = () => {
    setSuccess(true);
    setTimeout(() => {
      router.push("/");
    }, 3000);
  };
  return (
    <Layout title="Pawrent">
      <div className="px-20 py-8 flex justify-center">
        <div className="border border-slate-200 rounded-lg w-full w-2/3 max-w-fit p-4">
          <div className="text-3xl font-bold pb-8">Pembayaran</div>
          <table>
            <thead>
              <tr>
                <td className="text-sm font-bold pb-4">Foto Produk</td>
                <td className="text-sm font-bold pb-4">Nama Produk</td>
                <td className="pl-8 text-sm font-bold pb-4">Harga</td>
                <td className="pl-8 text-sm font-bold pb-4">
                  Jumlah Pembelian
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="pb-6">
                  <img
                    className="border border-slate-200 rounded-lg w-20"
                    src="https://cf.shopee.co.id/file/6447a8d61782d7b6275585421382be5c"
                    alt=""
                  />
                </td>
                <td className="text-sm w-60 pb-6">
                  Life Cat Pouch 85 Gr Tuna KittenLife Cat Pouch 85 Gr Tuna
                  KittenLife Cat Pouch 85 Gr Tuna KittenLife Cat Pouch 85 Gr
                  Tuna Kitten
                </td>
                <td className="pl-8 text-sm text-center pb-6">Rp4.800</td>
                <td className="pl-8 text-sm text-center pb-6">5</td>
              </tr>
              <tr>
                <td className="pb-6">
                  <img
                    className="border border-slate-200 rounded-lg w-20"
                    src="https://cf.shopee.co.id/file/6447a8d61782d7b6275585421382be5c"
                    alt=""
                  />
                </td>
                <td className="text-sm w-60 pb-6">
                  Life Cat Pouch 85 Gr Tuna KittenLife Cat Pouch 85 Gr Tuna
                  KittenLife Cat Pouch 85 Gr Tuna KittenLife Cat Pouch 85 Gr
                  Tuna Kitten
                </td>
                <td className="pl-8 text-sm text-center pb-6">Rp4.800</td>
                <td className="pl-8 text-sm text-center pb-6">5</td>
              </tr>
              <tr>
                <td className="pb-6">
                  <img
                    className="border border-slate-200 rounded-lg w-20"
                    src="https://cf.shopee.co.id/file/6447a8d61782d7b6275585421382be5c"
                    alt=""
                  />
                </td>
                <td className="text-sm w-60 pb-6">
                  Life Cat Pouch 85 Gr Tuna KittenLife Cat Pouch 85 Gr Tuna
                  KittenLife Cat Pouch 85 Gr Tuna KittenLife Cat Pouch 85 Gr
                  Tuna Kitten
                </td>
                <td className="pl-8 text-sm text-center pb-6">Rp4.800</td>
                <td className="pl-8 text-sm text-center pb-6">5</td>
              </tr>
              <tr>
                <td className="text-sm font-bold w-40 pt-8">
                  Total Biaya Belanja
                </td>
                <td></td>
                <td></td>
                <td className="pl-8 text-xl text-center pt-8 font-bold">
                  Rp72.000
                </td>
              </tr>
            </tbody>
          </table>
          <button
            type="button"
            onClick={handleSUbmit}
            className="mt-8 w-full py-2 border-2 border-green-500 rounded-md text-green-500 font-bold hover:shadow-lg"
          >
            Bayar
          </button>
        </div>
      </div>
      {success && (
        <div className="fixed top-16 right-0 left-0 max-w-fit m-auto z-50">
          <div
            className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
            role="alert"
          >
            <span className="font-medium">Pembayaran Berhasil!</span> Akan
            menuju ke beranda dalam beberapa saat.
          </div>
        </div>
      )}
    </Layout>
  );
};

export default CheckoutPage;
