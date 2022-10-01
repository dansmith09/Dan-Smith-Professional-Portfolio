import React from 'react'
import { VscGithub } from "react-icons/vsc";

export default function Footer() {
  return (
    <div>
        <div className='spacer'></div>
        <div
            className='footer'>
            <div className='footerContent'>
                <a className='iconLink' target='_blank' href='https://github.com/dansmith09' rel="noreferrer noopener"><VscGithub /></a>
            </div>
        </div>
    </div>
  )
}
