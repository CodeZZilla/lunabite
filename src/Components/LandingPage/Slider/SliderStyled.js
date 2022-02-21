import React from 'react';
import Card from "./Card";
import {DivSlider} from "../../styles/Basic/Slider.styled";
import OwlCarousel from "react-owl-carousel";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function SliderStyled(props) {

    let cards = []

    for (let item in props.data){
        cards.push(<Card cost={props.data[item].cost + " LUNA created"} name={props.data[item].name}/>);
    }

    return (
        <DivSlider>
            <h1>{props.h}</h1>
            <OwlCarousel className='owl-theme' stagePadding={100} animateOut  items={3} margin={100}>
                {cards}
            </OwlCarousel>
        </DivSlider>
    )
}
