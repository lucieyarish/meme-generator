import { useState } from 'react';
import './Form.css';

const Form = (props) => {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');

  const handleTopTextChange = (event) => {
    setTopText(event.target.value);
    props.onInputChange({
      topText: event.target.value,
      bottomText,
    });
  };

  const handleBottomTextChange = (event) => {
    setBottomText(event.target.value);
    props.onInputChange({
      topText,
      bottomText: event.target.value,
    });
  };

  return (
    <form name="memeTextForm" className="form" id="memeTextForm">
      <div className="form--input-container">
        <label htmlFor="top-text" className="form--input-label">
          Top text
        </label>
        <input
          type="text"
          id="top-text"
          placeholder="Shut up"
          className="form--input"
          value={topText}
          onChange={handleTopTextChange}
        ></input>
      </div>
      <div className="form--input-container">
        <label htmlFor="bottom-text" className="form--input-label">
          Bottom text
        </label>
        <input
          type="text"
          id="bottom-text"
          placeholder="And take my money"
          className="form--input"
          value={bottomText}
          onChange={handleBottomTextChange}
        ></input>
      </div>
    </form>
  );
};

export default Form;
