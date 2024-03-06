import './Form.css';

const Form = () => {
  return (
    <form name="memeTextForm" className="form" id="memeTextForm">
      <div className="form--input-container">
        <label for="top-text" className="form--input-label">
          Top text
        </label>
        <input
          type="text"
          id="top-text"
          placeholder="Shut up"
          className="form--input"
        ></input>
      </div>
      <div className="form--input-container">
        <label for="bottom-text" className="form--input-label">
          Bottom text
        </label>
        <input
          type="text"
          id="bottom-text"
          placeholder="And take my money"
          className="form--input"
        ></input>
      </div>
    </form>
  );
};

export default Form;
