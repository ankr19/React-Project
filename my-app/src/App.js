// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, {useState} from "react";
import ErrorPage from './components/ErrorPage';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

// import your route components too

function App() {

  //alert 
  const [alert, setAlert] = useState(null);
  const showAlert = (message,type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout ( () => {
      setAlert(null)
    }, 3000);
  };



  // mode
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if(mode==="light")
    {
      setMode("dark");
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode is enable","success")
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enable","success")
      
    }
  }
  return (
    <>
        
        <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
          <Routes>
            <Route path="/" element={<TextForm showAlert={showAlert} 
                    heading="there is some value" mode={mode}/> } />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<ErrorPage/>} />
          </Routes>
        </Router>
        {/* // <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        // <Alert alert={alert} />
        // <TextForm showAlert={showAlert} heading="there is some value" mode={mode}/>
        // <About /> */}
    </>
  );
}

export default App;
