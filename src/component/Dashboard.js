import React from 'react';
import { GoogleLogout } from 'react-google-login'
import { useDispatch } from 'react-redux'
import { logout } from '../redux/slices/auth'
import UserContainer from './UserContainer'
import CustomerCard from './CustomerCard'
import { Link } from 'react-router-dom';
import { validateExistingData, customerData } from '../utils/dataParsing'

const Dashboard = () => {
    const dispatch = useDispatch() 
    validateExistingData()
    const successfullLogout = () =>{
        dispatch(logout())
    }
    return (
        <>
        <UserContainer/>
        <GoogleLogout
        clientId={process.env.REACT_APP_CLIENT_ID}
        buttonText='Logout'
        onLogoutSuccess={successfullLogout}
        />
        <h1>Customer Details</h1>
        <Link to='/neworder'><button>Create new order</button></Link>
        { customerData.splice(0,4).map((customer) => {
            return(
                <CustomerCard
                key = { customer.id }
                id = { customer.id }
                customer_name = { customer.customer_name }
                customer_email = { customer.customer_email }
                product = { customer.product }
                quantity = { customer.quantity }
                />
            )
         }) }
        </>
    );
}

export default Dashboard;