import React from 'react'
import PortfolioItem from './PortfolioItem'


export default function PortfolioItems({ portfolioItemsData }) {
    return (
        <div>
            <div className='filterContainer'>
                <label htmlFor="cars">Filter: </label>
                <select id="filter" name="filter">
                    <option value="all">All</option>
                    <option value="front">Front End</option>
                    <option value="back">Back End</option>
                    <option value="full">Full Stack</option>
                    <option value="group">Group Project</option>
                    <option value="web3">Web 3</option>
                </select>
            </div>
            <div className='portfolioContainer'>
                {portfolioItemsData.map(item => {
                    return <PortfolioItem key={item.name} portfolioItemsData={item} />
                })}
            </div>
        </div>
    )
}

// Make a function to filter based on value of select option.
// Would be elite to render a deletable fitler button to show what it's filtering by
// Could 