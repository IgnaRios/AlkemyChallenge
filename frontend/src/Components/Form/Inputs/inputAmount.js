import { Col, Form, FloatingLabel } from 'react-bootstrap';
import React from 'react';

const InputAmount = ({amount, setAmount}) =>{
    
    const amountHandler = (e) => {
        setAmount(e.target.value);
    };
        
    return(
        <Col md={3}>
            <FloatingLabel controlId="floatingInputAmount" label="Amount">
                <Form.Control 
                type="number" 
                placeholder="Amount" 
                value={amount}
                onChange={amountHandler}
                />
            </FloatingLabel>
        </Col>
    );
};

export default InputAmount;