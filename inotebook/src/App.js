import "./App.css";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import UserState from "./auth/UserState";
import NoteState from "./auth/NoteState";
import { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(()=>{
      setAlert(null);
    }, 3000)
  }
  return (
    <>
      <UserState showAlert={showAlert}>
        <NoteState showAlert={showAlert}>
          <Navbar />
          <Alert alert={alert} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </NoteState>
      </UserState>
    </>
  );
}

export default App;
