import React from 'react';
import {
    ButtonStyled, Container,
    ContainerStyled,
    HeaderStyled,
    NavStyled,
} from "../../styles/Header.styled";
import Logo from "./Logo"
import Search from "./Search";
import NavBar from "./NavBar";

export default function Header() {
    return (
        <NavStyled>
            <Logo/>
            <Search/>
            <NavBar/>
        </NavStyled>
    )
}
