import React from "react";
import styled from "styled-components";

const SVG = styled.svg`
  fill: ${(props) => props.color};
  cursor: pointer;
  margin: ${(props) => props.margin};
  transition: all 0.3s ease-out;
  transform: ${(props) =>
    props.transform ? "rotate(180deg)" : "rotate(0deg)"};
`;
const Icon = (props) => {
  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      margin={props.margin}
      viewBox="0 0 24 24"
      color={props.color}
      onClick={props.onClick}
      transform={props.transform}
    >
      {props.children}
    </SVG>
  );
};
export default Icon;
