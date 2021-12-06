import React, {useState} from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Button} from 'react-bootstrap';
import InputConcept from './Inputs/InputConcept';
import InputAmount from './Inputs/inputAmount';
import InputDate from './Inputs/InputDate';
import InputSelectType from './Inputs/InputSelectType';
import InputSelectUser from './Inputs/inputSelectUser';

const BASE_URL = 'http://localhost:8000';
const endpoint = 'item';

const Formulario =  ({fetching, setFetching}) => {

    const [concept, setConcept] = useState('');
    const [amount, setAmount]= useState(0);    
    const [date, setDate] = useState('');
    const [type, setType] = useState('');
    const [user, setUser]= useState('');

    const item = {
        concept: concept,
        amount: amount, 
        date: date,
        type: type,
        userID: user
    };
    
    const submitHandler = async (e) =>{
        e.preventDefault();

        try{ 
            setFetching(true); 
            const addItem = await axios.post(`${BASE_URL}/${endpoint}`, item)
            
            if(addItem.status === 200){
               // console.log(addItem.data)
            };
            setFetching(false)
            
            const cleanInput = () =>{
                setConcept('');
                setAmount(0);
                setDate('');
                setType('');
                setUser('');
            };

            cleanInput();
        }
        catch(error){
            console.error({'Error' :error.response.data.Error})
        }
    };

    return(
        <Container>
            <Form >
                <Row>
                    <InputConcept concept={concept} setConcept={setConcept} />
                </Row>
                <Row>
                    <InputAmount amount={amount} setAmount={setAmount}  />
                    <InputDate date={date} setDate={setDate} />
                    <InputSelectType type={type} setType={setType} />
                    <InputSelectUser setUser={setUser} />
                    <Col md={2} className='mt-1' >
                        <Button variant="primary" size='lg' type="submit" onClick={submitHandler}>
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
};

export default Formulario;