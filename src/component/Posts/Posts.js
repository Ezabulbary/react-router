import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [])
    return (
        <div>
            <h1>This is our posts page. {posts.length}</h1>
            <div>
                {
                    posts.map(post => <Link
                        className='p-2 border-black'
                        key={post.id}
                        to={`/posts/${post.id}`}
                    >Id: {post.id}</Link>)
                }
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Posts;