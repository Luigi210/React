import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './Profile.sass';
import PersonalInfo from "../Pages/PersonalInfo";

function Profile(){
    const [user, setUser] = useState('')
    const [profile, setProfile] = useState([]);
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        console.log(profile.map(profileItem => profileItem.login.toLowerCase()));
    }, [profile])

    async function getProfile(){
        if (profile.findIndex(profileItem => profileItem.login.toLowerCase() === user.toLowerCase()) !== -1) {
            return;
        }

        const apiUrl = `https://api.github.com/users/${user}`;
        const res = await axios.get(apiUrl);
        let check = false;

        setProfile([...profile, res.data]);
        setUser('');
    }
    return (
        <div>
            <div>
                <input value={user} type={'text'} onChange={event => {
                    setUser(event.target.value)
                }}/>
                <button onClick={getProfile}>Add</button>
            </div>
            <div className="d-flex flex-wrap">
                {profile.map((item, index) => {
                    return (
                        <React.Fragment key={index}>
                            <div className="profile-block">
                                <h3>{item.name}</h3>
                                <img src={item.avatar_url} className="img-thumbnail w-50"/>
                                <Link to={{
                                    pathname: '/info/' + item.name,
                                    state: {item}
                                }}  className="btn btn-primary w-50" >Open Profile</Link>
                            </div>
                        </React.Fragment>
                    )
                })}
            </div>
        </div>
    );
}

export default Profile;
