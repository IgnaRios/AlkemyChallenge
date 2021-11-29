import React, {useState, useEffect} from "react";
import axios from "axios";
const BASE_URL = 'http://localhost:8000';
const endpoint = 'item';

const Balance = ({fetching}) => {
    
    const[ balance, setBalance ] = useState(0);
    const[ income, setIncome ] =useState(0);
    const [ expenses, setExpenses ] = useState(0);
    
    useEffect(()=>{
        getItems();
        setCurrentBalance();        
    },[fetching]);


    const getItems = async () =>{
        const items = await axios.get(`${BASE_URL}/${endpoint}`);
        
        const allItems = items.data.Listado

        function filterItemIncome (item){
            if(item.type === 'Income'){
                return true
            }
            return false
        }

        function filterItemExpenses (item){
            if(item.type === 'Expenses'){
                return true
            }
            return false
        }

        const itemsIncome = allItems.filter(filterItemIncome);
        setIncome(itemsIncome.map((item) => (item.amount)).reduce((amount, value) => amount + value))
        
        const itemExpenses = allItems.filter(filterItemExpenses);
        setExpenses(itemExpenses.map((item) => (item.amount)).reduce((amount, value) => amount + value))
        
    };

    function setCurrentBalance () {
        setBalance(income - expenses)
    };

    console.log(income);
    console.log(expenses);
    console.log(balance);
    
    return(
        <span>${balance}</span>
    )
};

export default Balance;