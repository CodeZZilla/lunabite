import React from "react";
import {
    OptionButton,
    OptionDiv,
    OptionDivBtn,
    OptionIcon,
    OptionTextDiv
} from "../styles/CreateNewNFT/AddOptionCreateNFT.styled";

export default function AddOptionCreateNFT(props) {
    return (
        <>
            <OptionDiv>
                <OptionIcon>{props.svg}</OptionIcon>
                <OptionTextDiv>
                    <h3>{props.name}</h3>
                    <p>{props.desc}</p>
                </OptionTextDiv>
                <OptionDivBtn>{props.child}</OptionDivBtn>
            </OptionDiv>
        </>
    )
}