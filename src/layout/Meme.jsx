import './Meme.css';
import Form from '../components/Form';
import Button from '../components/Button';

const Meme = () => {
  const btnText = 'Get a new meme image';
  return (
    <main className="main-container">
      <Form />
      <Button text={btnText} />
    </main>
  );
};

export default Meme;
