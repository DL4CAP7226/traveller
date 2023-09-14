import React from 'react'
import { Container } from '../../layout'
import { SectionOne, SectionTwo, SectionThree, SectionFour,SectionFive } from '../../pagesComponents'

const Home = () => {
  return (
    <>
      <Container>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive/>
      </Container>
    </>

  )
}

export default Home