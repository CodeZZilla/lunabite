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
            <OwlCarousel className='owl-theme' dots={false} nav={false} stagePadding={100} animateIn={true}
                          autoplaySpeed={false} autoplay items={4} loop >
                <Card cost="0,1 LUNA created" name="Butterball"/>
                <Card cost="1 LUNA created" name="Valentyn"/>
                <Card cost="0,585 LUNA created" name="Dmitriy"/>
                <Card cost="0,1 LUNA created" name="Butterball"/>
            </OwlCarousel>
        </DivSlider>
    )
}
