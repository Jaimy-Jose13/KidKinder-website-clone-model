import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/teddy-bear.png'
import '../components/Header.css'
import { NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div>
         <div className="container-fluid bg-light position-relative shadow">
          <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0 px-lg-5">
            <a href className="navbar-brand font-weight-bold text-secondary" style={{fontSize: '50px'}}>
              {/* <i className="flaticon-043-teddy-bear" /> */}
              <img src={logo} alt="Company Logo" className='image' />
              <span className="text-primary">KidKinder</span>
            </a>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
              <div className="navbar-nav font-weight-bold mx-auto py-0">
               
             <NavLink
  to="/"
  className={({ isActive }) =>
    isActive ? "nav-item nav-link active-link" : "nav-item nav-link"
  }
>
  Home
</NavLink>
           <NavLink
  to="/about"
  className={({ isActive }) =>
    isActive ? "nav-item nav-link active-link" : "nav-item nav-link"
  }
>
  About
</NavLink>

<NavLink
  to="/classes"
  className={({ isActive }) =>
    isActive ? "nav-item nav-link active-link" : "nav-item nav-link"
  }
>
  Classes
</NavLink>

<NavLink
  to="/teachers"
  className={({ isActive }) =>
    isActive ? "nav-item nav-link active-link" : "nav-item nav-link"
  }
>
  Teachers
</NavLink>

<NavLink
  to="/gallery"
  className={({ isActive }) =>
    isActive ? "nav-item nav-link active-link" : "nav-item nav-link"
  }
>
  Gallery
</NavLink>
                
                <NavDropdown title="Pages" id="basic-nav-dropdown">
  <NavDropdown.Item as={NavLink} to="/blog-grid">
    Blog Grid
  </NavDropdown.Item>

  <NavDropdown.Item as={NavLink} to="/blog-detail">
    Blog Detail
  </NavDropdown.Item>
</NavDropdown>
    
                <NavLink
  to="/contact"
  className={({ isActive }) =>
    isActive ? "nav-item nav-link active-link" : "nav-item nav-link"
  }
>
  Contact
</NavLink>
              </div>
              <Link to="/login" className="btn btn-primary px-4">LOGIN</Link>
              
            </div>
          </nav>
        </div>
    </div>
  )
}
