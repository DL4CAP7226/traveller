import React from 'react'
import { Link } from 'react-router-dom';

const Events = ({ btnName, icon,redirectPath,description }) => {
    return (
        <div className='functions'>
            <Link to={redirectPath}>
                    {icon}
            </Link>
            <div>
                <h3>{btnName}</h3>
                <p>{description} </p>
            </div>
        </div>
    )
}

export default Events