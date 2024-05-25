import { useState } from 'react';

const images = [
  'https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  'https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  'https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  'https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
];

export const Imagecarousel = () => {
  const [current, setCurrent] = useState(0);
  return (
    <>
      <div className="mx-auto w-1/2">
        <h2 className="text-center">Project 1 : Carousel</h2>
        <button>Prev</button>
        <button>Next</button>
        {images.map((img, id) => {
          current === id && (
            <div key={img} className="slide">
              <img src={img} alt="images" />
            </div>
          );
        })}
      </div>
    </>
  );
};
