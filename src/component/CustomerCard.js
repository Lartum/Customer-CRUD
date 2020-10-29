import React, { useReducer, useState } from 'react';
import { customerData } from '../utils/dataParsing'

const CustomerCard = ({ 
    id,
    customer_name, 
    customer_email, 
    product, 
    quantity  }) => {

    const productNumber = product.replace('Product ','')

    const initialState = {
    id,
    customer_name, 
    customer_email, 
    productNumber, 
    quantity
    }    

    function reducer(state, action){
        switch(action.type){
            case 'CUSTOMER_NAME':
                return{  customer_name: action.payload }
            case 'CUSTOMER_EMAIL':
                return{  customer_email: action.payload }    
            case 'PRODUCT_NUMBER':
                return{  productNumber: action.payload }    
            case 'QUANTITY':
                return{  quantity: action.payload }  
             default:
                return{ state } 
        }

    }


    const [ disableEdit, setDisableEdit ] = useState(true)  
    const [ state, dispatch ] = useReducer(reducer, initialState)

    const handleSubmit = () =>{
        setDisableEdit(true)
     
        // const modifiedCustomer = customerData.find(customer => customer.id === id)
      
    }

    return (
        <div className='customerCard'>
            <li key={id}>
            <p>Customer Name: 
            <input 
            disabled={disableEdit} 
            value={state.customer_name} 
            onChange={(e)=> dispatch({type:'CUSTOMER_NAME', payload:e.target.value}) }
            />
            </p>
            <p>Customer Email: <input disabled={disableEdit} 
            value={state.customer_email} 
            onChange={(e)=> dispatch({type:'CUSTOMER_EMAIL', payload:e.target.value}) }
            />
            </p>
            <p>Product: 
            <input 
            disabled={disableEdit} 
            value={state.productNumber} 
            onChange={(e)=> dispatch({type:'PRODUCT_NUMBER', payload:e.target.value}) }
            />
            </p>
            <p>Quantity: 
            <input 
            disabled={disableEdit} 
            value={state.quantity} 
            onChange={(e)=> dispatch({type:'QUANTITY', payload:e.target.value}) }
            />
            </p>
            <button onClick={()=> setDisableEdit(false)}>Edit</button>
            <button onClick={handleSubmit}>Done</button>
            </li>
        </div>

    );
}

export default CustomerCard;