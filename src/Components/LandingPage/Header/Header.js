import React from 'react';
import {
    NavStyled,
} from "../../styles/Basic/Header.styled";
import Logo from "./Logo"
import Search from "./Search";
import NavBar from "./NavBar";

export default function Header() {
    return (
        <NavStyled>
            <Logo/>
            <NavBar/>
        </NavStyled>
    )
}
