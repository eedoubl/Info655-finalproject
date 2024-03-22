import React, { useState, useEffect } from 'react';
import c1 from './lostlegends.jpg';
import c2 from './nauticalnovas.jpg';
import c3 from './temporaltides.jpg';
import c4 from './celestial.jpg';

const covers = [c1, c2, c3, c4];
const authors = ['By Amelia Stonebridge', 'By Charles T. Mariner', 'By H.G. Pendulum', 'By Orion Nebula'];
const titles = [
  "Lost Legends: Quest for the Forgotten Kingdom",
  "Nautical Novas: Voyage of the Sea Star",
  "Temporal Tides: Clockwork Continuum",
  "Celestial Saga: Battle of the Starborn"
];
const genres = [
  "Fantasy Adventure",
  "Maritime Exploration",
  "Steampunk Time Travel",
  "Space Opera"
];
const blurbs = [
  "Embark on a perilous journey through mystical lands as you seek to restore the Forgotten Kingdom in this enthralling tabletop RPG.",
  "Navigate treacherous waters and discover uncharted lands in this maritime-themed RPG.",
  "Enter a world of gears and time magic in this steampunk RPG. Will you maintain the timeline or disrupt the continuum?",
  "Engage in interstellar warfare and explore cosmic mysteries in this epic space opera RPG."
];

function Trending() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(Math.floor(Math.random() * covers.length));
  }, []);

  return(
    <div className="Trending">
      <h1 className="trendSection">Trending</h1>
      <div className="trending-content">
      <div className="trending-cover">
  <img src={covers[index]} className="covertrend" alt="covertrend"/>
  <div className="trendOverlay">
    <span className="trendGenre">{genres[index]}</span>
    <span className="trendTitle">{titles[index]}</span>
    <span className="trendAuthor">{authors[index]}</span>
    <span className="trendBlurb">{blurbs[index]}</span>
  </div>
</div>
        <div className="trending-titles">
          <ul className="trending-list">
            {titles.map((title, i) => (
              <li className={i === index ? 'selected-trending' : ''} onClick={() => setIndex(i)}>
              <span className="listGenre">{genres[i]}</span>
              <span className={i === index ? 'title  trend-selected-list-title' : 'listTitle'}>{title}</span>
              <span className="listAuthor">{authors[i]}</span>
            </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Trending;
