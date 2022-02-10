import React from 'react';
import {Container, ContainerStyled, SearchStyled} from "../../styles/Basic/Header.styled";


export default function Search() {
    return (
        <Container>
            <SearchStyled type="text" placeholder="Search NFTs, users, or collections"/>
        </Container>
    )
}
