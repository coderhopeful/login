import React from 'react'
import { useEffect, useState } from 'react'
import { Card, ListGroup, ListGroupItem, Row } from 'react-bootstrap'


function Home() {

    const [users, setUsers] = useState([])
    useEffect(() => {

        const fetchData = async () => {
            await fetch("https://reqres.in/api/users?page=2")
                .then((response) => response.json())
                .then((data) => setUsers(data.data))


        }
        fetchData();



    }, [])

    return (
        <Row>

            {
                users.map((user) => (
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={user.avatar} />
                        <Card.Body>
                            <Card.Title>Name: <b>{user.first_name} {user.last_name} </b></Card.Title>
                            <Card.Text>{user.email}</Card.Text>
                        </Card.Body>


                    </Card>





                ))


            }


        </Row>
    )
}

export default Home




