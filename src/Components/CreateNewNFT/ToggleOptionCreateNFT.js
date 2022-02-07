import React from "react";
import {
    ToggleButton,
    ToggleDiv,
    ToggleDivBtn,
    ToggleIcon,
    ToggleTextDiv
} from "../styles/CreateNewNFT/ToggleOptoinCreateNFT";


export default function ToggleOptionCreateNFT(props) {
    return (
        <ToggleDiv>
            <ToggleIcon>{props.svg}</ToggleIcon>
            <ToggleTextDiv>
                <h3>{props.name}</h3>
                <p>{props.desc}</p>
            </ToggleTextDiv>
            <ToggleDivBtn><ToggleButton/></ToggleDivBtn>
        </ToggleDiv>
    )
}