import React from 'react';
import { Link, useHistory } from 'react-router-dom';

// step 4, install react-router-dom
const Friend = (props) => {
    // step 3 , destructuring props.friend
    const { name, email, id } = props.friend;

    // step 16, useHistory(), function of handleClick(), onClick
    const history = useHistory();
    const handleClick = (friendId) => {
        const url = `/friend/${friendId}`;
        history.push(url);
    }

    const friendStyle = {
        border: '1px solid purple', 
        margin: '20px', 
        padding: '20px', 
        borderRadius: '20px'
    }

    // step 10, creating Link for detail user information 
    // step 11, create component FriendDetail/FriendDetail.js
    return (
        <div style={friendStyle}>
            <h2>Name: {name}</h2>
            <p>email: {email}</p>
            <Link to={`/friend/${id}`}>Show detail of {id}</Link>
            <br/>
            <button onClick={() => handleClick(id)}>Click me</button>
        </div>
    );
};

export default Friend;