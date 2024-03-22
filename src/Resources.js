import React, { useState, useEffect } from 'react';
import './App.css';
import mainHeroImage from './mainhero.jpg';
import tabletopImage from './tabletop.jpeg';
import differentdiceImage from './differentdice.jpeg';

function Resources() {
  const authors = ['Elon Musk', 'Tom Brady', 'Michael Scott'];
  const titles = ['How to: TTRPGs', 'Sport-themed TTRPGs', 'Master Guide: TTRPGs'];
  const blurbs = ['03/17/2024', '03/08/2024', '03/10/2024'];

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    setSelectedImageIndex(Math.floor(Math.random() * 3));
  }, []);

  return (
    <div className="Resources">
      <div className="resources-content">
        <p className="resourcesSection">Resources</p>
        <div className="resources-cover">
          {selectedImageIndex === 0 && <img src={mainHeroImage} className="cover" alt="cover" />}
          {selectedImageIndex === 1 && <img src={tabletopImage} className="cover" alt="cover" />}
          {selectedImageIndex === 2 && <img src={differentdiceImage} className="cover" alt="cover" />}
        </div>
        <div className="text-content">
          {selectedImageIndex === 0 && (
            <div className="main-image-info">
              <h2 className="coverauthor">{authors[selectedImageIndex]}</h2>
              <h1 className="covertitle">{titles[selectedImageIndex]}</h1>
              <h3 className="coverblurb">{blurbs[selectedImageIndex]}</h3>
            </div>
          )}
          {selectedImageIndex === 1 && (
            <div className="secondary-image-info">
              <h2 className="coverauthor">{authors[selectedImageIndex]}</h2>
              <h1 className="covertitle">{titles[selectedImageIndex]}</h1>
              <h3 className="coverblurb">{blurbs[selectedImageIndex]}</h3>
            </div>
          )}
          {selectedImageIndex === 2 && (
            <div className="third-image-info">
              <h2 className="coverauthor">{authors[selectedImageIndex]}</h2>
              <h1 className="covertitle">{titles[selectedImageIndex]}</h1>
              <h3 className="coverblurb">{blurbs[selectedImageIndex]}</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Resources;
