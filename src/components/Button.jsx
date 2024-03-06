import './Button.css';
import memesData from '../data/memesData.js';

const Button = (props) => {
  const getRandomNumber = () => {
    return Math.floor(Math.random() * memesData.data.memes.length);
  };
  const getRandomMemeImg = () => {
    const memesArray = memesData.data.memes;
    const randomIndex = getRandomNumber();
    return memesArray[randomIndex].url;
  };

  return (
    <button className="btn" type="button" onClick={getRandomMemeImg}>
      {props.text}
    </button>
  );
};

export default Button;
