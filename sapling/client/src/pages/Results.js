import React, { useEffect } from "react";
import { Navbar, Nav, Form, FormControl, Button, Container, Card } from 'react-bootstrap';
import { useStoreContext } from "../utils/GlobalState"
import { SET_CURRENT_PRODUCT, TRACK_PRODUCT } from "../utils/actions";
import API from "../utils/API";




const Results = () => {
    const [state, dispatch] = useStoreContext();

    const getResults = (search) => {
        API.searchProduct(search, 1)
        .then(res => dispatch)
    };

    useEffect(() => {
        getResults();
    });

    const viewProduct = () => {
        dispatch({ type: SET_CURRENT_PRODUCT });
    };

    const trackProduct = () => {
        dispatch({ type: TRACK_PRODUCT, post: state.currentProduct });
    };


    return (
        <div>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Sapling</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>

        <Container>
             <h1>Products:</h1>
                    <Col className="md-4">
                        {!state.productList.length ? (
                            <h1>No products to display</h1>
                        ) : (<Container>
                            <CardColumns>
                                {state.productList.map(product => {
                                    return (
                                        <Card key={product.name} >
                                            <Card.Img variant="top" src={product.image} style={{ width: "45%" }} className="ml-5 pl-5 pt-5" />
                                            <Card.Body className="text-center">
                                                <Card.Title>{product.name}</Card.Title>
                                                <Card.Text>
                                                    <strong>Price: </strong> ${product.price}
                                                </Card.Text>
                                                <Card.Text>
                                                    <strong>Rating:</strong>
                                                    {product.rating}
                                                </Card.Text>
                                                <Button variant="primary" onClick={viewProduct} >View Product</Button>
                                                <Button variant="success" onClick={trackProduct}>Track Product</Button>
                                            </Card.Body>
                                        </Card>
                                    );
                                })}
                            </CardColumns>
                        </Container>
                            )}
                    </Col>
        </Container>

        </div>
    )
}



export default Results;