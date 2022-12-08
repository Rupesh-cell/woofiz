import React from "react";
import {Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Scss/Carousel.scss';

const Carouse = () =>{
  return (
    <>
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://scontent.fpnq9-1.fna.fbcdn.net/v/t1.6435-9/186484352_738217190185816_210249930828436604_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=WCP3dxyAzZ8AX_igi1r&_nc_ht=scontent.fpnq9-1.fna&oh=00_AfDVJhTdr-_xhekGAgGYFjjYw806uo_ztcHHuG7yGYbhyw&oe=63B86B4A"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"A
          src="https://scontent.fpnq9-1.fna.fbcdn.net/v/t1.6435-9/186484352_738217190185816_210249930828436604_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=WCP3dxyAzZ8AX_igi1r&_nc_ht=scontent.fpnq9-1.fna&oh=00_AfDVJhTdr-_xhekGAgGYFjjYw806uo_ztcHHuG7yGYbhyw&oe=63B86B4A"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://scontent.fpnq9-1.fna.fbcdn.net/v/t1.6435-9/186484352_738217190185816_210249930828436604_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=WCP3dxyAzZ8AX_igi1r&_nc_ht=scontent.fpnq9-1.fna&oh=00_AfDVJhTdr-_xhekGAgGYFjjYw806uo_ztcHHuG7yGYbhyw&oe=63B86B4A"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  );
}

export default Carouse;