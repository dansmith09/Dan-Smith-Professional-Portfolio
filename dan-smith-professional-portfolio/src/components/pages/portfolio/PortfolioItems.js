import React, { useState } from 'react'
import PortfolioItem from './PortfolioItem'
const portfolioItemsJSONData = require('../../../seeds/portfolioItems.json');



export default function PortfolioItems() {
    const [portfolioItems, setPortfolioItems] = useState(portfolioItemsJSONData);
    // const handleFilterSelection = (filterValue) => {
    //     const portfolioData = portfolioItems;
    //     const filteredPortfolioData = [];
    //     for (let index = 0; index < portfolioData.length; index++) {
    //         const element = portfolioData[index];
    //         if (element.filterValue) {
    //             filteredPortfolioData.push(element);
    //         }
    //     }
    //     setPortfolioItems(filteredPortfolioData);
    // }

    return (
        <div>
            <div className='filterContainer'>
                <label htmlFor="cars">Filter: </label>
                <select 
                    id="filter" 
                    name="filter"
                    // onChange={handleFilterSelection}
                    >
                    <option value="all">All</option>
                    <option value="front">Front End</option>
                    <option value="back">Back End</option>
                    <option value="full">Full Stack</option>
                    <option value="group">Group Project</option>
                    <option value="web3">Web 3</option>
                </select>
            </div>
            <div className='portfolioContainer'>
                {portfolioItems.map(item => {
                    return <PortfolioItem key={item.name} portfolioItemsData={item} />
                })}
            </div>
        </div>
    )
}

// Make a function to filter based on value of select option.
// Would be elite to render a deletable fitler button to show what it's filtering by
// Could 