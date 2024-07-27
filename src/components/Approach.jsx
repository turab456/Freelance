import React, { useState } from 'react';

const Carousel = () => {
  const slides = [
    {
      id: 1,
      image: 'https://via.placeholder.com/800x400?text=Slide+1',
      alt: 'Slide 1'
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/800x400?text=Slide+2',
      alt: 'Slide 2'
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/800x400?text=Slide+3',
      alt: 'Slide 3'
    },
    {
      id: 4,
      image: 'https://via.placeholder.com/800x400?text=Slide+4',
      alt: 'Slide 4'
    },
    {
      id: 5,
      image: 'https://via.placeholder.com/800x400?text=Slide+5',
      alt: 'Slide 5'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + slides.length) % slides.length;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % slides.length;
    setCurrentIndex(newIndex);
  };

  const getSlidePosition = (index) => {
    const offset = index - currentIndex;
    if (offset < -1) {
      return slides.length + offset;
    }
    if (offset > slides.length - 2) {
      return offset - slides.length;
    }
    return offset;
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
      <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${(100 / 3) * (currentIndex + 1)}%)` }}>
        {slides.map((slide, index) => {
          const position = getSlidePosition(index);
          return (
            <div key={slide.id} className="w-1/3 flex-shrink-0">
              <img src={slide.image} alt={slide.alt} className="w-full" />
            </div>
          );
        })}
      </div>

      <button onClick={prevSlide} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full">
        &lt;
      </button>
      <button onClick={nextSlide} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full">
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
