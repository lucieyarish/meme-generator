import './Meme.css';
import Form from '../components/Form';
import Button from '../components/Button';
import { useState } from 'react';
import memesData from '../data/memesData.js';
import Image from '../components/Image';

const Meme = () => {
  const btnText = 'Get a new meme image';
  const [meme, setMeme] = useState({
    topText: 'One does not simply',
    bottomText: 'Walk into Mordor',
    randomImage: 'http://i.imgflip.com/1bij.jpg',
  });

  const handleTextChange = (event) => {
    const { id, value } = event.target;
    setMeme((previousMeme) => ({
      ...previousMeme,
      [id.includes('top') ? 'topText' : 'bottomText']: value,
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
      <div className="meme">
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
        <Image imgSrc={meme.randomImage} />
      </div>
    </main>
  );
};

export default Meme;
