import React from 'react';
import {Banner, ImgTop, ImgSecond, ContainerContent, DivStyled, DivLeft, DivRight} from "../styles/Home.styled";
import {Flex} from "../styles/Flex.styled";
import {Button} from "../styles/Button.styled";


export default function Home() {
    return (
        <Banner>
                <DivRight>
                    <h1>
                        Create, collect, and trade your own NFTs. No coding necessary.
                    </h1>
                    <p>LunaBite is the marketplace to bring your creations to life.</p>
                    <Button>Start Creating</Button>
                    <p>LunaBite is the marketplace to bring your creations to life.</p>
                </DivRight>
                <DivLeft>
                    <ImgSecond src="images/first.png" alt=""/>
                    <ImgTop src="images/first.png" alt=""/>
                </DivLeft>
        </Banner>

    )
}
