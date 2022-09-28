import React, { useState } from "react";
import Header from "./components/Header";
import PortfolioItems from "./components/PortfolioItems";
const portfolioItemsJSONData = require('./seeds/portfolioItems.json');


const App = () => {
  const [portfolioItems, setPortfolioItems] = useState(portfolioItemsJSONData)
  return (
  <>
    <Header />
    <PortfolioItems portfolioItemsData={portfolioItems}/>
  </>
  )
}

export default App;
