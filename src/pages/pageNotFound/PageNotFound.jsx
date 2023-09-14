import React from 'react'
import { Container } from '../../layout'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
    return (
        <Container>
            <div className='page-not-found'>
                <Link to='/'>Go To Home</Link>
            </div>
        </Container>
    )
}

export default PageNotFound