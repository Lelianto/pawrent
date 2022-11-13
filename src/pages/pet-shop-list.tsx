import Layout from "../components/Layout";
import PetShopCard from "../components/PetShopCard";
import ProductCard from "../components/ProductCard";

const PetShopList = () => {
  return (
    <Layout title="Pawrent">
      <div className="px-20 py-8">
        <div className="text-3xl font-bold">Pet Shop Terdekat</div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 mt-8">
          {Array.from(Array(10).keys()).map(() => (
            <div className="mb-4">
              <PetShopCard />
            </div>
          ))}
        </div>
        <div className="text-3xl font-bold mt-8">Produk Terbaik</div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 mt-8">
          {Array.from(Array(12).keys()).map(() => (
            <div className="mb-4">
              <ProductCard />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default PetShopList;
