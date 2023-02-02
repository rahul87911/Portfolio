import React from 'react'
import{BsTwitter, BsInstagram} from 'react-icons/bs';
import { GoMarkGithub } from "react-icons/go";
import {SiLeetcode} from "react-icons/si"
import {AiFillLinkedin} from 'react-icons/ai'
import {FaFreeCodeCamp} from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <a href='https://github.com/rahul87911' target='_blank' rel='noreferrer'>
            < GoMarkGithub /> </a>
        </div>
        <div>
        <a href='https://www.linkedin.com/in/rahul-mishra-b1176b25b' target='_blank' rel='noreferrer'>
            <AiFillLinkedin /> </a>
        </div>
        <div>
        <a href='https://twitter.com/rahul870911' target='_blank' rel='noreferrer'>
            <BsTwitter /> </a>
        </div>
        <div>
        <a href='https://instagram.com/rahul870911?igshid=NmQ2ZmYxZjA=' target='_blank' rel='noreferrer'>
            <BsInstagram /> </a>
        </div>
        <div>
        <a href='https://leetcode.com/rahul87911/' target='_blank' rel='noreferrer'>
            <SiLeetcode /> </a>
        </div>
        <div>
        <a href='https://www.freecodecamp.org/fcc477b7977-7ecd-40b9-8989-474a82df65dd' target='_blank' rel='noreferrer'>
            <FaFreeCodeCamp /> </a>
        </div>
    </div>
  )
}

export default SocialMedia