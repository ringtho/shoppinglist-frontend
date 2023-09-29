import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import Login from './components/user/Login'
import Register from './components/user/Register'
import Home from './components/Home/Home'
function App() {

  const { user, isAuthenticated, loading } = useSelector(state => state.auth)

  return (
    <Router>
    
      <main className="container content">
        <Routes>         
          <Route path="/" element={<Login/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </main>
    </Router>
  );
  
}

export default App;
