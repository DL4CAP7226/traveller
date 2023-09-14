import React from 'react'
import { Link } from 'react-router-dom'

const links = [
  {
    id: 1,
    pathName: "Reviews",
    path: "/"
  },
  {
    id: 2,
    pathName: "People",
    path: "/"
  },
  {
    id: 3,
    pathName: "Partners",
    path: "/"
  },
  {
    id: 4,
    pathName: "Feedbacks",
    path: "/"
  },

]


const Navbar = () => {
  return (
    <header className='navbar'>
      <div className='nav-content'>
      <h1>Travelers</h1>
      <div className='links'>
        <ul>
          {
            links.map(l => <li key={l.id}><Link to={l.path}> {l.pathName} </Link></li>)
          }
        </ul>
        <button className='get-price'>Get the App</button>
      </div>
      </div>
    
    </header>
  )
}

export default Navbar