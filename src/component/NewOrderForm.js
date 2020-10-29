import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { customerData } from '../utils/dataParsing'
import { v4 as uuidv4 } from 'uuid'

const NewOrderForm = () =>{
    const [ customerName, setCustomerName ] = useState('')
    const [ customerEmail, setCustomerEmail ] = useState('')
    const [ product, setProduct ] = useState('')
    const [ quantity, setQuantity ] = useState()
    const id =  uuidv4()
    const handleSubmit = () => {
        customerData.unshift({
           id: id,
           customer_name: customerName,    
           customer_email: customerEmail,
           product: 'Product ' + product,
           quantity: quantity
       })
    localStorage.setItem('customerData', JSON.stringify(customerData))
    alert('new Order Created check')
    }
    return(
        <div className='newOrder'>
          Customer Name: <input onChange={(e) => setCustomerName(e.target.value)} />
          Customer Email:  <input onChange={(e) => setCustomerEmail(e.target.value)} />
          Product Number: <input onChange={(e) => setProduct(e.target.value)} />
          Quantity: <input type='number' onChange={(e) => setQuantity(e.target.value)} />
          <Link to='/dashboard'><button onClick={ handleSubmit }>Submit</button></Link>
        </div>
    )
}

export default NewOrderForm