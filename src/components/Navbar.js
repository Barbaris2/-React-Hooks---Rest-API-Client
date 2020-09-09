import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => (
  <nav className='navbar navbar-dark bg-primary navbar-expand-lg'>
    <div className='navbar-brand'>
      <a className='navbar-brand' href='/'>
        Rest API Client
      </a>
    </div>
    <button
      className='navbar-toggler'
      type='button'
      data-toggle='collapse'
      data-target='#navbarNavAltMarkup'
      aria-controls='navbarNavAltMarkup'
      aria-expanded='false'
      aria-label='Toggle navigation'
    >
      <span className='navbar-toggler-icon'></span>
    </button>
    <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
      <ul className='navbar-nav'>
        <li className='nav-item'>
          <NavLink exact to='/' className='nav-link'>
            MAIN
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to='/history' className='nav-link'>
            HISTORY
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to='/about' className='nav-link'>
            ABOUT
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);
