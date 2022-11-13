import { useRouter } from "next/router";
import Layout from "../components/Layout";

const ProductDetail = () => {
  const router = useRouter();
  const handleRouting = () => {
    router.push("/checkout");
  };
  return (
    <Layout title="Pawrent">
      <div className="px-20 py-8">
        <div className="grid grid-cols-9 gap-4">
          <div className="col-span-3">
            <img
              className="border border-slate-200 rounded-lg w-full"
              src="https://cf.shopee.co.id/file/6447a8d61782d7b6275585421382be5c"
              alt="product"
            />
          </div>
          <div className="col-span-4">
            <div className="font-semibold text-xl text-slate-700 mb-4">
              Life Cat Pouch 85 Gr Tuna Kitten
            </div>
            <div className="font-bold text-3xl mb-4">Rp4.800</div>
            <div className="text-slate-500 text-sm">Kondisi: Baru</div>
            <div className="text-slate-500 text-sm">Berat Satuan: 100 g</div>
            <div className="text-slate-500 text-sm">
              Kategori: Makanan Kucing
            </div>
            <div className="text-slate-500 text-sm">Etalase: semua etalase</div>
            <div className="text-slate-500 text-sm">
              Life cat pouch 85 gr Rasa Tuna kitten
            </div>
            <div className="mt-4 text-slate-500 text-sm">
              Premium Cat Food untuk kucing dengan komposisi yang terdiri dari
              ikan salmon yang mengandung banyak vitamin & mineral seperti
              vitamin B12 , Vit D Vit A, Vit E dan masih banyak lagi bahan yang
              sangat bermanfaat untuk kucing kesayangan anda. ( komposisi
              lengkap di kemasan ).
              <br />
              <br />
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </div>
          </div>
          <div className="col-span-2">
            <div className="border border-slate-200 rounded-md p-4">
              <div className="font-bold text-md">Atur jumlah dan catatan</div>
              <div className="flex my-4">
                <div className="text-sm flex flex-col justify-center min-w-fit mr-3">
                  Jumlah Pembelian:
                </div>
                <div className="flex flex-col justify-center">
                  <input
                    className="border border-slate-200 rounded-md w-1/2 text-center"
                    type="number"
                    min={0}
                    defaultValue={0}
                  />
                </div>
              </div>
              <button
                type="button"
                className="w-full border-2 border-green-500 rounded-md text-green-500 font-bold hover:shadow-lg"
                onClick={handleRouting}
              >
                Beli
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
