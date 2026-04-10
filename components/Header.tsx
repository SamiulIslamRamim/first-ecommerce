import React from 'react'
import Cointainer from './Cointainer'
import Logo from './Logo'
import HeaderMenu from './HeaderMenu'
import SearchBar from './SearchBar'
import CartIcon from './CartIcon'
import FavouriteButton from './FavouriteButton'
import SignIn from './SignIn'
import MobileMenu from './MobileMenu'

const Header = () => {
  return (
    <header className='bg-white py-5 border-b border-b-black/30'>
        <Cointainer className='flex items-center justify-between text-lightColor'>
        <div className='w-auto md:w-1/3 flex items-center gap-2.5 justify-start md:gap-0'>
          <MobileMenu />
          <Logo />
        </div>
        <HeaderMenu />
        <div className='w-auto md:w-1/3 flex items-center justify-end gap-5'>
            <SearchBar />
            <CartIcon />
            <FavouriteButton />
            <SignIn />
        </div>
        {/* NavAdmin */}
        </Cointainer>
    </header>
  )
}

export default Header
