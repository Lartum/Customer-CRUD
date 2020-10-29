import React from 'react';
import { useSelector } from 'react-redux'

const UserContainer = () => {
    const { user } = useSelector(state => state.auth)
    const { name, picture, email } = user
    return (
        <div className='userContainer'>
            <img alt='user' src={ picture }/>
            <p>{name}</p>
            <p>{email}</p>
        </div>
    );
}

export default UserContainer;