import React from 'react';
import {useLocation} from 'react-router-dom';

export default function PersonalInfo(){
    const location = useLocation();
    const { item } = location.state;
    return(
        <>
            <h1>
                Personal Info
            </h1>
            <p>Name: {item.name}</p>
        </>
    );
}
