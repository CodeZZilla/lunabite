import React from 'react';
import Card from "./Card";
import {DivSlider} from "../../styles/Slider.styled";
import OwlCarousel from "react-owl-carousel";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function SliderStyled() {
    return (
        <DivSlider>
            <h1>Top LUNA Collections this Week</h1>
            <OwlCarousel className='owl-theme' dots={false} nav={false} stagePadding={50} animateIn={true}
                         autoplay autoplaySpeed={false} items={4} loop>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>

            </OwlCarousel>
        </DivSlider>
    )
}
