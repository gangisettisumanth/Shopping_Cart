import React from 'react'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';


import image1 from "../assets/team1.jpg"
import image2 from "../assets/team2.jpg"
import image3 from "../assets/team3.jpg"

const Carousels = () => {
        const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img alt="First slide" src={image1}/>
                <Carousel.Caption>
                {/* <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img alt="Second slide" src={image2}/>
                <Carousel.Caption>
                {/* <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img alt="Third slide" src={image3}/>
                <Carousel.Caption>
                {/* <h3>Third slide label</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p> */}
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
    }

export default Carousels 
