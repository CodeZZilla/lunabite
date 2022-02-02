import React from 'react';
import {ContainerStyled, SearchStyled} from "../styles/Header.styled";


export default function Search() {
    return (
        <ContainerStyled>
            <SearchStyled type="text" placeholder="Search NFTs, users, or collections"/>
        </ContainerStyled>

    )
}
