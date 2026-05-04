import React from 'react'
import PriceFormatter from './PriceFormatter';

interface props {
    price: number | undefined;
    discount: number | undefined;
    className?: string;
}

const PriceView = ({price, discount, className}:props) => {
  return (
    <div>
      <div>
        <PriceFormatter amount={price} className='text-shop_dark_green'/>
        {price && discount && (
            <PriceFormatter amount={price + (discount + price) / 100} 
            className='line-through text-xs font-normal text-shop_light_text'
            />
        )}
      </div>
    </div>
  )
}

export default PriceView
