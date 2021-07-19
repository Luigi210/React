import React, { useState } from "react";
import colorData from "./color-data";
import ColorList from "./Color/ColorList";
import AddColorForm from "./Form/AddColorForm";
import { v4 } from "uuid";

export const styleForStar = {
  fontSize: "150px",
  backgroundColor: "#ccffaa",
  // marginLeft: "100px",
};

export default function App() {
  const [colors, setColors] = useState(colorData);
  return (
    <>
      <AddColorForm/>,
      <ColorList/>
      {/* <AddColorForm onNewColor={
        (title, color) => {
          const newColors = [
            ...colors, 
            {
              id: v4(),
              rating: 0,
              title, 
              color
            }
          ];
          setColors(newColors);
        }
      }/>
      <ColorList
        colors={colors}
        onRemoveColor={(id) => {
          const newColors = colors.filter((color) => color.id !== id);
          setColors(newColors);
        }}
        onRateColor={(id, rating) => {
          const newColors = colors.map((color) =>
            color.id === id ? { ...color, rating } : color
          );
          setColors(newColors);
        }}
      /> */}
    </>
  );
}
