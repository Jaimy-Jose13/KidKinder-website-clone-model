
import React ,{useEffect} from 'react'
import '../components/Dashboard.css'
import { Link ,Outlet,useNavigate } from 'react-router-dom'

export const Dashboard = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
  localStorage.removeItem("isAdmin");
  navigate("/");
  
};
  return (
      <div className="dashboard-container">
      
      {/* Sidebar */}
      <div className="sidebar">
        <h2 className="logo">ADMINISTRATION</h2>

        <ul className="menu">
          <li><Link to="/dashboard/teachers-list" >Teachers list</Link></li>
          <li> <Link to="/dashboard/add-teacher" >Add Teachers</Link></li>
          <li><Link to="/dashboard/classes-list" >List Of Classes</Link></li>
          <li><Link to="/dashboard/add-classes" >Add Classes</Link></li>
          <li><Link to="/dashboard/bookings">List Of Bookings</Link></li>
         {/*  <li>Login</li>
          <li>Register</li> */}
          <li>
  <button 
    onClick={handleLogout} 
    style={{
      background: "none",
      border: "none",
      color: "white",
      cursor: "pointer"
    }}
  >
    LOG OUT
  </button>
</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
          <Outlet />
      </div>

    </div>
  )
}
