import React from "react"
import {ButtonTwoStyled} from "../styles/Landing.styled/Home.styled";
import {FooterStyled} from "../styles/Basic.styled/Footer.styled";
import AddOptionCreateNFT from "./AddOptionCreateNFT";
import ToggleOptionCreateNFT from "./ToggleOptionCreateNFT";
import {
    ContainerCreateNFT, DecsInput,
    MainCreateNFT,
    OptionsCreateNFT, SelectInput,
    TextInput
} from "../styles/CreateNewNFT/CreateNewNFT.styled";



export default function CreateNewNFT(props) {
    return (
        <MainCreateNFT>
            <ContainerCreateNFT>
                <h1>Create New NFT</h1>
                <h2>Upload a Image, Video, Audio, or GIF</h2>
                <p>File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB</p>
                <div></div>
            </ContainerCreateNFT>
            <ContainerCreateNFT>
                <h2>Name of Creation</h2>
                <TextInput type="text" placeholder="Item name"/>
            </ContainerCreateNFT>
            <ContainerCreateNFT>
                <h2>External Link</h2>
                <p>LunaBite will include a link to this URL on this item's detail page, so that users can click to
                    learn more about it. You are welcome to link to your own webpage with more details.</p>
                <TextInput type="text" placeholder="https://yourwebsite.ai/item/123"/>
            </ContainerCreateNFT>
            <ContainerCreateNFT>
                <h2>Creation Description</h2>
                <p>The description will be included on the item's detail page underneath its image</p>
                <DecsInput type="text" placeholder="Provide a description of your newest creation."/>
            </ContainerCreateNFT>
            <ContainerCreateNFT>
                <h2>Collection</h2>
                <p>This is the collection where your item will appear.</p>
                <SelectInput type="select" placeholder="Choose a collection"/>
            </ContainerCreateNFT>
            <OptionsCreateNFT>
                <AddOptionCreateNFT/>
                <AddOptionCreateNFT/>
                <AddOptionCreateNFT/>
                <ToggleOptionCreateNFT/>
                <ToggleOptionCreateNFT/>
            </OptionsCreateNFT>
            <ContainerCreateNFT>
                <h2>Supply</h2>
                <p>The number of copies that can be minted. No gas cost to you! Quantities above one coming soon. </p>
                <SelectInput type="text" placeholder="1"/>
                <ButtonTwoStyled/>
            </ContainerCreateNFT>
            <FooterStyled/>
        </MainCreateNFT>
    )
}