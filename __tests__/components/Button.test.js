import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '../../src/components/Button';
import '@testing-library/jest-dom';

test('renders button with correct text', () => {
  const mockGenerateMemeImg = jest.fn();

  const { getByText } = render(
    <Button text="Generate Meme" generateMemeImg={mockGenerateMemeImg} />
  );

  const buttonElement = getByText('Generate Meme');

  expect(buttonElement).toBeInTheDocument();

  fireEvent.click(buttonElement);

  expect(mockGenerateMemeImg).toHaveBeenCalledTimes(1);
});
