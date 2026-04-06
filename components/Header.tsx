import React from 'react'
import Cointainer from './Cointainer'
import Logo from './Logo'
import HeaderMenu from './HeaderMenu'

const Header = () => {
  return (
    <header className='bg-white py-5 border-b border-b-black/30'>
        <Cointainer className='flex items-center justify-between'>
        <Logo />
        <HeaderMenu />
        <div>
            OTHERS
        </div>
        {/* NavAdmin */}
        </Cointainer>
    </header>
  )
}

export default Header
