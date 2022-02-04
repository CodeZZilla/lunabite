import React from 'react';
import {Banner, ImgTop, ImgSecond, DivLeft, DivRight, ButtonTwoStyled, DivFlex} from "../../styles/Home.styled";


export default function Home() {
    return (
        <Banner>
            <DivRight>
                <h1>
                    Create, collect, and trade your own NFTs. No coding necessary.
                </h1>
                <h2>LunaBite is the marketplace to bring your creations to life.</h2>
                <div>
                    <ButtonTwoStyled color="white" background="#A7A7FF">Start Creating</ButtonTwoStyled>
                    <ButtonTwoStyled color="#A7A7FF" background="#FFFFFF">Explore</ButtonTwoStyled>
                </div>
                <DivFlex>
                    <a href="#"><i className="fas fa-caret-down"/></a>
                    <a href="#">Learn more about LunaBite</a>
                </DivFlex>
            </DivRight>
            <DivLeft>
                <ImgSecond src="images/first.png" alt=""/>
                <ImgTop src="images/first.png" alt=""/>
            </DivLeft>
        </Banner>
    )
}
