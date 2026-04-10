import { AlignLeft } from 'lucide-react'
import React from 'react'
import SideMenu from './SideMenu'

const MobileMenu = () => {
  return (
    <>
    <button>
        <AlignLeft className='hover:text-darkColor hoverEffect md:hidden hover:cursor-pointer'/>
    </button>
    <SideMenu />
    </>
  )
}

export default MobileMenu
