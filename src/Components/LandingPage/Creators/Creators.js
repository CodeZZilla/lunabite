import React from 'react';
import {
    ContainerCreator,
    CreatorButton,
    CreatorCardDiv,
    CreatorDiv,
    CreatorPartner,
    CreatorTextDiv,
    ImgCreator, ImgCreatorCarousel
} from "../../styles/Landing.styled/Creators.styled";
import CreatorCard from "./CreatorCard";
import OwlCarousel from "react-owl-carousel";
import {Container} from "../../styles/Basic.styled/Header.styled";

export default function Creators() {
    return (
        <CreatorDiv>
            <h1>Top Creators</h1>
            <CreatorCardDiv>
                <CreatorCard img="images/second.png"
                         nickname="@Valentyn"
                         amount="9.2"/>
                <CreatorCard img="images/second.png"
                         nickname="@Dmitriy"
                         amount="1.2"/>
                <CreatorCard img="images/second.png"
                         nickname="@Oksana"
                         amount="0.5"/>
            </CreatorCardDiv>
            <CreatorTextDiv>
                <h1>Create on Lunabite, Sell on Lunabite</h1>
                <p>Anyone can build NFT artwork for free. No coding required. Join a vast community, filled with amazing
                    creations and experiences.</p>
                <CreatorButton color="white" background="#80B1FF">
                    Our Process
                </CreatorButton>

                <CreatorPartner>
                    <OwlCarousel className='owl-theme' dots={false} nav={false} animateIn
                                  autoplay fluidSpeed items={5} loop>
                        <ContainerCreator>
                            <ImgCreatorCarousel src="images/coinbase.png" alt=""/>
                        </ContainerCreator>
                    </OwlCarousel>
                </CreatorPartner>
            </CreatorTextDiv>
        </CreatorDiv>
    )
}