import { useId } from 'react';
import './Form.css';

const Form = (props) => {
  const id = useId();

  return (
    <form name="memeTextForm" className="form" id="memeTextForm">
      <div className="form--input-container">
        <label htmlFor="{id + 'top-text'}" className="form--input-label">
          Top text
        </label>
        <input
          type="text"
          id={id + 'top-text'}
          placeholder="Shut up"
          className="form--input"
          onChange={props.handleTextChange}
        ></input>
      </div>
      <div className="form--input-container">
        <label htmlFor={id + 'bottom-text'} className="form--input-label">
          Bottom text
        </label>
        <input
          type="text"
          id={id + 'bottom-text'}
          placeholder="And take my money"
          className="form--input"
          onChange={props.handleTextChange}
        ></input>
      </div>
    </form>
  );
};

export default Form;
