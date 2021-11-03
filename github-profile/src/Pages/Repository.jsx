import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useLocation} from 'react-router-dom';

export default function Repository(){
    const location = useLocation();
    const { item } = location.state;
    const [repos, setRepos] = useState([]);
    useEffect( () => {
        getRepos();
        // console.log(repos.length);
    }, [])
    async function getRepos() {
        const apiUrl = `https://api.github.com/users/${item.login}/repos`;
        const res = await axios.get(apiUrl);
        // setRepos([...repos, res.data]);
        if (repos.length === 0) {
            setRepos([...repos, res.data]);
            console.log(repos.length);
        }
        console.log(repos[0]);
        console.log(repos.length);
    }
    return(
        <>
            <h2>Ustudy</h2>
            <p>{item.name}</p>
            <a href={item.html_url}>Link</a>
            {/*<ul>*/}
            <div>
                <p>Repositories</p>
                <ul>
                    {repos[0].map((it, index) => <li key={index}>{it.name}</li>)}
                </ul>
            </div>
            {/*</ul>*/}
        </>
    );
}
