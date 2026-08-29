import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const houses = [
    { name: 'Aethelgard Real Estate', desc: 'Global Prime Properties', img: '/portfolio_1.png' },
    { name: 'Obsidian Capital', desc: 'Alternative Investments', img: '/portfolio_2.png' },
    { name: 'Vanguard Aeronautics', desc: 'Next-Gen Mobility', img: '/hero_bg.png' }
  ];

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="portfolio-header">
          <h2 className="section-title">Our Houses</h2>
          <a href="#all" className="view-all">View All</a>
        </div>
        
        <div className="portfolio-grid">
          {houses.map((house, index) => (
            <div key={index} className="portfolio-card">
              <div className="card-image" style={{ backgroundImage: `url(${house.img})` }}>
                <div className="card-overlay"></div>
              </div>
              <div className="card-content">
                <h3 className="card-title">{house.name}</h3>
                <p className="card-desc">{house.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
