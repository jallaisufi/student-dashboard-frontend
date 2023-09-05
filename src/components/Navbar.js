import React from 'react'
import {useNavigate} from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()

  return (
    <nav style={{ backgroundColor: '#9dd7fb' }} className="navbar navbar-expand-lg navbar-light mb-5 px-5">
      <a className="navbar-brand">UniApply</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"/>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ">
          <li className="nav-item cursor-pointer" onClick={() => navigate('/')}>
            <div className="nav-link">Home</div>
          </li>
          <li className="nav-item cursor-pointer" onClick={() => navigate('/applications')}>
            <div className="nav-link">My Applications</div>
          </li>
          <li className="nav-item cursor-pointer" onClick={() => navigate('/new-application')}>
            <div className="nav-link">New Application</div>
          </li>
          <li className="nav-item cursor-pointer" onClick={() => {
            localStorage.setItem('authToken', null)
            navigate('/login')
          }}>
            <div className="nav-link">Log Out</div>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar