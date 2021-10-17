import React from "react";
import { useState } from "react";
import "./App.css";
import Profile from "../src/Profile/Profile";
import Emma from "../src/assets/emma.jfif";
import Harley from "../src/assets/harley.jfif";
import Jessica from "../src/assets/jessica.jfif";
import John from "../src/assets/john.jfif";
import Metal from "../src/assets/metal.jfif";

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function rec(x, n) {
  if (x === n) {
    return rec(x, randomIntFromInterval(0, 4));
  }
  return n;
}

function App() {
  const [random, setRandom] = useState(randomIntFromInterval(0, 4));
  const object = [
    {
      image: Emma,
      name: "Emma",
      age: randomIntFromInterval(20, 50),
      country: "USA",
      skills: ["Management", "Client service", "Presentation"],
    },
    {
      image: Harley,
      name: "Harley",
      age: randomIntFromInterval(20, 50),
      country: "Canada",
      skills: ["Content making", "SMM", "taking surveys"],
    },
    {
      image: Jessica,
      name: "Jessica",
      age: randomIntFromInterval(20, 50),
      country: "Russia",
      skills: ["Accounting", "Calculations", "Mathematical analysis"],
    },
    {
      image: John,
      name: "John",
      age: randomIntFromInterval(20, 50),
      country: "Canada",
      skills: ["Design", "User experience", "Illustrations"],
    },
    {
      image: Metal,
      name: "Metal",
      age: randomIntFromInterval(20, 50),
      country: "Ireland",
      skills: ["Leadership ", "Honesty", "Knowing your audience"],
    },
  ];
  return (
    <>
      <h1>Random Profile - React Application</h1>
      <div className="profile-block">
        {/* {object.map((person) => ( */}
        <Profile
          image={object[random].image}
          name={object[random].name}
          age={object[random].age}
          country={object[random].country}
          skills={object[random].skills}
        />
        <button
          onClick={() => {
            setRandom(rec(random, randomIntFromInterval(0, 4)));
          }}
          className="random-profile"
        >
          Random Profile
        </button>
      </div>
    </>
  );
}

export default App;
