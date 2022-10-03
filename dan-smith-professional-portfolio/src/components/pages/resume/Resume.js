import React from 'react'
import dlResume from '../../../assets/files/Daniel-Smith-Resume-2022.docx'

export default function Resume() {
  return (
    <div>
        <iframe title='resume' src="https://drive.google.com/file/d/1oDHzjStvXmT29Mt4ZINAHHfh_QVHkHsw/preview" allow="autoplay"></iframe>
        <div className='resumeButtonHolder'>
          <a class="resume-download"  href={dlResume} download="Resume">
            <button className='resumeButton'>Download Resume</button>
          </a>
        </div>
        <div>
          Proficient in:
          <ul>
            <li>add proficiencies here</li>
            <li>add proficiencies here</li>
            <li>add proficiencies here</li>
            <li>add proficiencies here</li>
            <li>add proficiencies here</li>
            <li>add proficiencies here</li>
          </ul>
        </div>
    </div>
  )
}
