import React from 'react'
import { user } from '../../images'
import { FiPlus } from "react-icons/fi";


const SectionFour = () => {


  const users = [user, user, user, user, user]


  return (
    <section className="sectionFour">
      <div className='content'>
        <p className='uppeprCase'>POPULAR TRAVELLERS
        </p>
        <h2>
          Know the people you're going to meet</h2>
        <p className='text'>
          Have a quick conversation anytime you need with your
          fellow travellers you're going to travel with.</p>

        <div className='users'>
          {
            users.map((u, idx) => <img src={u} key={idx} alt="users" />)
          }
          <button><FiPlus className='icon'/></button>
        </div>

        <p className='text'>
          With one simple click you can know who you can have
          as your travel buddy.</p>
      </div>
      <div className="image">
      </div>
    </section>
  )
}

export default SectionFour