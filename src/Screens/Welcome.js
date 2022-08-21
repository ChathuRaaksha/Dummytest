import React from 'react'
import logo from '../img/bg6.jpg'; 
import Button from 'react-bootstrap/Button';
import '../css/Welcome.css';
function Welcome() {
  return (
    <div>
      <div><img src={logo} style={{width:'100%'}} /></div>
      <div style={{
        backgroundColor: '#18363E',
        width: '100%',
        height: '511px'
      }}>
        <div className='title'>
        <h1 style={{color:'white',fontSize:'90px',marginRight:'800px'}}>Welcome!</h1>
        <h5 style={{color:'white',fontSize:'30px',marginRight:'60px'}}>This is where your dummy users will Click the button below to add a new dummy.</h5>
       <Button style={{borderRadius:20,color:'white',backgroundColor:'#18373C',marginTop:'20px',marginRight:'1000px',borderInlineColor:'white',borderBlockColor:'white'}}>Add your first dummy</Button>
        </div>
      </div>
    </div>
  )
}

export default Welcome