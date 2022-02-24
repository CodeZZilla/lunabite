import React from "react"
import {
    CollectionButton,
    CollectionCardDiv,
    CollectionContentDiv, CollectionCreatedBy,
    CollectionImgDiv
} from "../styles/CollectionCard.styled/CollectionCard.styled";
import {Link} from "react-router-dom";


export default function CollectionCard(props) {

    return (
        <CollectionCardDiv>
            <Link to="/create-new-nft">
                <CollectionImgDiv>
                    <img
                        src="https://lh3.googleusercontent.com/OftH01Cl9hf_bPZ5z26y17ICIvKE7f0AOsguQKRqXfrswp9q_vdo1I7BFlML2loGTxKNtamy3n079lhfk0eEESZ1pm8uLd0Me1ZyzA=h200"
                        alt=""/>
                </CollectionImgDiv>
                <CollectionContentDiv>
                    <Link to='/profile'>Hello world</Link>
                    <CollectionCreatedBy>
                        <p>by <Link to='/profile'>{props.owner === undefined ? 'you' : props.owner}</Link></p>
                    </CollectionCreatedBy>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, maiores.</span>
                    <CollectionButton>
                        <button>Luna Bite</button>
                    </CollectionButton>
                </CollectionContentDiv>
            </Link>

        </CollectionCardDiv>
    );
}
