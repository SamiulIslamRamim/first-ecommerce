import Cointainer from "@/components/Cointainer";
import HomeBanner from "@/components/HomeBanner";
import HomeCategory from "@/components/HomeCategory";
import LatestBlog from "@/components/LatestBlog";
import ProductGrid from "@/components/ProductGrid";
import ShopByBrands from "@/components/ShopByBrands";
import { getCategories } from "@/sanity/queries/index";
const Home = async () => {
  const categories = await getCategories(6);
  return (
    <Cointainer>
      <HomeBanner />
      <ProductGrid />
      <HomeCategory categories={categories} />
      <ShopByBrands />
      <LatestBlog />
    </Cointainer>
  );
};

export default Home;
