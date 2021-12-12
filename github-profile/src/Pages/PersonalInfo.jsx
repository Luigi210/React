import React, {useEffect} from "react";
import { useLocation, Link } from "react-router-dom";
import "../Styles/PersonalInfo.sass";
import dateFormat from "dateformat";

export default function PersonalInfo() {
  const location = useLocation();
  const { item } = location.state;
  const date = new Date(item.created_at);
  const member_since = dateFormat(date, "dddd, mmmm dS, yyyy, h:MM:ss TT");

  useEffect(() => {
    const getItem = localStorage.getItem('savedProfile');
    const parsed = JSON.parse(getItem);
  }, []);

  useEffect(() => {
    const setItem = localStorage.setItem('savedProfile', JSON.stringify(item));
  }, [item]);

  return (
    <div className={"profile"}>
      <div className={"profile-info"}>
        <h1>Personal Info</h1>
        <h3>Name: {item.name}</h3>
        <h4>Login: {item.login}</h4>
        <h5>
          Github Url: <a href={item.html_url}>{item.name}</a>
        </h5>
        <div className={"profile-description"}>
          <p>
            <strong>Bio:</strong> {item.bio}
          </p>
          {item.company !== null && (
            <p>
              <strong>Company:</strong> {item.company}
            </p>
          )}

          <p>
            <strong>Followers:</strong> {item.followers}
          </p>
          <p>
            <strong>Following:</strong> {item.following}
          </p>
          <p>
            <strong>Organization:</strong>{" "}
            <a href={item.organizations_url} target={"_blank"}>
              Organization Url
            </a>
          </p>
          <p>
            <strong>Location:</strong> {item.location}
          </p>
          <p>
            <strong>Member since:</strong> {member_since}
          </p>
          {item.blog !== "" && (
            <p>
              <strong>WebSite/Blog:</strong> <a href={item.blog}>Link to blog</a>
            </p>
          )}
        </div>
        <div className={"repo-link"}>
          <Link
            to={{
              pathname: "/repo/" + item.name,
              state: { item },
            }}
          >
            Go to Repositories
          </Link>
        </div>
      </div>
      <div className={"profile-image"}>
        <img src={`${item.avatar_url}`} className={"rounded"} />
      </div>
    </div>
  );
}
