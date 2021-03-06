import React, {useState, useEffect } from "react";
import axios from 'axios';
import {ListGroup, Button, Row, Col, Container} from 'react-bootstrap';
import {enviroment} from '../../Constants/';

const EntryList = ({fetching}) => {
    
    const [list, setList] = useState([]);
    
    useEffect(()=>{
        getAllItems();
        EntryList();
    },[fetching]);
    
    const getAllItems = async () => {
        try{
            const allEntrys = await axios.get(`${enviroment.BASE_URL}/${enviroment.ENDPOINT_ITEM}`);
            
            const entry = allEntrys.data.Listado;
            
            const allEntrysOrdered = entry.sort( //ordenar la lista del último agregado al primero
                function(a, b){
                    if(a.date > b.date){
                        return -1
                    }
                    if(a.date < b.date){
                        return 1
                    }
                    return 0
                }
            );
            
            const itemsFiltered = allEntrysOrdered.slice(0 , 10) // mostrar los últimos 10 movimientos
               
            if(allEntrys.status === 200) {
                setList(itemsFiltered);
            };
        }
        catch(error){
        console.error({'Error' :error.response.data.Error});
        };
    };
    

    const handleDelete = async (e) =>{
        e.preventDefault();
        try{
            const itemID = e.target.attributes[0].value;
            
            const deleteItem = await axios.delete(`${enviroment.BASE_URL}/${enviroment.ENDPOINT_ITEM}/${itemID}`);

            getAllItems(); // llamo la función para volver a cargar los movimientos
        }
        catch(error){
            console.error(error.data.message);

        }
    };

    const EntryList = () => {
        
        return(
            <ListGroup as='ul' className='mt-3' >
                {list.length === 0 
                    ? <h4 className='text-center'>No hay nada Cargado</h4> 
                    : list.map((item, index)=>(
                    <ListGroup.Item as='li' key={index}>
                        <Row className='text-center'>
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