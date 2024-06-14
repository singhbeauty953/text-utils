
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
function App() {
  const [mode, setMode]= useState('light');
  const [alert, setalert]= useState(null);
  const showAlert= (message, type)=>{
      setalert({
        msg: message,
        type: type
      })
      setTimeout(()=>{
        setalert(null);
      },2000);
  }

  // const redmode= ( )=>{
  //   if(mode === 'light'){
  //      setMode ('#9b353c')
  //      document.body.style.backgroundColor= '#9b353c';
  //      showAlert('Dark Mode has been Enabled',"success")
  //   }
  //   else{
  //     setMode ('light')
  //     document.body.style.backgroundColor= 'white';
  //     showAlert('light Mode has been Enabled',"success")
  //   }
  // }
  
  const togglemode= ( )=>{
    if(mode === 'light'){
       setMode ('dark')
       document.body.style.backgroundColor= '#042743';
       showAlert('Dark Mode has been Enabled',"success")
       document.title = "Textutils - Dark mode"
    }
    else{
      setMode ('light')
      document.body.style.backgroundColor= 'white';
      showAlert('light Mode has been Enabled',"success")
      document.title = "Textutils - Light Mode"
    }
  }
  return (
    <>
    <Router>
   <Navbar title="Farm2Frok" aboutText="AboutUs" home="Home" mode={mode} togglemode={togglemode}/>
   <Alert alert={alert}/>
   {/* <Navbar/> */}
   <div className="container my-3">
   <Routes>
          <Route path="/AboutUs" element = {<About/>}>
           
          </Route>
          <Route path="/" element= { <Form showAlert={showAlert} heading = "Enter The Text to Analyze" mode={mode}/>}>
           
          </Route>
      </Routes>
   </div>
   </Router>
   
    </>
  );
}

export default App;
