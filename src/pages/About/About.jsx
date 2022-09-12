import React from 'react'

import logo from '../../images/logo2.png'

import './About.scss'

function About() {
  return (
    <div className='about'>
    <div className='about-content'>
    <img className='about-logo' src={logo} alt="logo" />
        <h2 className='title-about'>Who We Are</h2>
        <p className='about-content'>We are a team of Web Developers, CRM Specialists, SEO &amp; Digital marketing ​experts. We’ve been around in one form or another for more than 8 years, alw​ays with one goal in mind — helping small businesses compete and win. We ​offer small business management services that can transform your business​. Let us help you put your customers at the center of your business and ge​t you back to what you love​.</p>
    </div>
    </div>
  )
}

export default About