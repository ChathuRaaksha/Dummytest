import React from 'react'
import logo from '../img/bg6.jpg'; 
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import '../css/Welcome.css';
function Welcome() {
  return (
    <div style={{
      backgroundColor: '#18363E',
          
    }}>
      <div><img src={logo}alt="Logo" style={{width:'100%'}} /></div>
      <div style={{
        backgroundColor: '#18363E',
        width: '100%',
        height: '419px'
      }}>
        <div className='title'>
        <h1 style={{color:'white',fontSize:'60px',marginRight:'950px',marginTop:'70px'}}>Welcome!</h1>
        <h5 style={{color:'white',fontSize:'20px',marginRight:'430px'}}>This is where your dummy users will Click the button below to add a new dummy.</h5>
        <Link to='/add_users'>   <Button style={{borderRadius:20,color:'white',backgroundColor:'#18373C',marginTop:'20px',marginRight:'1000px',borderInlineColor:'white',borderBlockColor:'white'}}>Add your first dummy</Button></Link>
        </div>
      </div>
    </div>
  )
}

export default Welcome