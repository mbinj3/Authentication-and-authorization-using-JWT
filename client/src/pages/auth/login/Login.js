import React from "react";
import './Login.css';
import { useState } from "react";
import {Form, Button} from 'react-bootstrap';
import { useNavigate } from "react-router";

function Login(){

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await fetch('http://localhost:8080/auth/login', {
               method: 'POST',
               headers: {
                'Content-Type': 'application/json'
               }, 
               body: JSON.stringify(formData)
            });
            const result = await response.json();
            localStorage.setItem("token", result.token)
            console.log(result);
            navigate('/dashboard')
        }catch(err){
            console.log(err);
        }finally{
            setFormData({
                email: "",
                password: ""
            })
        }
    }
    return(
        <div className="center-form">
        <Form onSubmit={handleFormSubmit}>
            <h1>Login</h1>
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
                LogIn
            </Button>
        </Form>
        </div>
    )
}

export default Login