import React from 'react';
import Login from "./components/login/Login"
import './App.css';
import Home from "./components/home/Home"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer} from "react-toastify"


function App() {

  const token = localStorage.getItem('accessToken');

  if (!token) {
    return <Login />
  }

  return (
    <div className="wrapper">
 <ToastContainer />

      <Router>
        <Routes>
          <Route path='/' element={<Login />} />

          <Route path='/home' element={<Home />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
