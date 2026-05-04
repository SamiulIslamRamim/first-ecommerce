import Cointainer from "@/components/Cointainer";
import HomeBanner from "@/components/HomeBanner";
import HomeCategory from "@/components/HomeCategory";
import ProductGrid from "@/components/ProductGrid";
import { getCategories } from "@/sanity/queries/query";
const Home = async() => {
  const categories = await getCategories(6);
  console.log(categories);
  return (
    <Cointainer>
      <HomeBanner />
        <ProductGrid />
        <HomeCategory />
    </Cointainer>
  );
};

export default Home;
