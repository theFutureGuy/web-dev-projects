import React from 'react'
import './nav.css'
import {AiFillHome} from 'react-icons/ai';
import {GrServices} from 'react-icons/gr';
import {IoIosContact} from 'react-icons/io';
import {SiAboutdotme} from 'react-icons/si';

import {useState} from 'react';

const Nav = () => {
  const [activeNav,setactivNav] = useState('#')
  return (
    <nav>
      <a href="#" className={activeNav === '#' ? 'active' : ''}><AiFillHome/></a>
      <a href="#about" onClick={() => setactivNav('#about')} className={activeNav === '#about '?'active' :''}><SiAboutdotme/></a>
      <a href="#experience" onClick={() => setactivNav('#experience')} className={activeNav === '#experience '?'active' :''}><AiFillHome/></a>
      <a href="#services" onClick={() => setactivNav('#services')} className={activeNav === '#services '?'active' :''}><GrServices/></a>
      <a href="#contact" onClick={() => setactivNav('#contact')} className={activeNav === '#contact '?'active' :''}><IoIosContact/></a>
    </nav>
  )
}

export default Nav