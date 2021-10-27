import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useLocation} from 'react-router-dom';

export default function Repository(){
    const location = useLocation();
    const { item } = location.state;
    const [repos, setRepos] = useState([]);
    useEffect(async () => {
        const apiUrl = `https://api.github.com/users/${item.login}/repos`;
        const res = await axios.get(apiUrl);
        setRepos([...repos, res.data]);
        console.log(repos);
    }, [])

    return(
        <>
            <h2>Ustudy</h2>
            <p>{item.name}</p>
            <a href={item.html_url}>Link</a>
            <ul>
                {repos.map((repo, index) => {
                    <li>{repo.id}</li>
                })}
            </ul>
        </>
    );
}
