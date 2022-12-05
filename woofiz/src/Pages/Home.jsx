import React from 'react'
import { Container} from 'react-bootstrap'
import Footer from "../Components/Footer";
import Nav from "../Components/Nav"
import "../Scss/footer.scss";

const Home = () => {
  return (
    <>
    <Container >
      <Nav/>
    <Footer/>
    </Container>

    </>
  )
}

export default Home