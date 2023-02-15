import React from 'react';
import {Container,  Button, ButtonsList } from './FeedbackOptions.styled'

export const Buttons = ({ options, onClickHendler }) => {
  return (
   <Container>
    <ButtonsList>
      {options.map(option => (
        <Button key={option} onClick={() => onClickHendler(option)}>
          {option}
        </Button>
      ))}
    </ButtonsList >
    </Container>
  );
};
