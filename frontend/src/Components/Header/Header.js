import { Container, Row, Col } from 'react-bootstrap';
import Balance from './Balance'

const Header = ({fetching, setFetching}) =>{

    return(
        <Container>
            <Row className="justify-content-md-center">
                <Col sm={6}>
                    <h1>
                        Current Balance : <Balance fetching={setFetching} setFetching={setFetching}/>
                    </h1>
                </Col>
            </Row>
        </Container>
    );
};

export default Header;