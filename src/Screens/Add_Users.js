import React,{useState,useEffect} from 'react'
import logo from '../img/bg6.jpg'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import {Form} from 'react-bootstrap';
import {Link, useHistory,useNavigate } from 'react-router-dom';
import Axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
function Add_Users() {
  const navigate = useNavigate();
  const  [fullname,setFullname]=useState('');
  const  [email,setEmail]=useState('');
  const  [phone_no,setPhone_no]=useState('');
  const  [profile_pic,setProfile_pic]=useState('');
  const  [MoviewReviewList,setMovieReviewList]=useState([]);
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");
 
  const saveFile = (e) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
      };
 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(()=>{
    Axios.get('http://localhost:3001/api/get').then((response)=>{
      setMovieReviewList(response.data);
    })
  },[]
  
  )


  const submitDummies=()=>{
    Axios.post('http://localhost:3001/api/insert', {fullname:fullname,email:email,phone_no:phone_no,profile_pic:fileName,fileName:fileName,file:file});
    setShow(true);
    setTimeout(() => {  navigate('/dummies'); }, 2000);
    
   // navigate('/dummies');
   // history.push('/dummies');
   
    //  setMovieReviewList([...MoviewReviewList,{fullname:fullname,email:email,phone_no:phone_no,profile_pic:profile_pic},]);
  }


 






  const [img, setImg] = useState();
  const onImageChange = (e) => {
    const [file] = e.target.files;
    setImg(URL.createObjectURL(file));
  };
  return (
    <div style={{
      backgroundColor: '#18363E',
          
    }}>
      <div><img src={logo} alt="Logo" style={{width:'100%'}} /></div>
      <div style={{
        backgroundColor: '#18363E',
        width: '100%',
        height: '700px'
      }}>
        <div className='title'>
        <h1 style={{color:'white',fontSize:'45px',marginRight:'950px',marginTop:'20px'}}>New Dummy</h1>
                           <Form id='login-form' method='POST' style={{marginBottom:'900px'}}>
                            <Form.Group controlId="formBasicEmail" style={{marginTop:'-50px'}}>
                               <Form.Label style={{marginLeft:'-300px',marginRight:'800px',color:'#fff'}}>full name</Form.Label>
                                <Form.Control style={{borderRadius:'90px',width:'70%',marginLeft:'60px',}}  type="text"  name='fullname' onChange={(e)=>{
            setFullname(e.target.value) }}   required />
                            </Form.Group>
      
                            <Form.Group controlId="formBasicEmail">
                               <Form.Label style={{marginLeft:'-300px',marginRight:'825px',color:'#fff'}}>email</Form.Label>
                                <Form.Control style={{borderRadius:'90px',width:'70%',marginLeft:'60px'}}  type="e-mail" name='email' onChange={(e)=>{
            setEmail(e.target.value) }} required />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                               <Form.Label style={{marginLeft:'-300px',marginRight:'760px',color:'#fff'}}>phone number</Form.Label>
                                <Form.Control style={{borderRadius:'90px',width:'70%',marginLeft:'60px'}}  type="number"  name='phone_no' onChange={(e)=>{
            setPhone_no(e.target.value) }}required />
                            </Form.Group>

                            
                            <Form.Group controlId="formBasicEmail">
                             
                               <Form.Label style={{marginLeft:'-300px',marginRight:'760px',color:'#fff'}}>profile picture</Form.Label>
                                <Form.Control style={{borderRadius:'30px',width:'30%',marginLeft:'60px',height:'100px'}}  type="file" onChange={saveFile} />
                                <img src={img} alt=""style={{marginLeft:'-300px',marginRight:'760px',width:'10%',height:'10%'}} />
                            </Form.Group>
                          
                       
     
                           
       <Button onClick={()=>{submitDummies()} } style={{borderRadius:20,color:'white',backgroundColor:'#18373C',marginTop:'20px',marginRight:'980px',borderInlineColor:'white',borderBlockColor:'white',width:'15%'}}>Add your first dummy</Button>
   
      
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Your Dummy Has Successfully Saved</Modal.Title>
        </Modal.Header>
        <Button onClick={handleClose} style={{color:'white',backgroundColor:'#18373C',width:'20%',height:'40px' ,alignItems:'center',marginLeft:'190px',borderRadius:'30px'}}>
            Okay
          </Button>
        <Modal.Footer>
          
         
        </Modal.Footer>
      </Modal>
                        </Form>
        </div>
      </div>
    </div>
  )
}

export default Add_Users