import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Scss/Carousel.scss";
import axios from "axios";

const Carouse = () => {
  const [carousel, setCarousel] = useState([]);
  console.log(carousel)
  
  const getCarousel = () => {
    const option = {
      method: "GET",
      url: "http://localhost:3001/api/carousel/all",
    };

    axios
      .request(option)
      .then(function (response) {
        setCarousel(response.data.carousels);
      })

      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    getCarousel();
  }, []);

  return (
    <>
      <Carousel>
        {carousel?carousel?.map((items,index ) => (
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={items.image}
            alt="First slide"
          />
          
        </Carousel.Item>

        )):<h1>no data</h1>
        }
        
      </Carousel>
    </>
  );
};

export default Carouse;
