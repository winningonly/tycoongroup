import React from 'react';
import './Metrics.css';

const Metrics = () => {
  const metrics = [
    { value: '12', label: 'Portfolio Companies' },
    { value: '2014', label: 'Est. Year' },
    { value: '$4B+', label: 'Private Capital' },
    { value: '∞', label: 'Long-term Vision' }
  ];

  return (
    <section className="metrics container" id="group">
      <div className="metrics-grid">
        {metrics.map((metric, index) => (
          <div key={index} className="metric-card">
            <div className="metric-value">{metric.value}</div>
            <div className="gold-line"></div>
            <div className="metric-label">{metric.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Metrics;
