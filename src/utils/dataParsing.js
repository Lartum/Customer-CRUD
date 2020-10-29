import data from '../data/DummyData.json'

export const validateExistingData = () =>{
    if(!localStorage.customerData){
        localStorage.setItem('customerData', JSON.stringify(data))
    }
}
export const customerData = JSON.parse(localStorage.customerData)