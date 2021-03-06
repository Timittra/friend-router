/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


// step 13, destruct and import useParams();
// step 14, how we have to call dynamic data for each id. use useEffect, useState
// step 15, show detail of user
// step 16, create button for user in friend.js
const FriendDetail = () => {
    let {friendId} = useParams();
    const [friend, setFriend] = useState({});
    useEffect(() =>{
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data));
    }, []);
    return (
        <div>
            <p>This is Friend Detail component: {friendId} </p>
            <h3>{friend.name}</h3>
            <p>email: {friend.email}</p>
            <p>phone: {friend.phone}</p>
            <p>website: {friend.website}</p>
        </div>
    );
};

export default FriendDetail;