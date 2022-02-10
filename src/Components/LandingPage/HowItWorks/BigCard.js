import React from 'react';
import {BigCardStyled} from "../../styles/Landing/HowItWorks.styled";


export default function BigCard(props) {
    return (
        <BigCardStyled>
            <div><h1>{props.textH1}</h1></div>
            <div><p>{props.p1}</p></div>
            <div><p>{props.p2}</p></div>
        </BigCardStyled>
    )
}
