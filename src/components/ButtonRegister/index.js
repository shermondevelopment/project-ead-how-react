import React from 'react';
import { Button } from './styled';

function ButtonRegister(props) {

  return <>
   <Button href={props.href} back={props.color}>{props.name}</Button>
  </>;

}

export default ButtonRegister;
