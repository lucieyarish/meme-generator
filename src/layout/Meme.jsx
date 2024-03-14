import './Meme.css';
import Form from '../components/Form';
import Button from '../components/Button';
import { useState } from 'react';
import memesData from '../data/memesData.js';
import Image from '../components/Image';

const Meme = () => {
  const btnText = 'Get a new meme image';
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg',
  });

  const handleTextChange = (event) => {
    const { id, value } = event.target;
    setMeme((previousMeme) => ({
      ...previousMeme,
      [id.includes('top') ? 'topText' : 'bottomtext']: value;
    }));
  };

  const getRandomNumber = () => {
    return Math.floor(Math.random() * memesData.data.memes.length);
  };

  const getRandomMemeImg = () => {
    const memesArray = memesData.data.memes;
    const randomIndex = getRandomNumber();
    setMeme((prevState) => {
      return {
        ...prevState,
        randomImage: memesArray[randomIndex].url,
      };
    });
  };

  return (
    <main className="main-container">
      <Form handleTextChange={handleTextChange} />
      <Button text={btnText} generateMemeImg={getRandomMemeImg} />
      <Image imgSrc={meme.randomImage} />
    </main>
  );
};

export default Meme;
