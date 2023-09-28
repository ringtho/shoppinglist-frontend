import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import Login from "./components/user/Login"
import Register from './components/user/Register'

// import UpdatePassword from './components/user/UpdatePassword'
// import ForgotPassword from './components/user/ForgotPassword'
// import NewPassword from './components/user/NewPassword'
// import ProtectedRoute from "./components/route/ProtecteRoute"
function App() {

  const { user, isAuthenticated, loading } = useSelector(state => state.auth)

  return (
    <Router>
    
      <main className="container content">
        <Routes>
          {/* <Route path="/" component={Home} /> */}
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          {/* <Route path="/password/reset/:token" component={NewPassword} exact /> */}
          {/* <ProtectedRoute path="/password/update" component={UpdatePassword} exact /> */}

        </Routes>
      </main>
    </Router>
  );
  
}

export default App;
