import Cointainer from '@/components/Cointainer';
import ProductCard from '@/components/ProductCard';
import Title from '@/components/Title';
import { Product } from '@/sanity.types';
import { getDealProducts } from '@/sanity/queries'
import React from 'react'

const DealPage = async() => {
    const products: Product[] =await getDealProducts();
  return (
    <div className='py-10 bg-deal-bg'>
        <Cointainer>
           <Title className="mb-5 decoration-[1px] text-base uppercase tracking-wide">Hot Deals for now...</Title>
           <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5'>
            {products?.map((product) => (
                //@ts--expect-error
                <ProductCard key={product?._id } product={product}/>
            ))}
           </div>
        </Cointainer>
    </div>
  )
}

export default DealPage
