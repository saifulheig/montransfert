// components/HeroSection.js
import React from 'react';
import styles from './Hero.module.css';

const HeroSection = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroSlide}>
        <img src="/images/slide1.jpg" alt="Slide 1" className={styles.heroImage} />
        <img src="/images/slide2.jpg" alt="Slide 2" className={styles.heroImage} />
        <img src="/images/slide3.webp" alt="Slide 3" className={styles.heroImage} />
        <img src="/images/slide4.jpg" alt="Slide 4" className={styles.heroImage} />
      </div>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>MONTRANSFERT SÀRL</h1>
        <p className={styles.heroDescription}>
          TRANSPORT & LOGISTIQUE
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
