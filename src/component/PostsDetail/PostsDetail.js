import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostsDetail = () => {
    const {postsId} = useParams();
    const [posts, setPosts] = useState({});

    useEffect( () => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postsId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [postsId])
    return (
        <div className='m-8'>
            <h1 className='text-2xl'>This is my posts details: {postsId}</h1>
            <h4 className='font-bold'>Title: {posts.title}</h4>
            <p>Body: {posts.body}</p>
        </div>
    );
};

export default PostsDetail;