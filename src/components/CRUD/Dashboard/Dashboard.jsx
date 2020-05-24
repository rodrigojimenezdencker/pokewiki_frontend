import React from 'react';
import {
    Card, Button, CardTitle, CardText, CardGroup, CardBody, Container, Row, Col
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { PageTitle } from '../../PageTitle/PageTitle';

export const Dashboard = () => (
    <Container className="mt-5 bg-light p-3">
        <PageTitle>Dashboard</PageTitle>
        <CardGroup>
            <Row>
                <Col sm={4}>
                    <Card>
                        <CardBody className="card_dashboard">
                            <CardTitle><h2><strong>Pokémon</strong></h2></CardTitle>
                            <CardText>Crea, elimina o actualiza la lista Pokémon.</CardText>
                            <Link to={`/CRUDPokemon`}>
                                <Button color="primary">Explorar</Button>
                            </Link>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm={4}>
                    <Card>
                        <CardBody>
                            <CardTitle><h2><strong>Tipos</strong></h2></CardTitle>
                            <CardText>Crea, elimina o actualiza la lista de tipos.</CardText>
                            <Button color="primary">Explorar</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm={4}>
                    <Card>
                        <CardBody>
                            <CardTitle><h2><strong>Movimientos</strong></h2></CardTitle>
                            <CardText>Crea, elimina o actualiza la lista de movimientos.</CardText>
                            <Button color="primary">Explorar</Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </CardGroup>
    </Container>
)