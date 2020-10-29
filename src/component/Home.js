import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { GoogleLogin } from 'react-google-login'
import { login } from '../redux/slices/auth'


const  Home = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { user } = useSelector(state => state.auth)

    useEffect(() =>{
        if(user){
           history.push({
            pathname:'/dashboard'
           })
        }
    },[user,history])

    
    const successfullLogin = (response) =>{
        const jwtToken = response.tokenObj.id_token
        dispatch(login(jwtToken))
    }

    const failedLogin = (response) =>{
        alert(response) 
    }
    return (
        <div>
            <h1>Login</h1>
            <GoogleLogin
                clientId={ process.env.REACT_APP_CLIENT_ID }
                buttonText='Login with google'
                onSuccess={ successfullLogin }
                onFailure={ failedLogin }
            />
        </div>
    );
}

export default Home;