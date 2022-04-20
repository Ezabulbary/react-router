import React, { useEffect, useState } from 'react';
import Member from '../Member/Member';

const Members = () => {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setMembers(data))
    }, [])
    return (
        <div>
            <h1>Are you joining us?</h1>
            <p>All about my members-{members.length}</p>
            {
                members.map(member => <Member 
                    key={member.id} 
                    member={member}
                    ></Member>)
            }
        </div>
    );
};

export default Members;