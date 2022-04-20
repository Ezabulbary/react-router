import React from 'react';
import { useNavigate } from 'react-router-dom';

const Member = (props) => {
    const { name, username, id} = props.member;

    const navigate = useNavigate()

    const showMemberDetais = () => {
        const path = `/member/${id}`;
        navigate(path);
    }
    return (
        <div>
            <h2>Name: {name}</h2>
            <button onClick={showMemberDetais}>{username} id: {id}</button>
        </div>
    );
};

export default Member;