import React from 'react';
import './about.css';
import {FiAward} from 'react-icons/fi'
import {FiUsers} from 'react-icons/fi'
import {BiLibrary} from 'react-icons/bi'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
          <div className='about__me'>
            <div className="about__me-image">
              <img src="#" alt="Me" />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                  <FiAward className='about__icon'/>
                  <h5>Experience</h5>
                  <small>React/Node/Express Developer - 1 year of study</small>
              </article>

              <article className='about__card'>
                  <FiUsers className='about__icon'/>
                  <h5>Ambition</h5>
                  <small>Google - Sillicon Valley</small>
              </article>

              <article className='about__card'>
                  <BiLibrary className='about__icon'/>
                  <h5>Projects On</h5>
                  <small>React/Node/Express/Blockchain - 10+ projects</small>
              </article>
            </div>

              <p>
                Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Nobis non ipsam quas repellat suscipit 
                recusandae corporis distinctio quis veniam quasi. Excepturi
                 fugit non nam sit magnam distinctio ipsa magni molestias?
              </p>

          </div>

      </div>
    </section>
    )
}

export default About