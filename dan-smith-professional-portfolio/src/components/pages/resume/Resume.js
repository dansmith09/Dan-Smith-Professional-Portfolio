import React from 'react'
import dlResume from '../../../assets/files/Daniel-Smith-Resume-2022.docx'
import { AiOutlineDownload } from 'react-icons/ai'

export default function Resume() {
  return (
    <div>
        <iframe title='resume' src="https://drive.google.com/file/d/1V3II9kBXXnLxLlkJ-UKNTRQ1YBNCFoEjiT3hMm973LY/preview" allow="autoplay"></iframe>
        <div className='resumeButtonHolder'>
          <a className="resume-download"  href={dlResume} download="Resume">
            <button className='resumeButton'>Download Resume  <AiOutlineDownload /></button>
          </a>
        </div>
        <div className='spacer'></div>
        <div className='resumeListHolder'>
          <div className='resumeList'>
          <h3>Proficient in:</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Node JS</li>
              <li>Express JS</li>
              <li>mySQL</li>
              <li>Sequelize</li>
              <li>noSQL</li>
              <li>React</li>
            </ul>
          </div>
          <div className='resumeList'>
          <h3>Experience with:</h3>
            <ul>
              <li>Object Orientated Programing </li>
              <li>Object Relational Mapping (Sequelize)</li>
              <li>Model View Controller </li>
              <li>Progressive Web Apps</li>
            </ul>
          </div>
          <div className='spacer'></div>
        </div>
    </div>
  )
}
