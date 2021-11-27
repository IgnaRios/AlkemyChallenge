import React from 'react';
import { Col, Form, FloatingLabel } from 'react-bootstrap';

const InputConcept = ({concept, setConcept}) => {
    
    const conceptHandler = (e) =>{
        setConcept(e.target.value);
    };
    
    return (
        <Col md={2}>
            <FloatingLabel controlId="floatingInputConcept" label="Concept">
                <Form.Control 
                    type="text" 
                    placeholder="Concept"
                    value={concept}
                    onChange={conceptHandler} 
                />
            </FloatingLabel>
        </Col>
    );
};

export default InputConcept;