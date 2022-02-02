import React from 'react';
import {ContainerStyled, LiStyled, UlStyled} from "../styles/Header.styled";


export default function NavBar() {
    return (
        <ContainerStyled>
            <UlStyled>
                <LiStyled><a href="#">Create</a></LiStyled>
                <LiStyled><a href="#">Explore</a></LiStyled>
                <LiStyled><a href="#">Charts</a></LiStyled>
                <LiStyled><a href="#">Resources</a></LiStyled>
            </UlStyled>
        </ContainerStyled>
    )
}
