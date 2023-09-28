import { useSelector } from "react-redux";
import { NavLink,Outlet } from "react-router-dom"


const ProtectedRoute = () =>{
    const {userInfot} = useSelector((state)=>state.auth)

    // show unauthorized if no user in redux store
    if (!userInfo) {
        return (
            <div className='unauthorized'>
            <h1>Unauthorized :(</h1>
            <span>
              <NavLink to='/login'>Login</NavLink> to gain access
            </span>
          </div>
        )
    }
    return <Outlet/>
}
export default ProtectedRoute