import React, { useState } from 'react'
import PortfolioItem from './PortfolioItem'
const portfolioItemsJSONData = require('../../../seeds/portfolioItems.json');



export default function PortfolioItems() {
    const [portfolioItems, setPortfolioItems] = useState(portfolioItemsJSONData);

    const handleFilterSelection = (e) => {
        const filter = e.target.value;

        setPortfolioItems(portfolioItemsJSONData)
        
        if(filter === 'all') {
            return
        }

        const newPortfolioItems = portfolioItemsJSONData.filter((object) => {
            if (object.type === filter) {
                return object
            }
        })

        setPortfolioItems(newPortfolioItems);
    }

    return (
        <div>
            <div className='filterContainer'>
                <label htmlFor="cars">Filter: </label>
                <select 
                    id="filter" 
                    name="filter"
                    onChange={(e) => handleFilterSelection(e)}
                    >
                    <option value="all">All</option>
                    <option value="frontEnd">Front End</option>
                    <option value="backEnd">Back End</option>
                    <option value="fullStack">Full Stack</option>
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