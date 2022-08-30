import React,{useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import {Form} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../css/Login.css';
import Bg from '../img/bg.JPG';
import Aos from 'aos';
import 'aos/dist/aos.css';
function Login() {
  useEffect(()=>{
    Aos.init({duration:2000});
  })

  return (
    <div className='login'>
      <div className='rightSide' style={{
        backgroundColor: '#18373C',
       
      }}>
      <h1 data-aos="fade-right">login Us</h1>
      <span className="primary-text">
            <h2 className='title' data-aos="fade-right">Hi, there </h2>
            </span>
            <h5 className='title' data-aos="fade-right">Welcome to Our </h5>
            <h5 className='title' data-aos="fade-right">test product </h5>
       
        <Form id='login-form' method='POST' data-aos="fade-left">
                            <Form.Group controlId="formBasicEmail">
                               
                                <Form.Control style={{borderRadius:'90px',width:'70%'}}  type="email" placeholder="e-mail" />
                            </Form.Group>
      <br></br>
                            <Form.Group controlId="formBasicPassword">
                              
                                <Form.Control style={{borderRadius:'90px',width:'70%'}} type="password" placeholder="Password" />
                            </Form.Group>
                            <br></br>
                            <Link to='/welcome'>        <Button variant="success btn-block" type="submit" style={{borderRadius:20,color:'white',backgroundColor:'#18373C',marginTop:'20px',marginLeft:'-450px',borderInlineColor:'white',borderBlockColor:'white'}}>
                                Login
                            </Button>{' '}</Link>
                        </Form>
      </div>
      <div className='leftSide' style={{backgroundImage:`url(${Bg})`}}></div>
      
    </div>
  )
}

export default Login