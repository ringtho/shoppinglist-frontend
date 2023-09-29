import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import Login from './components/user/Login'
import Register from './components/user/Register'
import Home from './components/Home/Home'
import React from "react";
// import ReactDOM from "react-dom/client";
function App() {
  return (
    <Router>
    
      <main className="container content">
        <Routes> 
         <Route path="/" element={<Home/>} />        
          <Route path="/login" element={<Login/>} />          
          <Route path="/register" element={<Register/>} />
        </Routes>
      </main>
    </Router>
  );
  
}

export default App;
