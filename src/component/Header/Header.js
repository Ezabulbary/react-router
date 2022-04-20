import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <nav className='md:flex justify-center bg-indigo-200 p-8'>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/about">About</CustomLink>
                <CustomLink to="/members">Members</CustomLink>
                <CustomLink to="/posts">Posts</CustomLink>
            </nav>
            <h1 className='text-5xl mb-10'>Welcome to React Router!</h1>
        </div>
    );
};

export default Header;