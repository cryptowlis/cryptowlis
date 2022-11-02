import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';

export default function Home() {
  // // Global variable to control the scrolling behavior
  // const step = 30; // For each 30px, change an image
  let label = 1;
  const [imageLink, setImageLink] = useState(
    'https://ipfs.io/ipfs/QmfJBHQVJuG7pvqqoPqD2SajKKh7DpN2s4CR8A24m4CBQz/1.png'
  );
  function trackScrollPosition() {
    const y = window.scrollY;
    label = Math.min(Math.floor(y / 50) + 1, 25);
    setImageLink(`https://ipfs.io/ipfs/QmfJBHQVJuG7pvqqoPqD2SajKKh7DpN2s4CR8A24m4CBQz/${label}.png`);
    // Change the background image
    // ${styles['imageContainer']).css('background-image', `url('${imageLink}')`};
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 1) {
        trackScrollPosition();
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className={styles.container}>
      <div className="imageContainer">
        <style jsx>{`
          .imageContainer {
            background-image: url(${imageLink});
          }
        `}</style>
      </div>
    </div>
  );
}
