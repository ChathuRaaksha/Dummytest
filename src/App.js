import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Login from './Screens/Login';
import Dummies from './Screens/Dummies';
import Welcome from './Screens/Welcome';
import Add_Users from './Screens/Add_Users';

function App() {
  return (
    <div className="App">
     <Router>
        
       
        <Routes >
     
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/welcome" element={<Welcome/>}/>
        <Route exact path="/add_users/:id" element={<Add_Users/>}/>
        <Route exact path="/dummies" element={<Dummies/>}/>
        </Routes >

        </Router>
    </div>
  );
}
export default App;
