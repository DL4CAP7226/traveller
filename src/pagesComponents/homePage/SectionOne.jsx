import React from 'react'
import { appStoreimg } from '../../images'
const SectionOne = () => {
  return (
    <section className='sectionOne'>
      <div className='shape'>
        <div className="content">
          <h2>Don't listen to what they say, Go see</h2>
          <p>
            Your ultimate travel companion. Carries all the information
            you need while travelling.
          </p>
          <img src={appStoreimg} className='appstore' alt='appstore' />
        </div>
      </div>
      <div className='image'>
      </div>
    </section >

  )
}

export default SectionOne