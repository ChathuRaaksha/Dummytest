import   React from 'react'
import logo from '../img/bg6.jpg'; 
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import MaterialTable from 'material-table'
import { forwardRef } from 'react';
import {useEffect} from 'react'
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog';
import  DialogContent  from '@material-ui/core/DialogContent';
import { RowingSharp } from '@material-ui/icons';
import Avatar from '@material-ui/core/avatar'
const tableIcons = {
  
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};



function Dummies() {

  const { useState } = React;
  const [newfullname,setNewfullname]=useState([0]);
  const [newemail,setNewemail]=useState([0]);
  const [newphone,setNewphone]=useState([0]);
  const [data, setData] = useState([]);
  const [iserror, setIserror] = useState(false)
  const [errorMessages, setErrorMessages] = useState([])
  useEffect(()=>{
    Axios.get('http://localhost:3001/api/get').then((response)=>{
      setData(response.data);
    })
  },[]
  
  )

  const handleRowUpdate2=(newData, oldData, resolve)=>{
    let errorList = []
    if(newData.fullname === ""){
      errorList.push("Please enter full name")
    }
    if(newData.email === ""){
      errorList.push("Please enter email name")
    }
    if(newData.phoneno === "" ){
      errorList.push("Please enter a valid email")
    }
    if(errorList.length < 1){
    Axios.put('http://localhost:3001/api/update',newData.id, newData)
    .then(res => {
      const dataUpdate = [...data];
      const index = oldData.tableData.id;
      dataUpdate[index] = newData;
      setData([...dataUpdate]);
      resolve()
      setIserror(false)
      setErrorMessages([])
      
    })
    .catch(error => {
      setErrorMessages(["Update failed! Server error"])
      setIserror(true)
      resolve()})
    }
  }

  
  const handleRowUpdate=(id)=>{
  
    Axios.put('http://localhost:3001/api/update',{fullname:newfullname,email:newemail,phoneno:newphone,id:id })
    .then(response => {
     
      setData(data.map((val)=>{
        return (val.id==id?{id:val.id,fullname:val.fullname,email:val.email,phoneno:newphone}:val);
      }));

    })
   
  }


  const handleRowDelete = (id) => {
    
    Axios.delete(`http://localhost:3001/api/delete/${id}`);
    
  }






  const [columns, setColumns] = useState([
    { title: '', render: rowData => <Avatar
    alt=""
    src='http://127.0.0.1:3000/images/profile_pic.jpg'
    field='profile_pic'
    sx={{ width: 56, height: 56 }}
  />  },
    { title: 'DummyName', field: 'fullname' },
    { title: 'e-mail', field: 'email', initialEditValue: 'initial edit value' },
    { title: 'phone number', field: 'phone_no', type: 'numeric' },
   
  ]);
  

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
        <h1 style={{color:'white',fontSize:'45px',marginRight:'1040px',marginTop:'20px'}}>Dummy</h1>
        <Link to='/add_users'>   <Button style={{borderRadius:20,color:'white',backgroundColor:'#18373C',marginTop:'20px',marginBottom:'20px',marginRight:'-100px',marginLeft:'700px',borderInlineColor:'white',borderBlockColor:'white'}}>Add New dummy</Button></Link>
        <MaterialTable 
        style={{
          alignContent:'center',
          alignItems:'center',
          justifyContent:'center',
          justifyItems:'center',
          width: '75%',
          height: '10%',
          marginLeft:'150px',
          borderRadius:'35px',
          color:'#18363E',
          padding:'20px'
        }}
      title="Dummy Table"
      columns={columns}
      data={data}
      
      
      editable={{
        onRowAdd: newData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              setData([...data, newData]);
              
              resolve();
            }, 1000)
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataUpdate = [...data];
              const index = oldData.tableData.id;
              dataUpdate[index] = newData;
              setData([...dataUpdate]);
              handleRowUpdate(newData, oldData, resolve);
              resolve();
            }, 1000)
          }),
        onRowDelete: oldData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataDelete = [...data];
              const index = oldData.tableData.id;
              dataDelete.splice(index, 1);
              setData([...dataDelete]);
              handleRowDelete(oldData.tableData.id);
              resolve()
            }, 1000)
          }),
      }}
      options={{
        sorting: true,search:true,actionsColumnIndex:-1,addRowPosition:"first",
      }}
    />
        </div>
       
      </div>
    </div>
  )
}

export default Dummies