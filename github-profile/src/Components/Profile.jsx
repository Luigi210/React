import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../Styles/Profile.sass";
import PersonalInfo from "../Pages/PersonalInfo";
import { Icon } from "semantic-ui-react";
import {connect} from "react-redux";

function Profile(props) {
  console.log(props);
  useEffect(() => {
    try {
      const arrProfiles = localStorage.getItem("profiles");
      const parsedArray = JSON.parse(arrProfiles);
      console.log(parsedArray);
      props.setProfile([...parsedArray]);
    } catch (e) {
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("profiles", JSON.stringify(props.profile));
    return () => {
      console.log("123");
    };
  }, [props.profile]);

  async function getProfile() {
    if (
      props.profile.findIndex(
        (profileItem) => profileItem.login.toLowerCase() === props.user.toLowerCase()
      ) !== -1
    ) {
      console.log("Return");
      return;
    }

    const apiUrl = `https://api.github.com/users/${props.user}`;
    const res = await axios.get(apiUrl);

    props.setProfile([...props.profile, res.data]);
    console.log(props.profile, res.data);
    props.setUser("");
  }

  function deleteProfile(index) {
    props.setProfile(props.profile.filter((element, ind) => ind !== index));
  }

  return (
    <div>
      <div className={"d-flex justify-content-center"}>
        <input
          className={"search-profile form-control"}
          value={props.user}
          type={"text"}
          onChange={(event) => {
            props.setUser(event.target.value);
          }}
          placeholder="Enter the name of user"
          onKeyDown={(event) => (event.key === "Enter" ? getProfile() : null)
          }
        />
        <button className={"btn btn-outline-success"} onClick={() => getProfile()}>
          Add
        </button>
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        {props.profile.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <div className="profile-block">
                <div className={"profile-title"}>
                  { item.name !== null ? <h3 className={"profile-name"}>{item.name}</h3> : <h3 className={"profile-name"}>{item.login}</h3>}
                </div>
                <img src={item.avatar_url} className="img-thumbnail" />
                <Link
                  to={{
                    pathname: "/info/" + item.name,
                    state: { item },
                  }}
                  className="btn btn-primary w-100"
                >
                  Open Profile
                </Link>
                <button
                  className="btn btn-secondary w-100"
                  onClick={() => {
                    return deleteProfile(index);
                  }}
                >
                  Delete
                </button>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

function mapStateToProps(state){
  console.log('State', state)
  return {
    profile: state.profileReducer.profile,
    user: state.profileReducer.user
  }
}


function mapDispatchToProps(dispatch){
  return {
    setProfile: (profile) => dispatch({ type: 'SET', value: profile}),
    setUser: (user) => dispatch({ type: 'CHANGE', value: user})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
