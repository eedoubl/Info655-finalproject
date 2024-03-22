import React, { useState } from 'react';
import './App.css';
import image1 from './dragon.jpg';
import image2 from './space.jpg';
import image3 from './forest.jpg';
import image4 from './concrete.jpg';
import image5 from './wanderers.jpg';
import image6 from './rift.jpg';
import image7 from './arcane.jpg';
import image8 from './gate.jpg';
import image9 from './shadows.jpg';
import image10 from './aurora.jpg';

function Reviews() {
  const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10];
  const imageDescriptions =
  ['Dungeon Depths: The Dragons Lair',
  'Galactic Echoes: A Space Odyssey',
  'Mystic Chronicles: The Enchanted Realm',
  'Urban Shadows: The Concrete Jungle',
  'Legends of the Astral Wanderers',
  'Echoes from the Rift',
  'Whispers of the Arcane Citadel',
  'Chronicles of the Celestial Gate',
  'Shadows of the Forgotten Realms',
  'Aetherbound: Journey Through the Ethereal Planes'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const currentImages = images.slice(currentIndex, currentIndex + 5);
  const currentDescriptions = imageDescriptions.slice(currentIndex, currentIndex + 5);
  const ratings = [3, 4, 5, 2, 1, 5, 3, 4, 2, 4];
  const currentRatings = ratings.slice(currentIndex, currentIndex + 5);
  const clearSelection = () => {
    setSelectedImage(null);
  };
  const changeImages = () => {
    if (currentIndex + 5 < images.length) {
      setCurrentIndex(currentIndex + 5);
    } else {
      setCurrentIndex(0);
    }
    clearSelection();
  };

  return (
    <div className="Reviews">
      <p className="reviewSection">Reviews</p>
      <div className="review-content">
        <div className="review-images">
        {currentImages.map((image, index) => (
  <div className={index === selectedImage ? 'image-text special' : 'image-text'} onClick={() => setSelectedImage(index)}>
    <div className='image-wrapper'>
      <img src={image} className={index === selectedImage ? 'image selected' : 'image'} alt={`review${index+1}`}/>
      {index === selectedImage &&
        <div className='rating'>
          Rating: {currentRatings[index]} out of 5
        </div>
      }
    </div>
    <p className={index === selectedImage ? 'description special' : 'description'}>{currentDescriptions[index]}</p>
  </div>
))}
        </div>
        <div className="reviewbutton">
          <button onClick={changeImages}>&gt;</button>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
