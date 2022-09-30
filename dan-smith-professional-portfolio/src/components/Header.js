import React from 'react'
import '../styles/Header.css';
import Navigation from './Navigation';

export default function Header() {
  return (
    <div className='header'>
        <h1>DanSmithDev</h1>
        <Navigation />
    </div>
  )
}
