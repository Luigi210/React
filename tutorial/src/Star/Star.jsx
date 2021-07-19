import React from "react";
import { FaStar } from "react-icons/fa";
import { styleForStar } from "../App";
import { useState } from "react";

const Star = ({ selected = false, onSelect = (f) => f }) => {
  return (
    <FaStar
      color={selected ? "red" : "grey"}
      style={styleForStar}
      onClick={onSelect}
    />
  );
};

const createArray = (length) => [...Array(length)];

export default function StarRating({ 
    totalStars = 5,
    selectedStars = 0,
    onRate = f => f
  }) {
  // const [selectedStars, setSelectedStars] = useState(4);

  return (
    <>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => onRate(i + 1)}
        />
      ))}
      <p
        style={{
          margin: "30px",
          fontSize: "25px",
        }}
      >
        {selectedStars}
        of {totalStars}
        stars
      </p>
    </>
  );
}
