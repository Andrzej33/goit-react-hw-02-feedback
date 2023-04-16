import React from 'react';
import { ButtonWrapped } from './FeedBackWidget.styled';

export const FeedBackOptions = ({ onGood, onNeutral, onBad }) => {
  return (
    <ButtonWrapped>
      <button type="button" onClick={onGood}>
        Good
      </button>
      <button type="button" onClick={onNeutral}>
        Neutral
      </button>
      <button type="button" onClick={onBad}>
        Bad
      </button>
    </ButtonWrapped>
  );
};
