import Layout from "../components/Layout";
import PetShop from "../components/PetShop";
import ProductCard from "../components/ProductCard";

const PetShopPage = () => {
  return (
    <Layout title="Pawrent">
      <div className="px-20 py-8">
        <PetShop />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 mt-8">
          {Array.from(Array(10).keys()).map(() => (
            <div className="mb-4">
              <ProductCard />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default PetShopPage;
