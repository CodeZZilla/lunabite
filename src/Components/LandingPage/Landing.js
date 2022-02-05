import React from 'react';
import Home from "./Home/Home";
import SliderStyled from "./Slider/SliderStyled";
import Header from "./Header/Header";
import HowItWorks from "./HowItWorks/HowItWorks";
import {Main} from "../styles/Landing.styled";
import Creators from "./Creators/Creators";


export default function Landing() {
    return (
        <Main>
            <Header/>
            <Home/>
            <SliderStyled/>
            <HowItWorks/>
            <Creators/>
        </Main>
    )
}