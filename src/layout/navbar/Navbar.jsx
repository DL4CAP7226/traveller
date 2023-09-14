import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  {
    id: 1,
    pathName: "Home",
    path: "/"
  },
  {
    id: 1,
    pathName: "Reviews",
    path: "/Reviews"
  },
  {
    id: 2,
    pathName: "People",
    path: "/People"
  },
  {
    id: 3,
    pathName: "Partners",
    path: "/Partners"
  },
  {
    id: 4,
    pathName: "Feedbacks",
    path: "/Feedbacks"
  },

]


const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <header className={toggle ? ' navbar navbarBg' : "navbar"}>
      <h2 className='logo' >Travellers</h2>
      <div className='toggle' onClick={() => setToggle(!toggle)} >
        <div className='toggleBox'>
          <div className={toggle ? 'one four' : "one"}></div>
          <div className={toggle ? "one five" : 'one'}></div>
          <div className={toggle ? "one six" : 'one'}></div>
        </div>
      </div>
      <ul className={toggle ? "navLink " : "navLink hide"}  >
        {
          links.map((l, idx) => <li key={idx} onClick={() => setToggle(!toggle)}><NavLink className={({ isActive }) => isActive ? "activeClass" : ""}
            to={l.path}>{l.Icon}&nbsp;&nbsp;{l.pathName}</NavLink></li>)
        }
      </ul>
    </header>
  )
}

export default Navbar