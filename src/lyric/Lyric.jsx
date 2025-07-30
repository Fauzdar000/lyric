import React, { useEffect, useState } from "react";
import './Lyric.css'


// Importing images from src/assets
import img1 from '../assets/image(1).jpg';
import img2 from '../assets/image(2).jpg';
import img3 from '../assets/image(3).jpg';
import img4 from '../assets/image(4).jpg';
import img5 from '../assets/image(5).jpg';

const slides = [
  {
    image: img1,
    lyric: "i'm sorry sthapana baby 🌠"
  },
  {
    image: img2,
    lyric: " i really love yoooooouuuuu so muchhhhhhhh 💑"
  },
  {
    image: img3,
    lyric: "i can't live without you🌹"
  },
  {
    image: img4,
    lyric: "please accept my apoloziessssss🌧️"
  },
  {
    image: img5,
    lyric: "i will never leave you and never hurt you again💖"
  }
];




const Lyric = () => {

    const[index,setIndex] = useState(0);

      useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);


  return (
    <div className="slider">
        <img src={slides[index].image} alt="slide" className="slide-image" />
        <p className="lyric" >{slides[index].lyric}</p>

    </div>
  )
}

export default Lyric