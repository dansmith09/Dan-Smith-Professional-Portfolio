import React from 'react'
import { FiExternalLink } from 'react-icons/fi'

export default function PortfolioItem({ portfolioItemsData }) {

  return (
    <div className={portfolioItemsData.type + ' portfolioCard'}>
        <div className='portfolioCardHeader'>
            <h3>{portfolioItemsData.name}</h3>
        </div>
        {portfolioItemsData.liveLink ? (
            <a href={portfolioItemsData.liveLink} rel="noreferrer" target='_blank'><button>View Live <FiExternalLink /></button></a>
        ) : (
            ''
        ) }
        {portfolioItemsData.githubRepoLink ? (
            <a href={portfolioItemsData.githubRepoLink} rel="noreferrer" target='_blank'><button>View GitHub Repo <FiExternalLink /></button></a>
        ) : (
            ''
        ) }
    </div>
  )
}
