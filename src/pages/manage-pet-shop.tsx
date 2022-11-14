import { useState } from "react";
import Layout from "../components/Layout";
import PetShop from "../components/PetShop";
import ProductCard from "../components/ProductCard";
import ModalProduct from "../components/ProductModal";
import { products } from "./pet-shop";

const ManagePetShop = () => {
  const [addProduct, setAddProduct] = useState<boolean>(false);
  return (
    <Layout title="Pawrent">
      <div className="px-20 py-8">
        <div className="font-bold text-3xl mb-8">
          Pet Shop Dashboard Management
        </div>
        <PetShop edit />
        <div className="flex justify-between">
          <div className="font-bold text-xl mt-4">Kelola Produk</div>
          <div className="flex flex-col justify-center mt-4">
            <button
              onClick={() => setAddProduct(true)}
              className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded text-sm"
            >
              + Tambah Produk
            </button>
          </div>
        </div>
        (klik untuk memperbarui)
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 mt-4">
          {products.map((product, index) => (
            <div key={`pet-shop-${index}`} className="mb-4">
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
      {addProduct && <ModalProduct setShowModal={setAddProduct} />}
    </Layout>
  );
};

export default ManagePetShop;
