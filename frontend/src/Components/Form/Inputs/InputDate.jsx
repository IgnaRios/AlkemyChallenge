import React from 'react';
import {  Col, Form, FloatingLabel } from 'react-bootstrap';


const InputDate = ({date, setDate}) =>{

    const dateHandler = (e) =>{
        setDate(e.target.value)
    };

    return(
        <Col md={2}>
            <FloatingLabel controlId="floatingInputDate" label="Date">
                <Form.Control 
                    type="date" 
                    placeholder="Date"
                    value={date}
                    onChange={dateHandler} 
                />
            </FloatingLabel>
        </Col>
    );
};


export default InputDate;