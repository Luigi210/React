import React, { createContext, useContext, useState } from "react";
import colorData from "/Users/akhme/Desktop/React/tutorial/src/color-data.json";
import { v4 } from "uuid";

const ColorContext = createContext();
export const useColors = () => useContext(ColorContext);

export default function ColorProvider({ children }) {
  const [colors, setColors] = useState(colorData);
  const addColors = (title, color) =>
    setColors([
      ...colors,
      {
        id: v4(),
        rating: 0,
        title,
        color,
      },
    ]);
  const rateColor = (id, rating) =>
    setColors(
      colors.map((color) => (color.id === id ? { ...color, rating } : color))
    );

  const removeColor = (id) =>
    setColors(colors.filter((color) => color.id !== id));

  return (
    <ColorContext.Provider
      value={{ colors, addColors, removeColor, rateColor }}
    >
      {children}
    </ColorContext.Provider>
  );
}
