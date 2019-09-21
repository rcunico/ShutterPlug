import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = props => {
  return (
    <div>
      <div className="img-responsive">
        <img src={require('../../assets/shutter_plug_logo.png')} alt="Shutter Plug Logo"/>
      </div>
      <nav className="navbar sticky-top navbar-expand-sm mb-3 py-0">
        <div className="container-fluid">
          <h1 className="text-white">Shutter Plug</h1>
          <div>
            <ul className="navbar-nav mr-auto">
              <li>
                <Link to="/" className="nav-link">
                  <button className="btn btn-secondary btn-lg">Home</button>
                </Link>
              </li>
              <li>
                <Link to="/Search" className="nav-link">
                  <button className="btn btn-secondary btn-lg">Search</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

Header.propTypes = {

}

export default Header
