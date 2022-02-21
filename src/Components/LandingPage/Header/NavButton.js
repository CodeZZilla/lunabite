import React, {useState} from "react";
import {ButtonStyled} from "../../styles/Basic/Header.styled";

export default function NavButton(props) {
    const [open, setOpen] = useState(false);

    return (
        <ButtonStyled onClick={() => setOpen(!open)}>
            {props.iconSvg}
            {open && props.children}
        </ButtonStyled>
    );
}