import React from 'react'
import '../stylesheets/navbar.css'

const Navbar = () => {
  return (
    <div className="topnav">
      <a href="/follower">Follower</a>
      <a className="active" href="/">Stories</a>
    </div>
  )
}
export default Navbar
