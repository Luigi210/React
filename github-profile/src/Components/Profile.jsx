import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Profile.sass";
import PersonalInfo from "../Pages/PersonalInfo";
// import {Icon} from "@material-ui/core";
import { Icon } from "semantic-ui-react";

function Profile() {
  const [user, setUser] = useState("");
  const [profile, setProfile] = useState([]);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    try {
      const arrProfiles = localStorage.getItem("profiles");
      const parsedArray = JSON.parse(arrProfiles);
      console.log(parsedArray);
      setProfile(parsedArray);
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("profiles", JSON.stringify(profile));
    console.log(profile);
    return () => {
      console.log("123");
    };
  }, [profile]);

  async function getProfile() {
    if (
      profile.findIndex(
        (profileItem) => profileItem.login.toLowerCase() === user.toLowerCase()
      ) !== -1
    ) {
      return;
    }

    const apiUrl = `https://api.github.com/users/${user}`;
    const res = await axios.get(apiUrl);

    setProfile([...profile, res.data]);
    setUser("");
  }

  function deleteProfile(index) {
    setProfile(profile.filter((element, ind) => ind !== index));
  }

  return (
    <div>
      <div>
        <input
          className={"search-profile"}
          value={user}
          type={"text"}
          onChange={(event) => {
            setUser(event.target.value);
          }}
          placeholder="Enter the name of user"
        />
        <button className={"add-button"} onClick={getProfile}>
          Add
        </button>
      </div>
      <div className="d-flex flex-wrap">
        {profile.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <div className="profile-block">
                <div className={"profile-title"}>
                  <h3 className={"profile-name"}>{item.name}</h3>
                  {/*<Icon name={"download"}/>*/}
                  {/*<Icon name={"trash alternate outline"} link size={"huge"}/>*/}
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
                    // console.log("us");
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

export default Profile;
