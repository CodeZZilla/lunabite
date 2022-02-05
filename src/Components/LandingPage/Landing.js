import React from 'react';
import Home from "./Home/Home";
import SliderStyled from "./Slider/SliderStyled";
import Header from "./Header/Header";
import HowItWorks from "./HowItWorks/HowItWorks";
import {Main} from "../styles/Landing.styled";
import Creators from "./Creators/Creators";
import Footer from "./Footer/Footer";


export default function Landing() {
    return (
        <Main>
            <Home/>
            <SliderStyled/>
            <HowItWorks/>
            <Creators/>
            <Footer/>
        </Main>
    )
}