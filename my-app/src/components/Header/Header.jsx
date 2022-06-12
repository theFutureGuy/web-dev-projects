import React from 'react'
import './Header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
        <div className='container header__container'>
            <h5>Hello This is</h5>
            <h1>Ashiq A</h1>
            <h5 className='text-light'>Machine Learning Engineer</h5>
            
            <CTA />
            <HeaderSocials />

            <div className='me'>
                <img src="#" alt="me" />
            </div>

            <a href="#contact" className='scoll__down'>Scroll Down</a>
        </div>
    </header>
  )
}

export default Header