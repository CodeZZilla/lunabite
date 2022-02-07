import React from 'react';
import {Container} from "../../styles/Basic.styled/Header.styled";
import {ButtonFooter, FooterBanner, FooterDiv, InputStyled} from "../../styles/Landing.styled/FooterLanding.styled";


export default function Footer() {
    return (
        <FooterBanner>
            <FooterDiv>
                <h1>
                    Stay in the loop
                </h1>
                <h2>Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips
                    and tricks for navigating Terra blockchain.</h2>
                <Container>
                    <InputStyled type="email" placeholder="Enter your email or phone number"/>
                    <ButtonFooter color="#6F6F6F" background="#FFFFFF">Sign up</ButtonFooter>
                </Container>
                <br/>
            </FooterDiv>
        </FooterBanner>
    )
}
