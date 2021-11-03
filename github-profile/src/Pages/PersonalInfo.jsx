import React from 'react';
import {useLocation, Link} from 'react-router-dom';
import './PersonalInfo.sass';

export default function PersonalInfo(){
    const location = useLocation();
    const { item } = location.state;
    return(
        <div className={"profile"}>
            <div className={"profile-info"}>
                <h1>
                    Personal Info
                </h1>
                <h3>Name: {item.name}</h3>
                <h4>Login: {item.login}</h4>
                <h5>Github Url: <a href={item.html_url}>{item.name}</a></h5>
                <p>Bio: {item.bio}</p>
                <p>Company: {item.company}</p>
                <p>Followers: {item.followers}</p>
                <p>Following: {item.following}</p>
                <p>Organization: <a href={item.organizations_url} target={"_blank"}>{item.organizations_url}</a></p>
                <Link to={{
                    pathname: '/repo/' + item.name,
                    state: {item}
                }}>Ustudy</Link>
            </div>
            <div className={"profile-image"}>
                <img src={`${item.avatar_url}`}/>
            </div>
        </div>
    );
}
