import React from 'react';
import {  Col, Form, FloatingLabel } from 'react-bootstrap';

const InputSelectType = ({type, setType}) =>{

    const typeHandler = (e) =>{
        setType(e.target.value)
    };
    return(
        <Col md={2}>
        <FloatingLabel controlId="floatingSelectType" label="Select Type">
            <Form.Select value={type} onChange={typeHandler}>
                <option>Select Option</option>
                <option value="Income">Income</option>
                <option value="Expenses">Expenses</option>
            </Form.Select>
        </FloatingLabel>
    </Col>
    );
};

export default InputSelectType;