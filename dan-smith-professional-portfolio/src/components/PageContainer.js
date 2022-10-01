import React, { useState } from 'react';
import Navigation from './Navigation';
import About from './pages/about/About';
import Portfolio from './pages/portfolio/PortfolioItems';
import Contact from './pages/contact/Contact';
import Resume from './pages/resume/Resume';
import Footer from './Footer';


export default function PageContainer() {
    const [currentPage, setCurrentPage] = useState('About');
    const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}
