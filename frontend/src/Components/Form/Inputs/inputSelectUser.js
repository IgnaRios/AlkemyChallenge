import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { Col, Form, FloatingLabel } from 'react-bootstrap';
import {enviroment} from '../../../Constants';

const InputSelectUser = ({setUser}) => {

    const [ list, setList ] = useState([]);

    useEffect(() =>{
        userList();
    },[]);


    const userList = async () =>{

        try{
            const getUsers = await axios.get(`${enviroment.BASE_URL}/${enviroment.ENDPOINT_USER}`)
            
            const getUserAlias = getUsers.data.Lista;
         
            if(getUsers.status === 200){
                setList(getUserAlias)
            }
        }
        catch(error){
            console.error({'Error' :error.response.data.Error})
        }
    }
    
    const userHandler = (e) =>{
        setUser(e.target.value);
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