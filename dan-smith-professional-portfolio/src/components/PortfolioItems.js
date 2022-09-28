import React from 'react'
import PortfolioItem from './PortfolioItem'


export default function PortfolioItems({ portfolioItemsData }) {
    return (
        <>
            <label for="cars">Filter </label>
            <select id="cars" name="cars">
                <option value="all">All</option>
                <option value="front">Front End</option>
                <option value="back">Back End</option>
                <option value="full">Full Stack</option>
                <option value="group">Group Project</option>
            </select>
            {portfolioItemsData.map(item => {
                return <PortfolioItem key={item.name} portfolioItemsData={item} />
            })}
        </>
    )
  }
