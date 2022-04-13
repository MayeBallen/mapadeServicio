import React from "react";
import styled from "styled-components";

const ThemeButton = styled.button`
  cursor: pointer;
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  background: ${(props) => props.bg};
  border: 1.3px solid ${(props) => props.colorBorder};
  border-radius: 15px 0 15px 0;
  outline: none;
  width: ${(props) => props.width};
  padding: ${(props) => props.padding};
  margin: 0.5em 2em 0.5em 2em;
  outline: none;
  box-sizing: border-box;
  font-weight: bold;
  :hover {
    transition: all 0.25s ease-in-out;
    outline: none;
    background: ${(props) => props.bgHover};
    transition: 0.2s ease-in-out;
  }
  @media (min-width: 300px) and (max-width: 425px) {
    font-size: calc(1vw + 0.8em);
    margin: 0.5em;
    outline: none;
  }
`;

const Button = (props) => {
  return (
    <ThemeButton
      width={props.width}
      onClick={props.onClick}
      color={props.color}
      bg={props.bg}
      colorBorder={props.colorBorder}
      bgHover={props.bgHover}
      padding={props.padding}
      fontSize={props.fontSize}
    >
      {props.name}
    </ThemeButton>
  );
};

export default Button;
