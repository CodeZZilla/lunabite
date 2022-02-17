import React from 'react';
import {Banner, ImgTop, ImgSecond, DivLeft, DivRight, ButtonTwoStyled} from "../../styles/Landing/Home.styled";
import {Container} from "../../styles/Basic/Header.styled";
import ModalSuccess from "../Header/ModalSuccess";
import {useWallet, WalletStatus} from "@terra-money/wallet-provider";


export default function Home() {
    const {
        status,
        availableConnectTypes,
        availableInstallTypes,
        connect,
        install,
        disconnect,
    } = useWallet()

    return (
        <Banner>
            <DivRight>
                <h1>
                    Create, collect, and trade your own NFTs. No coding necessary.
                </h1>
                <h2>LunaBite is the marketplace to bring your creations to life.</h2>
                <Container>
                    <ButtonTwoStyled secondBackground="#bcbcff" color="white" secondColor="black" background="#A7A7FF">Start Creating</ButtonTwoStyled>
                    <ButtonTwoStyled secondBackground="#bcbcff" color="#A7A7FF" secondColor="black" background="#FFFFFF">Explore</ButtonTwoStyled>
                </Container>
                <Container>
                    <a href="#"><i className="fas fa-caret-down"/></a>
                    <a href="#">Learn more about LunaBite</a>
                </Container>
            </DivRight>
            <DivLeft>
                <ImgTop src="images/first.png" alt=""/>
                <ImgSecond src="images/first.png" alt=""/>
            </DivLeft>
            {
                status === WalletStatus.WALLET_CONNECTED ?
                    <ModalSuccess/> : null
            }

        </Banner>
    )
}
