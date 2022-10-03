import React from 'react'
import '../styles/style.css';

export default function Navigation({ currentPage, handlePageChange }) {
  return (
    <div className='header'>
        <h1>DanSmith</h1>
        <div>
            <ul>
                <li>
                    <a
                        href='#about'
                        onClick={() => handlePageChange('About')}
                        className={currentPage === 'About' ? 'navLinkActive' : 'navLink'}>
                        About Me
                    </a>
                </li>
                <li>
                    <a
                        href='#portfolio'
                        onClick={() => handlePageChange('Portfolio')}
                        className={currentPage === 'Portfolio' ? 'navLinkActive' : 'navLink'}>
                        Portfolio
                    </a>
                </li>
                <li>
                    <a
                        href='#contact'
                        onClick={() => handlePageChange('Contact')}
                        className={currentPage === 'Contact' ? 'navLinkActive' : 'navLink'}>
                        Contact
                    </a>
                </li>
                <li>
                    <a
                        href='#resume'
                        onClick={() => handlePageChange('Resume')}
                        className={currentPage === 'Resume' ? 'navLinkActive' : 'navLink'}>
                        Resume
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}
