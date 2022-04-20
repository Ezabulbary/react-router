import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const {memberId} = useParams();
    const [member, setMember] = useState({});
    // const { name, username, email, address, phone, website } = member;

    useEffect( () => {
        const url = `https://jsonplaceholder.typicode.com/users/${memberId}`;
        console.log(url)
        fetch(url)
        .then(res => res.json())
        .then(data => setMember(data))
    }, []);
    return (
        <div>
            <h1>This is a friend details: {memberId}</h1>
            <h2>Name: {member.name}</h2>
            <p>Username: {member.username}</p>
            <p>Email: {member.email}</p>
            <p>Phone: {member.phone}</p>
            <p>Website: {member.website}</p>
            <small>Address: {member?.address?.city}</small>
        </div>
    );
};

export default FriendDetail;