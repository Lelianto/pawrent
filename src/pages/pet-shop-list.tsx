import Layout from "../components/Layout";
import PetShopCard from "../components/PetShopCard";
import ProductCard from "../components/ProductCard";
import { IPetShopCard } from "../components/PetShopCard";
import { IProductCard } from "../components/ProductCard";

const PetShopList = () => {
  const petShops: IPetShopCard[] = [
    {
      imageUrl:
        "https://images.tokopedia.net/img/cache/215-square/shops-1/2019/7/11/4760578/4760578_17ab3267-ea03-4b20-a924-cfa667881944.png",
      name: "Pet Shop Saya",
      city: "Jakarta",
      description: "Tempat berkualitas untuk memenuhi kebutuhan anabul kalian.",
    },
    {
      imageUrl:
        "https://images.tokopedia.net/img/cache/215-square/GAnVPX/2021/8/30/76b2c688-be5f-4e71-b20d-70a93a4d8e2c.jpg",
      name: "Toko Kami",
      city: "Tangerang",
      description: "Tempat berkualitas untuk memenuhi kebutuhan anabul kalian.",
    },
    {
      imageUrl:
        "https://images.tokopedia.net/img/cache/215-square/shops-1/2016/10/11/1516583/1516583_735a6003-a181-42ee-bb94-3e1247615912.jpg",
      name: "Toko Cinta Hewan",
      city: "Bogor",
      description: "Tempat berkualitas untuk memenuhi kebutuhan anabul kalian.",
    },
    {
      imageUrl:
        "https://images.tokopedia.net/img/cache/215-square/GAnVPX/2021/9/28/d722c2f3-b5ad-4abe-a757-e3ecfc813825.jpg",
      name: "Pet Upgrade",
      city: "Banten",
      description: "Tempat berkualitas untuk memenuhi kebutuhan anabul kalian.",
    },
    {
      imageUrl:
        "https://images.tokopedia.net/img/cache/215-square/GAnVPX/2022/10/6/105dc22e-5351-4239-b001-58f2a41db506.png",
      name: "Toko Anabul Kamu",
      city: "Tangerang Kota",
      description: "Tempat berkualitas untuk memenuhi kebutuhan anabul kalian.",
    },
    {
      imageUrl:
        "https://images.tokopedia.net/img/cache/215-square/shops-1/2020/8/5/2937496/2937496_00e21681-267e-4b5f-aa79-1e05711714e4.png",
      name: "Royal Canin Official",
      city: "Tangerang Selatan",
      description: "Tempat berkualitas untuk memenuhi kebutuhan anabul kalian.",
    },
    {
      imageUrl:
        "https://images.tokopedia.net/img/cache/215-square/shops-1/2021/8/20/4892250/4892250_dd6480a2-9b02-4ee9-bbbc-e55b5c0114d8.jpg",
      name: "Royal Pet Care & Shop",
      city: "Bekasi",
      description: "Tempat berkualitas untuk memenuhi kebutuhan anabul kalian.",
    },
  ];
  const products: IProductCard[] = [
    {
      imageUrl:
        "https://images.tokopedia.net/img/cache/215-square/shops-1/2019/7/11/4760578/4760578_17ab3267-ea03-4b20-a924-cfa667881944.png",
      name: "Life Cat Pouch 85 Gr Tuna KITTEN",
      city: "Jakarta",
      price: "Rp 65.000",
    },
    {
      imageUrl:
        "https://images.tokopedia.net/img/cache/215-square/GAnVPX/2021/8/30/76b2c688-be5f-4e71-b20d-70a93a4d8e2c.jpg",
      name: "Life Cat Pouch 85 Gr Tuna KITTEN",
      city: "Tangerang",
      price: "Rp 65.000",
    },
    {
      imageUrl:
        "https://images.tokopedia.net/img/cache/215-square/shops-1/2016/10/11/1516583/1516583_735a6003-a181-42ee-bb94-3e1247615912.jpg",
      name: "Life Cat Pouch 85 Gr Tuna KITTEN",
      city: "Bogor",
      price: "Rp 65.000",
    },
    {
      imageUrl:
        "https://images.tokopedia.net/img/cache/215-square/GAnVPX/2021/9/28/d722c2f3-b5ad-4abe-a757-e3ecfc813825.jpg",
      name: "Life Cat Pouch 85 Gr Tuna KITTEN",
      city: "Banten",
      price: "Rp 65.000",
    },
    {
      imageUrl:
        "https://images.tokopedia.net/img/cache/215-square/GAnVPX/2022/10/6/105dc22e-5351-4239-b001-58f2a41db506.png",
      name: "Life Cat Pouch 85 Gr Tuna KITTEN",
      city: "Tangerang Kota",
      price: "Rp 65.000",
    },
    {
      imageUrl:
        "https://images.tokopedia.net/img/cache/215-square/shops-1/2020/8/5/2937496/2937496_00e21681-267e-4b5f-aa79-1e05711714e4.png",
      name: "Life Cat Pouch 85 Gr Tuna KITTEN",
      city: "Tangerang Selatan",
      price: "Rp 65.000",
    },
    {
      imageUrl:
        "https://images.tokopedia.net/img/cache/215-square/shops-1/2021/8/20/4892250/4892250_dd6480a2-9b02-4ee9-bbbc-e55b5c0114d8.jpg",
      name: "Life Cat Pouch 85 Gr Tuna KITTEN",
      city: "Bekasi",
      price: "Rp 65.000",
    },
  ];
  return (
    <Layout title="Pawrent">
      <div className="px-20 py-8">
        <div className="text-3xl font-bold">Pet Shop Terdekat</div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 mt-8">
          {petShops.map((shop, index) => (
            <div key={`pet-shop-card-${index}`} className="mb-4">
              <PetShopCard {...shop} />
            </div>
          ))}
        </div>
        <div className="text-3xl font-bold mt-8">Produk Terbaik</div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 mt-8">
          {products.map((product) => (
            <div className="mb-4">
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default PetShopList;
