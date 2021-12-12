import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import ReactLoading from "react-loading";
import "../Styles/Repository.sass";
import {connect} from "react-redux";

function Repository(props) {
  const location = useLocation();
  const { item } = location.state;
  const reference = useRef([]);
  console.log(props);
  useEffect(() => {
    getRepos();
    console.log(props.repos.length);
  }, []);

  async function getRepos() {
    const apiUrl = `https://api.github.com/users/${item.login}/repos`;
    const res = await axios.get(apiUrl);
    if (props.repos.length === 0) {
      props.setRepos([...props.repos, res.data]);
      props.setLoading(false);
    }
  }
  console.log(props);

  const showInfo = (index) => {
    const node = reference.current[index];
    console.log(node);
    if (node.getAttribute("class").indexOf("hidden-info") !== -1) {
      node.setAttribute("class", "open-info");
    } else if (node.getAttribute("class").indexOf("hidden-info") === -1) {
      node.setAttribute("class", "hidden-info");
    }
  };

  return (
    <>
      <h2>Repositories</h2>
      <p className={"mb-0"}>Profile name: {item.name}</p>
      <a href={item.html_url}>Link</a>
      {props.loading && <ReactLoading type={"bars"} color={"black"} width={200} height={200}/>}
      {props.loading === false &&
      <div>
        <p>Repositories</p>
        <ul>
          {props.repos.length === 1 &&
          props.repos[0].map((it, index) => (
              <>
                <li
                    className={"repo-item"}
                    key={index}
                    onClick={() => {
                      showInfo(index);
                      console.log(props.repos[0]);
                    }}
                >
                  {it.name}
                </li>
                <div
                    key={index}
                    className={"hidden-info"}
                    ref={(element) => reference.current.push(element)}
                >
                  <p>ID: {it.id}</p>
                  <a href={it.url}>Link</a>
                </div>
              </>
          ))}
        </ul>
      </div>
      }
    </>
  );
}

function mapStateToProps(state){
  console.log('Repository', state);
  return {
    repos: state.repoReducer.repos,
    loading: state.repoReducer.loading
  }
}

function mapDispatchToProps(dispatch){
  return {
    setRepos: (repos) => dispatch({type: 'SET', value: repos}),
    setLoading: (load) => dispatch({type: 'CHANGE', value: load})
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Repository);
