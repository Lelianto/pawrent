import Link from "next/link";
import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout title="Pawrent">
    <div
      style={{
        backgroundImage:
          'url("https://www.petskita.com/assets/iipe/intro.png")',
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
    >
      <div className="text-center text-4xl mb-28 pt-28 font-bold">
        A Pet Parents Ecosystem SuperApp
      </div>
      <div className="flex justify-evenly">
        <Link href="/forum">
          <div className="bg-white shadow-lg hover:shadow-2xl border border-slate-100 rounded-lg max-w-sm cursor-pointer p-4">
            <div className="font-bold text-xl mb-4">Forum</div>
            <div className="text-gray-400 text-sm">
              Bergabung dengan komunitas hewan peliharaan dapat memberikan
              banyak manfaat positif dan segala hal baru yang mungkin tidak kamu
              tahu sebelumnya.
            </div>
          </div>
        </Link>
        <Link href="/pet-shop-list">
          <div className="bg-white shadow-lg hover:shadow-2xl border border-slate-100 rounded-lg max-w-sm cursor-pointer p-4">
            <div className="font-bold text-xl mb-4">Pet Shop</div>
            <div className="text-gray-400 text-sm">
              Pet Shop termurah, dan terbaik di sekitarmu. Sebuah pet shop
              biasanya memungkinkan pelanggan untuk melakukan jual beli hewan
              peliharaan.
            </div>
          </div>
        </Link>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
