import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { Col, Form, FloatingLabel } from 'react-bootstrap';
const BASE_URL = 'http://localhost:8000';
const endpoint = 'user';

const InputSelectUser = ({setUser}) => {

    const [ list, setList ] = useState([]);

    useEffect(() =>{
        userList();
    },[]);


    const userList = async () =>{

        try{
            const getUsers = await axios.get(`${BASE_URL}/${endpoint}`)
            
            const getUserAlias = getUsers.data.Lista;
         
            if(getUsers.status === 200){
                setList(getUserAlias)
            }
        }
        catch(error){
            console.error(error.data)
        }
    }
    
    const userHandler = (e) =>{
        setUser(e.target.value);
        console.log(e.target.value)
    };
    //mapear todos los usuarios registrados para desplegarlos en al lista de opciones
    return(
        <Col md={2}>
            <FloatingLabel controlId="floatingSelectUser" label="Select User">
                <Form.Select onChange={userHandler}>
                    <option>Select Option</option> 
                    {list.map((user)=>(
                        <option value={user.ID} key={user.ID}> {user.alias} </option>
                    ))}
                    
                </Form.Select>
            </FloatingLabel>
        </Col>
    );
};

export default InputSelectUser;