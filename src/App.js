import React from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginSignup from "../components/LoginSignup";
import ProtectedRoute from "./routes/ProtecteRoute";
function App() {
  return (
    <Router>
      <Header />
      <main className="container content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path = "/login" element={<LoginSignup/>} />
          <Route element={ <ProtectedRoute/>}/>         
        </Routes>
      </main>
    </Router>
  );
  
}

export default App;
