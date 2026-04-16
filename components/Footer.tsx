import React from 'react'
import Cointainer from './Cointainer'
import FooterTop from './FooterTop'
import Logo from './Logo'
import SocialMedia from './SocialMedia'
const Footer = () => {
  return (
    <footer className= "bg-white border-t">
      <Cointainer>
        <FooterTop />
        <div>
          <div>
            <Logo />
            <p>Discover curated furniture at Shopcartyt, blending
              style and comfort to elevate your living spaces.</p>
              <SocialMedia />
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </Cointainer>
    </footer>
  )
}

export default Footer
