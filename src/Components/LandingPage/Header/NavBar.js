import React from 'react';
import {Container, ContainerStyled, LiStyled, UlStyled} from "../../styles/Header.styled";


export default function NavBar() {
    return (
        <Container>
            <UlStyled>
                <LiStyled><a href="#">Create</a></LiStyled>
                <LiStyled><a href="#">Explore</a></LiStyled>
                <LiStyled><a href="#">Charts</a></LiStyled>
                <LiStyled><a href="#">Resources</a></LiStyled>
            </UlStyled>
        </Container>
    )
}
