import React from 'react';
import { Col, Form, FloatingLabel } from 'react-bootstrap';

const InputSelectUser = ({user, setUser}) => {
    
    const userHandler = (e) =>{
        setUser(e.target.value);
    };
    //mapear todos los usuarios registrados para desplegarlos en al lista de opciones
    return(
        <Col md={2}>
            <FloatingLabel controlId="floatingSelectUser" label="Select User">
                <Form.Select value={user} onChange={userHandler}>
                    <option>Select Option</option> 
                    <option value='1'>User 1</option>
                    <option value='2'>User 2</option>
                </Form.Select>
            </FloatingLabel>
        </Col>
    );
};

export default InputSelectUser;