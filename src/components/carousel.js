import React, {useState} from 'react';
import{UncontrolledCarousel} from 'reactstrap';
import Img from '../images/bike1.jpg';
import Img2 from '../images/bike2.jpg';
import Img3 from '../images/bike3.jpg';


const items = [
    {
    src:Img,
    title: "Exploring Baja on a Bike",
    key:1
    },
    {
    src:Img2,
    title: "Exploring Baja on a Bike",
    key:2
    },
    {
    src:Img3,
    title: "Exploring Baja on a Bike",
    key:3
    }
]


const BannerCarousel = () => <UncontrolledCarousel items={items} />;

export default BannerCarousel;