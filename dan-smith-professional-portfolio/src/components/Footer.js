import React from 'react'
import { VscGithub } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai"
import { GrStackOverflow } from "react-icons/gr"

export default function Footer() {
  return (
    <div>
        <div className='spacer'></div>
        <div
            className='footer'>
            <div className='footerContent'>
                <div></div>
                <a className='iconLink' target='_blank' href='https://github.com/dansmith09' rel="noreferrer noopener"><VscGithub /></a>
                <a className='iconLink' target='_blank' href='https://github.com/dansmith09' rel="noreferrer noopener"><AiOutlineLinkedin /></a>
                <a className='iconLink' target='_blank' href='https://github.com/dansmith09' rel="noreferrer noopener"><GrStackOverflow /></a>
                <div></div>
            </div>
        </div>
    </div>
  )
}
