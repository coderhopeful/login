import React from 'react'
import { useEffect, useState } from 'react'
import { Card, Container, Row } from 'react-bootstrap'
import 'react-toastify/dist/ReactToastify.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import "./home.css"
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';




function Home() {
    const [users, setUsers] = useState([])
    const navigate = useNavigate();

    useEffect(() => {

        const fetchData = async () => {
            await fetch("https://reqres.in/api/users?page=2")
                .then((response) => response.json())
                .then((data) => setUsers(data.data))


        }
        fetchData();



    }, [])

    const removeToken = (userToken) => {
        localStorage.removeItem("accessToken");

        navigate('/');
    };

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar sx={{ bgcolor: "black" }} position="static">
                    <Toolbar>
                        <IconButton
                            size="small"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >

                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Reqres Users
                        </Typography>
                        <Button onClick={removeToken} sx={{ bgcolor: "red", color: "white" }}>Logout</Button>
                    </Toolbar>
                </AppBar>
            </Box>

            <Container>
                <Row className="mt-2" >

                    {

                        users.map((user) => (
                            <Card className="card border border-dark rounded-3 " style={{ width: '18rem' }}>
                                <Card.Img className="card-img" variant="top" src={user.avatar} />
                                <Card.Body>
                                    <Card.Title className="text-center"><b>{user.first_name} {user.last_name} </b></Card.Title>
                                    <Card.Text className="text-center text-primary">{user.email}</Card.Text>
                                </Card.Body>


                            </Card>
                        ))


                    }


                </Row>
            </Container>
        </>
    )
}

export default Home




