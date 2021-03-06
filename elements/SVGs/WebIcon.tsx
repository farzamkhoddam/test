import useHover from "hooks/useHover";
import React, { useRef } from "react";
import styled from "styled-components";

interface Props {
  width?: string;
  height?: string;
  viewBox?: string;
  strokeColor?: string;
}

const WebIcon: React.FC<Props> = ({ width, height, viewBox, strokeColor }) => {
  const hoverRef = useRef(null);
  const isHover = useHover(hoverRef);
  return (
    <Svg
      ref={hoverRef}
      width={width || "31"}
      height={height || "31"}
      viewBox={viewBox || "0 0 31 31"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle cx="15.5" cy="15.5" r="15.5" fill="#E6F1FF" isHover={isHover} />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.0002 9.33334C19.6821 9.33334 22.6668 12.3181 22.6668 16C22.6668 19.6819 19.6821 22.6667 16.0002 22.6667C12.3183 22.6667 9.3335 19.6819 9.3335 16C9.3335 12.3181 12.3183 9.33334 16.0002 9.33334ZM17.9819 16.6672H14.0186C14.0926 18.0029 14.3863 19.2189 14.8358 20.1178C15.2544 20.955 15.7017 21.3333 16.0002 21.3333C16.2988 21.3333 16.7461 20.955 17.1647 20.1178C17.6141 19.2189 17.9079 18.0029 17.9819 16.6672ZM21.2922 16.6673L19.317 16.6675C19.2363 18.2901 18.8648 19.7415 18.3081 20.8102C19.9069 20.0411 21.0636 18.4983 21.2922 16.6673ZM12.6833 16.6675L10.7082 16.6673C10.9367 18.4983 12.0934 20.041 13.6926 20.8097C13.1704 19.8082 12.8112 18.47 12.7018 16.9697L12.6833 16.6675ZM13.6921 11.1898L13.6747 11.199C12.0846 11.9706 10.9356 13.5088 10.7081 15.3332L12.6833 15.3332C12.7638 13.7103 13.1354 12.2586 13.6921 11.1898ZM16.0002 10.6667L15.946 10.6706C15.6491 10.7128 15.2297 11.0943 14.8358 11.8822C14.3862 12.7813 14.0924 13.9976 14.0185 15.3335H17.9819C17.908 13.9976 17.6142 12.7813 17.1647 11.8822C16.7461 11.0451 16.2988 10.6667 16.0002 10.6667ZM18.3077 11.1904L18.3228 11.2182C18.8714 12.2843 19.2372 13.7249 19.317 15.3336L21.2922 15.3334C21.0638 13.5021 19.907 11.9591 18.3077 11.1904Z"
        isHover={isHover}
      />
    </Svg>
  );
};
export default WebIcon;
const Svg = styled.svg`
  z-index: 3;
`;

const Circle = styled.circle<{ isHover: boolean }>`
  fill: var(--primary-color-light);
  transition: fill 0.5s;
  fill: ${({ isHover }) =>
    isHover ? "var(--primary-color-dark)" : "var(--primary-color-light)"};
`;
const Path = styled.path<{ isHover: boolean }>`
  fill: ${({ isHover }) => (isHover ? "white" : "var(--primary-color-dark)")};
  transition: fill 0.5s;
`;
