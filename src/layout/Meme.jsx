import './Meme.css';
import Form from '../components/Form';
import Button from '../components/Button';
import { useState } from 'react';
import memesData from '../data/memesData.js';
import Image from '../components/Image';

const Meme = () => {
  const btnText = 'Get a new meme image';
  const [memeImg, setMemeImg] = useState('');

  const getRandomNumber = () => {
    return Math.floor(Math.random() * memesData.data.memes.length);
  };
  const getRandomMemeImg = () => {
    const memesArray = memesData.data.memes;
    const randomIndex = getRandomNumber();
    setMemeImg(memesArray[randomIndex].url);
  };

  return (
    <main className="main-container">
      <Form />
      <Button text={btnText} generateMemeImg={getRandomMemeImg} />
      <Image imgSrc={memeImg} />
    </main>
  );
};

export default Meme;
