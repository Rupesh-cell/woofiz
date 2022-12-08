import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";
import "../Scss/footer.scss";
import Carouse from "../Components/Carousel";
import Cards from "../Components/Cards";
import Ad from "../Components/Ad"

const Home = () => {
  return (
    <>
      <Container>
        <Nav />
        <Carouse />
        <Cards/>
        <Ad />
        <Footer />
      </Container>
    </>
  );
};

export default Home;
