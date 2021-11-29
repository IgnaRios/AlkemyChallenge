import React, {useState, useEffect } from "react";
import axios from 'axios';
import {ListGroup, Button, Row, Col, Container} from 'react-bootstrap';
const BASE_URL = 'http://localhost:8000';
const endpoint = 'item';

const EntryList = () => {
    
    const [list, setList] = useState([]);
    
    useEffect(()=>{
        async function fetchData (){
        const allEntrys = await axios.get(`${BASE_URL}/${endpoint}`);
        
        if(allEntrys.status === 200) {
            setList([allEntrys.data.Listado])
        };
    };
    fetchData();
    },[list]);
    
    //console.log(list)

    const handleDelete = async (e) =>{
        e.preventDefault();
        try{
            const itemID = e.target.attributes[0];
            console.log(itemID)
            const deleteItem = await axios.delete(`${BASE_URL}/${endpoint})/${itemID}`);

            if(deleteItem.status === 200){

            }
        }
        catch(error){
            console.error(error.data.message);

        }
    };

    const EntryList = () => {
        return(
            <ListGroup as='ul'>
                {list.map((item)=>(
                    <ListGroup.Item as='li' key={item.ID}>
                        <Row className='text-center' key={item.ID}>
                            <Col>
                                {item.concept}
                            </Col>
                            <Col>
                                {item.date}
                            </Col>
                            <Col>
                                ${item.amount}
                            </Col>
                            <Col>
                                {item.type}
                            </Col>
                            <Col>
                                {item.userID}
                            </Col>
                            <Col>
                            <Button id={item.ID} variant='danger' onClick={handleDelete}>X</Button>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        );
    };

    return(
        <Container>
                <EntryList />
        </Container>
    );
};

export default EntryList;