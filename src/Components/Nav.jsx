import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Nav = () => {
  return (
    <nav>
      <h1 className='titleo'>BETTER than BOO-GLE</h1>
      <div className='links'>
          <a href="twitter.com"><FaTwitter /></a>
          <a href="instagram.com"><FaInstagram /></a>
          <a href="facebook.com"><FaFacebook /></a>
          <a href="linkedin.com"><FaLinkedin /></a>
          <a href="github.com"><FaGithub /></a>

      </div>
    </nav>
  )
}

export default Nav