import { Product } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import { Flame, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import WishlistButton from "./WishlistButton";
import Title from "./Title";
import PriceView from "./PriceView";
import AddToCartB from "./AddToCartB";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="text-sm border border-shop_dark_green/20 rounded-md bg-white group">
      <div className="relative group overflow-hidden bg-shop_light_bg ">
        {product?.images && (
          <Link href={`/product/${product?.slug?.current}`}>
          <Image
            src={urlFor(product?.images[0]).url()}
            alt="Product Image"
            loading="lazy"
            width={700}
            height={700}
            className={`w-full h-64 object-contain overflow-hidden transition-transform bg-shop_light_bg hoverEffect ${product?.stock !== 0 ? "group-hover:scale-105" : "opacity-50"}`}
          /></Link>
        )}
        <WishlistButton product={product} />
        {product?.status === "sale" && (
          <p className="absolute top-2 left-2 z-10 text-xs border border-darkColor/50 px-2 rounded-full group-hover:border-shop_light_green group-hover:text-shop_light_green hoverEffect">
            Sale!
          </p>
        )}
        {product?.status === "new" && (
          <p className="absolute top-2 left-2 z-10 text-xs border border-darkColor/50 px-2 rounded-full group-hover:border-shop_light_green group-hover:text-shop_light_green hoverEffect">
            New!
          </p>
        )}
        {product?.status === "hot" && (
          <Link
            href={"/deal"}
            className="absolute top-2 left-2 z-10 border rounded-full border-shop_orange hover:text-shop_dark_green hoverEffect p-1"
          >
            <Flame
              size={18}
              fill="#fb6c08"
              className="text-shop_orange/50 group-hover:text-shop_orange hoverEffect"
            />
          </Link>
        )}
      </div>
      <div className="p-3 flex flex-col gap-2">
        <p className="uppercase line-clamp-1 text-xs text-shop_light_text">
          {product.categories?.map((cat) => cat).join(", ")}</p>
          <Title className="text-sm line-clamp-1"> {product?.name} </Title>
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, index) => (
                <StarIcon 
                size={12}
                key={index}
                className={
                  index < 4 ?
                  "text-shop_lighter_green" : "text-shop_lighter_text"
                }
                fill ={index <4 ? "var(--color-shop_lighter_green)" : "var(--color-shop_lighter_text)"}
                />
              ))}
            </div>
            <p className="text-shop_light_text text-xs tracking-wide">5 reviews</p>
          </div>
          <div className="flex items-center gap-2.5">
            <p className="font-medium">In Stock</p>
            <p className={`${product?.stock === 0 ? "text-red-600" : "text-shop_light_green font-semibold"}`}>
              {(product?.stock as number)>0 ? product?.stock : "unavailable"}
              </p>
          </div>
          <PriceView 
          price={product?.price}
          discount={product?.discount}
          className="text-sm"
          />
          <AddToCartB product={product} className ='w-36 rounded-full'/>
        </div>
    </div>
  );
};

export default ProductCard;
