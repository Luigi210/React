import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import {useLocation} from 'react-router-dom';
import './Repository.sass';

export default function Repository(){
    const location = useLocation();
    const { item } = location.state;
    const [repos, setRepos] = useState([]);
    const reference = useRef([]);
    useEffect( () => {
        getRepos();
        console.log(repos.length);
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
    }

    const showInfo = (index) => {
        const node = reference.current[index];
        console.log(node);
        if (node.getAttribute('class').indexOf('hidden-info') !== -1){
            node.setAttribute('class', 'open-info');
        }
        else if (node.getAttribute('class').indexOf('hidden-info') === -1){
            node.setAttribute('class', 'hidden-info');
        }
    }

    return(
        <>
            <h2>Ustudy</h2>
            <p>{item.name}</p>
            <a href={item.html_url}>Link</a>
            <div>
                <p>Repositories</p>
                <ul>
                    { repos.length === 1 && repos[0].map((it, index) =>
                        <>
                            <li
                                className={"repo-item"}
                                key={index}
                                onClick={() => {
                                    showInfo(index);
                                    console.log(repos[0]);
                                }}

                            >{it.name}</li>
                            <div key={index}
                               className={"hidden-info"}
                               ref={(element) => reference.current.push(element)}
                            >
                                <p>ID: {it.id}</p><br></br>
                                <a href={it.url}>Link</a>
                            </div>
                        </>)
                    }
                </ul>
            </div>
        </>
    );
}
