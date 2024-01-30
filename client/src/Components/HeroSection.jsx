import React, { useState } from "react";
import styles from "./HeroSection.module.css";
import image1 from "../Assets/images/Hero-Images/1.jpg";
import image2 from "../Assets/images/Hero-Images/2.jpg";
import image3 from "../Assets/images/Hero-Images/3.png";
import image4 from "../Assets/images/Hero-Images/4.jpg";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [image1, image2, image3, image4];

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={styles.hero}>
      <div className={styles.heroImage}>
        <div className={styles.prevButton} onClick={handlePrevImage}>
          <GrPrevious />
        </div>
        <img
          src={images[currentImageIndex]}
          alt={`Hero Depiction ${currentImageIndex + 1}`}
        />
        <div className={styles.nextButton} onClick={handleNextImage}>
          <GrNext />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
