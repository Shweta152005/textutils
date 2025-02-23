
import './App.css'; 
import Alert from './components/Alert'; 
/*import About from './components/About'; */
import Navbar from './components/Navbar'; 
import TextForm from './components/TextForm'; 
import React, { useState } from 'react'; 
/*import { BrowserRouter as Router, Routes, Route } from "react-router-dom";*/

function App() { 
  const [mode, setMode] = useState('light'); 
  const [alert, setAlert] = useState(null);      

  const showAlert = (message, type) => {     
    setAlert({       
      msg: message,       
      type: type     
    });     
    setTimeout(() => {       
      setAlert(null);   
    }, 1500);   
  };    

  const toggleMode = () => {     
    if (mode === 'light') {       
      setMode('dark');       
      document.body.style.background = '#070e3f';       
      showAlert("Dark mode is activated", "success");       
      document.title = "TextUtils - Dark Mode";     
    } else {       
      setMode('light');       
      document.body.style.background = 'white';       
      showAlert("Light mode is activated", "success");       
      document.title = "TextUtils - Light Mode";     
    }   
  }; 

  return (     
    <>     
         
        <Navbar title="textUtils" mode={mode} toggleMode={toggleMode}/>      
        <Alert alert={alert}/>      
        <div className="container my-3" >      
          {/*<Routes>           
            <Route exact path="/about" element={<About />} />
            <Route exact path="/home" element={<TextForm showAlert={showAlert} heading="Enter text to analyze below" mode={mode} />} />         
          </Routes>*/}  
          <TextForm showAlert={showAlert} heading="Enter text to analyze below" mode={mode} />       
        </div>         
                           
    </>   
  ); 
} 

export default App;
