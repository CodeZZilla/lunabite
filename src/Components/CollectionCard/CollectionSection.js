import React from "react"
import {CollectionDiv, CollectionLi, CollectionUl} from "../styles/CollectionCard.styled/CollectionSection.styled";
import Card from "../LandingPage/Slider/Card";
import CollectionCard from "./CollectionCard";


export default function CollectionSection(props) {

    return (
       <CollectionDiv>
            <CollectionUl>
                <CollectionLi>
                    <CollectionCard owner='ValentynQwer'/>
                </CollectionLi>
                <CollectionLi>
                    <CollectionCard/>
                </CollectionLi>
                <CollectionLi>
                    <CollectionCard owner='Binya'/>
                </CollectionLi>
                <CollectionLi>
                    <CollectionCard owner='Binya'/>
                </CollectionLi>
                <CollectionLi>
                    <CollectionCard owner='Zholdas'/>
                </CollectionLi>
                <CollectionLi>
                    <CollectionCard/>
                </CollectionLi>
            </CollectionUl>
       </CollectionDiv>
    );
}
