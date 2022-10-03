import React from 'react'

export default function PortfolioItem({ portfolioItemsData }) {

  return (
    <div className={portfolioItemsData.type + ' portfolioCard'}>
        <div className='portfolioCardHeader'>
            <h3>{portfolioItemsData.name}</h3>
        </div>
        {portfolioItemsData.liveLink ? (
            <a href={portfolioItemsData.liveLink} rel="noreferrer" target='_blank'><button>View Live</button></a>
        ) : (
            ''
        ) }
        {portfolioItemsData.githubRepoLink ? (
            <a href={portfolioItemsData.githubRepoLink} rel="noreferrer" target='_blank'><button>View GitHub Repo</button></a>
        ) : (
            ''
        ) }
    </div>
  )
}
