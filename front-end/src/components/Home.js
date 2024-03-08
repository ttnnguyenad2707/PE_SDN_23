import axios from 'axios'
import { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Nav, NavDropdown, Navbar, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../URL/URL_BE'
const Home = () => {
    const [data,setData] = useState([])
    useEffect(() => {
        axios.get(`${BASE_URL}/tutorial`).then(data => setData(data.data)).catch(error => console.log(error))
    }, [])
    return (
        <Container>

            <div className='text-center'> Tutorial Online Courses</div>
            <Link>Home Page</Link>
            <div className='text-center'>
                <input type="text" name="search" id="search" />
            </div>
            <Row>
                {data.map(data => (
                    <Col md={3}>
                        <Card >
                            <Card.Img variant="top" src={data.images[0].url} height="150px"/>
                            <Card.Body>
                                <Card.Title>{data.title}</Card.Title>
                                <Card.Text>
                                    Author: {data.author}
                                </Card.Text>
                                <Card.Text>
                                    Category: {data.category.name}
                                </Card.Text>
                                <Card.Text>
                                    {/* Comment: {data.comments?.length()} */}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}

            </Row>

        </Container>
    )
}
export default Home