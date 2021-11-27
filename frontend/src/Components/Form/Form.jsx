import React, {useState} from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Button} from 'react-bootstrap';
import InputConcept from './Inputs/InputConcept';
import InputAmount from './Inputs/inputAmount';
import InputDate from './Inputs/InputDate';
import InputSelectType from './Inputs/InputSelectType';
import InputSelectUser from './Inputs/inputSelectUser';

const BASE_URL = 'https://localhost:3000';
const endpoint = 'item';

const Formulario =  () => {

    const [concept, setConcept] = useState('');
    const [amount, setAmount]= useState('');    
    const [date, setDate] = useState('');
    const [type, setType] = useState('');
    const [user, setUser]= useState('');

    const item = {
        concept: concept,
        amount: amount, 
        date: date,
        type: type,
        user: user
    };

    //console.log(item);
    
    const submitHandler = async (e) =>{
        e.preventDefault();

        try{  
            const addItem = await axios.post(`${BASE_URL}`/`${endpoint}`, item)
            console.log(addItem);

            if(addItem.status === 200){
            };
        }
        catch(error){
            console.error({'Error': error.mesagge})
        }

        
    };

    return(
        <Container>
            <Form>
                <Row>
                    <InputConcept concept={concept} setConcept={setConcept} />
                    <InputAmount amount={amount} setAmount={setAmount}  />
                    <InputDate date={date} setDate={setDate} />
                    <InputSelectType type={type} setType={setType} />
                    <InputSelectUser user={user} setUser={setUser} />

                    <Col md={2}>
                        <Button variant="primary" size='lg' type="submit" onClick={submitHandler}>
                            Submit
                        </Button>
                    </Col>

                </ Row>
            </Form>
        </Container>
    );
};

export default Formulario;