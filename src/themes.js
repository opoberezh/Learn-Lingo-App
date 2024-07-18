import { createContext } from 'react';
import macBookImg from '../assets/Mac.png';
import macBookImgGreen from '../assets/MacGreen.png';
import macBookImgBlue from '../assets/MacBlue.png';
import macBookImgRed from '../assets/MacRed.png';
import macBookImgPink from '../assets/MacPink.png';
import rectangleImg from '../assets/Rectangle 1.png';
import rectangleImgGreen from '../assets/RectangleGreen.png';
import rectangleImgBlue from '../assets/RectangleBlue.png';
import rectangleImgRed from '../assets/RectangleRed.png';
import rectangleImgPink from '../assets/RectanglePink.png';

export const ThemeContext = createContext();

export const OrangeTheme = {
  primary: "#F4C550",
  secondary: "#FBE9BA",
  macBookImg: macBookImg,
  rectangleImg: rectangleImg,
};

export const GreenTheme = {
  primary: "#9FBAAE",
  secondary: "#CBDED3",
  macBookImg: macBookImgGreen,
  rectangleImg: rectangleImgGreen,
};

export const BlueTheme = {
  primary: "#9FB7CE",
  secondary: "#BFD6EA",
  macBookImg: macBookImgBlue,
  rectangleImg: rectangleImgBlue,
};

export const RedTheme = {
  primary: "#E0A39A",
  secondary: "#F2C0BD",
  macBookImg: macBookImgRed,
  rectangleImg: rectangleImgRed,
};

export const PinkTheme = {
  primary: "#F0AA8D",
  secondary: "#F4C8BA",
  macBookImg: macBookImgPink,
  rectangleImg: rectangleImgPink,
};
