import { Product } from '@/sanity.types'
import React from 'react'
import { Button } from './ui/button';
import { ShoppingBag } from 'lucide-react';
import { cn } from '@/lib/utils';
interface props{
    product: Product;
    className?: string;
}
const AddToCartB = ({product,className}:props) => {
    const isOutofStock = product?.stock === 0;
    const handleAddtoCart = ()=>{
        window.alert("VODAI");
    }
  return (
    <div>
      <Button
      onClick={handleAddtoCart}
      disabled={isOutofStock}
      className={cn("w-full text-shop_light_bg bg-shop_dark_green/80 font-semibold tracking-wide hover:bg-shop_dark_green hover:border-shop_dark_green hoverEffect", className)}>
        <ShoppingBag />{isOutofStock ? "Out of Stock" : "Add to Cart"}
        </Button>
    </div>
  )
}

export default AddToCartB
