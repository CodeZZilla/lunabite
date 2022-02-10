import React from 'react';
import Home from "./Home/Home";
import SliderStyled from "./Slider/SliderStyled";
import Header from "./Header/Header";
import HowItWorks from "./HowItWorks/HowItWorks";
import {Main} from "../styles/Landing/Landing.styled";
import Creators from "./Creators/Creators";
import Footer from "./Footer/Footer";



export default function Landing() {

    let sliderData = {
        h:"Top LUNA Collections this Week",
        data:[
            {
                cost:"0,1",
                name:"Valentyn"
            },
            {
                cost:"1,1",
                name:"Oksana"
            },
            {
                cost:"0,1",
                name:"Dmitriy"
            }
        ]}

    return (
        <Main>
            <Home/>
            <SliderStyled {...sliderData}/>
            <HowItWorks/>
            <Creators/>
            <Footer/>
        </Main>
    )
}