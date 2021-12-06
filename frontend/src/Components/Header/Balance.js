import React, {useState, useEffect} from "react";
import axios from "axios";
const BASE_URL = 'http://localhost:8000';
const endpoint = 'item';

const Balance = ({fetching}) => {
    
    const [ balance, setBalance ] = useState(0);
    const [ income, setIncome ] =useState(0);
    const [ expenses, setExpenses ] = useState(0);
    
    useEffect(()=>{
        getItems();
        
    },[]);


    const getItems = async () =>{

        const items = await axios.get(`${BASE_URL}/${endpoint}`);
        console.log(items) 
        const allItems = items.data.Listado

        function filterItemIncome (item){  // listo todos los movimientos 'Income'
            if(item.type === 'Income'){
                return true
            }
            return false
        }

        function filterItemExpenses (item){ // listo todos los movimientos 'Expenses'
            if(item.type === 'Expenses'){
                return true
            }
            return false
        }

        //obtengo los montos ingresados de cada array para sumarlos
        const itemsIncome = allItems.filter(filterItemIncome);
        setIncome(itemsIncome.map((item) => (item.amount)).reduce((amount, value) => amount + value, 0))
        
        const itemExpenses = allItems.filter(filterItemExpenses);
        setExpenses(itemExpenses.map((item) => (item.amount)).reduce((amount, value) => amount + value, 0))

        //resto los totales para obtener el balance. 
        //Falta que no inicie en 0
        //Falta que se actualice en tiempo real(no se actualiza al agregar o eliminar un movimiento) 
        const currentBalance = (a, b) =>{
            setBalance(a - b)
        }
        currentBalance(income, expenses);
    };   

    return(
        <span>${balance}</span>
    )
};

export default Balance;