import React from 'react'
import { Container } from '../../layout'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from "react-icons/fi";
const PageNotFound = () => {
    return (
        <Container>
            <div className='page-not-found'>
                <Link to='/'><FiArrowLeft />Go To Home</Link>
            </div>
        </Container>
    )
}

export default PageNotFound