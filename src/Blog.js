import React, { useState, useEffect } from 'react';
import './App.css';
import cover1 from './dnd.jpg';
import cover2 from './coop.jpg';
import cover3 from './character.jpg';
import cover4 from './gm.jpg';


const covers = [cover1, cover2, cover3, cover4];
const authors = ['By Alex Mercer', 'By Hannah Baker', 'By Elliot Alderson', 'By Sarah Connor'];
const titles = [
  "Exploring the Dark Universe of 'Shadowfall'",
  "The Rise of Cooperative TTRPGs",
  "A Beginner's Guide to Character Creation",
  "The Art of Game Mastering"
];
const blurbs = [
  "Mercer plunges into the world of 'Shadowfall', discussing its unique mechanics, compelling story, and how it redefines the horror genre in TTRPGs.",
  "Baker discusses the rise of cooperative TTRPGs and how they foster a unique sense of community among players.",
  "Alderson provides a comprehensive guide to creating your first TTRPG character, breaking down each step in the process.",
  "Connor shares her insights on the art of game mastering, including tips on how to create engaging narratives and maintain player engagement."
];

function Blog() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(Math.floor(Math.random() * covers.length));
  }, []);

  return(
    <div className="Blog">
     <div className="blog-content">
      <div className="blog-cover">
      <img src={covers[index]} className="cover" alt="cover"/>
      <div className="cover-overlay"></div>
      <div className="cover-text">
        <h2 className="coverauthor">{authors[index]}</h2>
        <h1 className='covertitle selected-title'>{titles[index]}</h1>
        <h3 className="coverblurb">{blurbs[index]}</h3>
      </div>
    </div>
    <ul className="blog-list">
  <p className="blogSection">Blog</p>
  {titles.map((title, i) => (
    <li className={i === index ? 'selected-blog' : ''} onClick={() => setIndex(i)}>
      <span className="date">MAR 01 2024</span>
      <span className={i === index ? 'title selected-list-title' : 'title'}>{title}</span>
      <span className="author">{authors[i]}</span>
    </li>
  ))}
</ul>
    </div>
    </div>
  );
}

export default Blog;