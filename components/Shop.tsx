"use client"
import { BRANDS_QUERY_RESULT, Category } from "@/sanity.types"
import Cointainer from "./Cointainer";
import Title from "./Title";
import CategoryList from "./shop/CategoryList";

interface Props {
    categories: Category[];
    brands: BRANDS_QUERY_RESULT;
}
const Shop =({categories, brands}: Props) => {
  return (
    <div className="border-t">
      <Cointainer className="mt-5">
        <div className="sticky top-0 z-10 mb-5">
            <div className="flex items-center justify-between">
                <Title className="text-lg uppercase tracking-wide">Get The Products as your needs</Title>
                <button className="text-shop_dark_green underline text-sm mt-2 font-medium hover:text-shop_orange hoverEffect">Reset Filters</button>
            </div>
        </div>
        <div className="flex flex-col md:flex-row gap-5 border-t border-t-shop_dark_green/50">
            <div className="md:sticky md:top-20 md:self-start md:h-[calc(100vh-160px)] md:overflow-hidden md:min-w-64 pb-5 md:border-r border-r-shop_dark_green/50 ">
            <CategoryList />
            {/* brandlist */}
            {/* pricelist */}
            </div>
            <div>products</div>
        </div>
      </Cointainer>
    </div>
  )
}

export default Shop;
