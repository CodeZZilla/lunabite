import React from 'react';
import {BannerRevert, ButtonBannerRevert, DivText, MainBanner} from "../../styles/Landing/HowItWorks.styled";
import BigCard from "./BigCard";


export default function HowItWorks() {
    return (
        <MainBanner>
            <DivText>
                <h1>Create on Lunabite, Sell on Lunabite</h1>
                <p>Anyone can build NFT artwork for free. No coding required. Join a vast community, filled with amazing
                    creations and experiences.</p>
                <ButtonBannerRevert color="white" background="#A7A7FF">
                    Our Process
                </ButtonBannerRevert>
            </DivText>
            <BannerRevert>
                <BigCard textH1="Create for Free"
                         p1="Connect your wallet of choice to create your account.
                         LunaBite is a marketplace for everything made on the Terra (LUNA, UST) blockchain."
                         p2="Upload any image to automatically create your NFTs."/>
                <BigCard textH1="Build and Share"
                         p1="Share your creations in the gallery with your friends, fans, and other enthusiasts."
                         p2="LunaBite is here to handle everything else."/>
                <BigCard textH1="Leave it to Luna"
                         p1="No code or 3rd party vendors for you to coordinate. LunaBite takes care of it all through
                         our platform."
                         p2="You choose how you want to sell your NFTs, and we help you sell them. "/>
            </BannerRevert>
        </MainBanner>
    )
}