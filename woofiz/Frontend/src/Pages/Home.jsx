import React,{useState,useEffect} from "react";
import { Container } from "react-bootstrap";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";
import "../Scss/footer.scss";
import Carouse from "../Components/Carousel";
import Cards from "../Components/Cards";
import Ad from "../Components/Ad";
import { getUser } from "../auth/Auth";
import Login from "../Components/Login";

const Home = () => {
const [user,setUser] = useState(null);
useEffect(() => { getUser().then((user) =>{
  setUser(user);
})
console.log(user);
 
}, [])

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
