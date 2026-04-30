import Cointainer from "@/components/Cointainer";
import HomeBanner from "@/components/HomeBanner";
import ProductGrid from "@/components/ProductGrid";
const Home = () => {
  return (
    <Cointainer>
      <HomeBanner />
      <div className="py-10">
        <ProductGrid />
      </div>
    </Cointainer>
  );
};

export default Home;
