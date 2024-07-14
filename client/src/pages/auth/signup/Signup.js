import React from "react";
import { useState} from "react";
import {Button, Form} from 'react-bootstrap';
import './Signup.css';
import {useNavigate} from 'react-router-dom'


function Signup(){

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const handleInputChange = (e) => {
        const {name, value} = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await fetch('http://localhost:8080/user/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const result = await response.json();
            console.log(result);
            navigate('/login')
        }catch(err){
            console.error(err);
        }finally{
            setFormData({
                name: "",
                email: "",
                password: ""
            })
        }
    }
    return(
        <div className="center-form">
        <Form onSubmit={handleFormSubmit}>
            <h1>Signup</h1>
            <Form.Group controlId="formBasicName">
                <Form.Label>
                    Name
                </Form.Label>
                <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter name"
                    value={formData.name}
                    onChange={handleInputChange}
                />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>
                    Email address
                </Form.Label>
                <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={handleInputChange}
                />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>
                    Password
                </Form.Label>
                <Form.Control
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    value={formData.password}
                    onChange={handleInputChange}
                />
            </Form.Group>
            <Button variant="dark" type="submit" className="w-100">
                Signup
            </Button>
        </Form>
        </div>
    )
}

export default Signup