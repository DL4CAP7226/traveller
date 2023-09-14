import React from 'react'
import { footerLinks } from '../../data'
import { FiArrowRight, FiTwitter, FiFacebook, FiInstagram, FiYoutube } from "react-icons/fi";
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';

const links = [
  {
    id: 1,
    pathName: "Reviews",
    path: "/"
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


const socialLinks = [
  {
    link: "#",
    icon: <FiFacebook className='icon' />

  },
  {
    link: "#",
    icon: <FiInstagram className='icon' />

  },
  {
    link: "#",
    icon: <FiTwitter className='icon' />

  },
  {
    link: "#",
    icon: <FiYoutube className='icon' />

  },
]

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='links'>
        {footerLinks.map((fl, idx) =>
          <div key={idx} className='link'>
            <h3>{fl.Heading}</h3>
            <ul >
              {fl.links.map((l, idx) => <li key={idx} >{l.name}</li>)}
            </ul>
          </div>
        )}
        <div className='link'>
          <h3>Subscribe</h3>
          <div className='Subscribe'>
            <input type="email" placeholder='Email Address' />
            <button><FiArrowRight className='icon' /></button>
          </div>
          <div className='ratings'>
            <p>8/10</p>
            <p>Overall rating</p>
            <ReactStars
              count={5}
              size={24}
              value={4}
              activeColor="#ffd700"
              emptyIcon={<i className="far fa-star"></i>}
            />
          </div>

        </div>
      </div>
      <div className='bottemNavigation' >
        <h1>Travellers</h1>
        <ul className='linked'>
          {
            links.map(l => <li key={l.id}><Link to={l.path}> {l.pathName} </Link></li>)
          }
        </ul>
        <div className='functions'>
          {
            socialLinks.map((l, idx) => <a key={idx} href={l.link}>{l.icon}</a>)
          }
        </div>

      </div>
    </footer>
  )
}

export default Footer