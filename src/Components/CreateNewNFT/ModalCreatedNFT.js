import React from "react";
import {
    ButtonAsA,
    ModalButton,
    ModalContentDiv,
    ModalDivHead,
    ModalMainDiv
} from "../styles/CreateNewNFT/ModalCreatedNFT.styled";
import {ButtonTwoStyled} from "../styles/Landing/Home.styled";
import {DropzoneComponent} from "react-dropzone-component";
import {FileNFT} from "../styles/CreateNewNFT/CreateNewNFT.styled";


export default function ModalCreatedNFT(props) {
    return (
        <ModalMainDiv id="demo-modal" className="modal">
            <ModalContentDiv className="modal__content">
                <ModalDivHead>
                    <h1>You created {props.name}</h1>
                </ModalDivHead>
                <a href="#close"><i className="fas fa-caret-down"/></a>
                <hr/>
                <ModalDivHead>
                    <h3>This looks amazing! You’ve just created an NFT named {props.name}</h3>
                    <div><img src="" alt="img"/></div>
                    <ModalButton secondBackground="#bcbcff" color="white" background="#A7A7FF">Send
                        To</ModalButton>
                </ModalDivHead>
            </ModalContentDiv>
        </ModalMainDiv>
    )
}