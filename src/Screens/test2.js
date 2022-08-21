import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import {Container,Row,Col,Form} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../css/Login.css';
function Login() {
  return (
    <>
            <Container className='mt-5'>
        
        <Row>
    
            <Col lg ={5} md={6} sm ={12} className='text-center mt-5 p-3'  style={{
        backgroundColor: '#18373C',
       
      }}>
       <span className="primary-text">
            <h5 className='title'>Hi, there </h5>
            </span>
            <h5 className='title'>Welcome to Our </h5>
            <h5 className='title'>test product </h5>
            <br></br>
            <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label style={{
        color: '--white',
       
      }}>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label style={{borderRadius:"60"}}>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <br></br>
                            <Link to='/welcome'>        <Button variant="success btn-block" type="submit" style={{borderRadius:20,color:'white',backgroundColor:'#18373C',marginTop:'20px',marginRight:'1000px',borderInlineColor:'white',borderBlockColor:'white'}}>
                                Login
                            </Button>{' '}</Link>
                        </Form>
         
           
        </Col>
        <Col lg ={7} md={6} sm ={12} >
                  <div className='myStyle'> 
                  
                   </div> </Col>
        </Row>
        </Container>
        </>
  )
}

export default Login