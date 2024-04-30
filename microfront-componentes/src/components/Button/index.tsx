import React from 'react'
import styled from "styled-components";

import r2wc from '@r2wc/react-to-web-component';

const ButtonStyled= styled.button`
  background: #BF4F74;
  color: #FFFFFF;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #BF4F74;
  border-radius: 3px;
`;

interface ButtonProps {
  label: string;
  onClick: () => void;
}
export default function Button({label, onClick}: ButtonProps) {
  return (
    <ButtonStyled onClick={onClick}>{label}</ButtonStyled>
  )
}

const ButtonWebComponent = r2wc(Button, {
  props: ['label', 'onClick']
});

customElements.define('button-example', ButtonWebComponent);