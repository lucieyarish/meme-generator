import './Meme.css';
import Form from '../components/Form';
import Button from '../components/Button';
import { useEffect, useState } from 'react';
import Image from '../components/Image';

const Meme = () => {
  const btnText = 'Get a new meme image';

  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg',
  });

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  const handleTextChange = (event) => {
    const { id, value } = event.target;
    setMeme((previousMeme) => ({
      ...previousMeme,
      [id.includes('top') ? 'topText' : 'bottomText']: value,
    }));
  };

  const getRandomNumber = () => {
    return Math.floor(Math.random() * allMemes.length);
  };

  const getRandomMemeImg = () => {
    // const memesArray = memesData.data.memes;
    const randomIndex = getRandomNumber();
    setMeme((prevState) => {
      return {
        ...prevState,
        randomImage: allMemes[randomIndex].url,
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
