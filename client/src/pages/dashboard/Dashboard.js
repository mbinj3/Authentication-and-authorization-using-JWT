import React from 'react';
import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {Table, Row, Col, Container} from 'react-bootstrap';

function Dashboard(){

    const navigate = useNavigate();

    const token = localStorage.getItem("token");

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fectchUsers = async () => {
            try{
                const response = await fetch("http://localhost:8080/api/users", {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                const result = await response.json();
                console.log(result);
                setUsers(result);
            }catch(err){
                console.log(err);
            }
        };
        if(token){
            fectchUsers();
        }    
        else{
            navigate('/login');
        }
    },[token, navigate]);

    return(
        <Container className="mt-5">
          <Row>
            <Col>
              <h1 className='text-center'>
                Dashboard
              </h1>  
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                  </tr>  
                </thead>
                <tbody>
                  {
                    users.map((user) => (
                        <tr key={user._id}>
                          <td>{user.name}</td> 
                          <td>{user.email}</td> 
                        </tr>
                    ))
                  }  
                </tbody>

              </Table>
            </Col> 
          </Row>  
        </Container>
    )
}

export default Dashboard