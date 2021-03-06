/* eslint-disable default-case */
import React from 'react';
import { BlueButton, PurpleButton, OrangeButton, RedButton } from './styles';
import { Button } from '@material-ui/core';
const GButton = props => {
  const { type } = props;
  switch (type) {
    case 'blue':
      return (
        <BlueButton {...props} variant="contained">
          {props.text}
        </BlueButton>
      );
    case 'purple':
      return (
        <PurpleButton {...props} variant="contained">
          {props.text}
        </PurpleButton>
      );
    case 'orange':
      return (
        <OrangeButton {...props} variant="contained">
          {props.text}
        </OrangeButton>
      );
    case 'red':
      return (
        <RedButton {...props} variant="contained">
          {props.text}
        </RedButton>
      );
    default:
      return (
        <Button {...props} variant="contained">
          {props.text}
        </Button>
      );
  }
};

export default GButton;
