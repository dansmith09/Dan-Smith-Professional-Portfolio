import React from 'react'
import { VscGithub } from "react-icons/vsc";
import { AiOutlineLinkedin, AiFillYoutube } from "react-icons/ai"
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
                <a className='iconLink' target='_blank' href='https://www.linkedin.com/in/daniel-smith-b54214105/' rel="noreferrer noopener"><AiOutlineLinkedin /></a>
                <a className='iconLink' target='_blank' href='https://stackoverflow.com/users/19072469/dansmith09' rel="noreferrer noopener"><GrStackOverflow /></a>
                <a className='iconLink' target='_blank' href='https://www.youtube.com/channel/UCRUZdrbnS0sPJpF7B-Xnhug' rel="noreferrer noopener"><AiFillYoutube /></a>
                <div></div>
            </div>
        </div>
    </div>
  )
}
