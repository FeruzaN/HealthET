import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div>
        <nav>
            <Link to="/">HomePage</Link>
            <Link to="/about"> AboutUs</Link>
            <Link to="/contact"> ContactUS</Link>
            <Link to="/doctor"> Doctor</Link>
            <Link to="/user"> User</Link>
        </nav>
    </div>
  )
}

export default Nav