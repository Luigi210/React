import React from 'react';
import {useLocation, Link} from 'react-router-dom';
import './PersonalInfo.sass';
import dateFormat from "dateformat";

export default function PersonalInfo(){
    const location = useLocation();
    const { item } = location.state;
    const date = new Date(item.created_at);
    const member_since = dateFormat(date, "dddd, mmmm dS, yyyy, h:MM:ss TT");
    return(
        <div className={"profile"}>
            <div className={"profile-info"}>
                <h1>
                    Personal Info
                </h1>
                <h3>Name: {item.name}</h3>
                <h4>Login: {item.login}</h4>
                <h5>Github Url: <a href={item.html_url}>{item.name}</a></h5>
                <div className={"profile-description"}>
                    <p><strong>Bio:</strong> {item.bio}</p>
                    <p><strong>Company:</strong> {item.company}</p>
                    <p><strong>Followers:</strong> {item.followers}</p>
                    <p><strong>Following:</strong> {item.following}</p>
                    <p><strong>Organization:</strong> <a href={item.organizations_url} target={"_blank"}>{item.organizations_url}</a></p>
                    <p><strong>Location:</strong> {item.location}</p>
                    <p><strong>Member since:</strong> {member_since}</p>
                    <p><strong>WebSite/Blog:</strong> <a href={item.blog}>{item.blog}</a></p>
                </div>
                <Link to={{
                    pathname: '/repo/' + item.name,
                    state: {item}
                }}>Go to Repositories</Link>
            </div>
            <div className={"profile-image"}>
                <img src={`${item.avatar_url}`} className={"rounded"}/>
            </div>
        </div>
    );
}
