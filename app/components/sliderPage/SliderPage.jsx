// app/components/sliderPage/SliderPage.jsx

'use client'; // Required for client-side functionality

import React from 'react';
import Slider from 'react-slick';
import styles from "./sliderPage.module.css"
import Image from 'next/image'; // Next.js's optimized image component

// Import images directly from the assets folder
import Image1 from '../../assets/gbanner.png';
import Image2 from '../../assets/house5.jpg';
import Image3 from '../../assets/house.png';
import Bg1 from '../../assets/bg1.png';

const ImageSlider = () => {
  const images = [Image1, Image2, Image3, Bg1]; // Use the imported images
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
  };

  return (
    <div className={styles.image__slider__container}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <Image
              src={image}
              alt={`slide-${index}`}
              width={1200} // Set appropriate width
              height={600} // Set appropriate height
              style={{ width: '100%', height: 'auto' }} // Responsive styles
              priority={true} // Optionally, prioritize image loading
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
