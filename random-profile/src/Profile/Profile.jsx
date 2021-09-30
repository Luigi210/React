import React, { useState } from "react";
import "../Profile/Profile.css";

const style = {
  img: {
    width: "100%",
  },
};

export default function Profile(props) {
  return (
    // <img src={}/>
    <div>
      <img src={props.image} style={style.img} />
      <h3>{props.name}</h3>
      <div className="personal-info">
        <p>Age: {props.age}</p>
        <p>Country: {props.country}</p>
        <p>Skills:</p>
        <ul>
          {props.skills.map((skill) => (
            <li>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
