import React from "react"
import {FooterStyled} from "../styles/Basic/Footer.styled";
import AddOptionCreateNFT from "./AddOptionCreateNFT";
import {
    AStyled,
    ContainerCreateNFT, ContainerCreateNFTTop, DecsInput, FileNFT,
    MainCreateNFT, SelectInput,
    TextInput
} from "../styles/CreateNewNFT/CreateNewNFT.styled";
import {DropzoneComponent} from "react-dropzone-component";
import ModalCreatedNFT from "./ModalCreatedNFT";
import {OptionButton, ToggleButton} from "../styles/CreateNewNFT/AddOptionCreateNFT.styled";


export default function CreateNewNFT(props) {
    let menuSvg = <svg width="19" height="19" viewBox="0 0 21 21" fill="cover" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.17244 0.534424C0.97252 0.534424 0 1.50694 0 2.70683C0 3.90671 0.97252 4.87926 2.17244
                                 4.87926C3.37232 4.87926 4.34484 3.90674 4.34484 2.70683C4.34484 1.50691 3.37232 0.534424
                                 2.17244 0.534424ZM2.17244 6.32751C0.97252 6.32751 0 7.30006 0 8.49994C0 9.69986 0.97252
                                 10.6724 2.17244 10.6724C3.37232 10.6724 4.34484 9.69986 4.34484 8.49994C4.34484 7.30006
                                 3.37232 6.32751 2.17244 6.32751ZM2.17244 12.1207C0.97252 12.1207 0 13.0931 0 14.293C0
                                 15.4929 0.97252 16.4655 2.17244 16.4655C3.37232 16.4655 4.34484 15.4929 4.34484
                                 14.293C4.34484 13.0931 3.37232 12.1207 2.17244 12.1207ZM7.96552 4.15511H19.5517C20.3519
                                 4.15511 21 3.50699 21 2.70683C21 1.90666 20.3519 1.25855 19.5517 1.25855H7.96552C7.16536
                                 1.25855 6.51724 1.90666 6.51724 2.70683C6.51724 3.50699 7.16536 4.15511 7.96552
                                 4.15511ZM19.5517 7.05167H7.96552C7.16536 7.05167 6.51724 7.69978 6.51724 8.49994C6.51724
                                 9.30011 7.16536 9.94822 7.96552 9.94822H19.5517C20.3519 9.94822 21 9.30011 21 8.49994C21
                                 7.69978 20.3519 7.05167 19.5517 7.05167ZM19.5517 12.8448H7.96552C7.16536 12.8448 6.51724
                                 13.4929 6.51724 14.293C6.51724 15.0932 7.16536 15.7413 7.96552 15.7413H19.5517C20.3519
                                 15.7413 21 15.0932 21 14.293C21 13.4929 20.3519 12.8448 19.5517 12.8448Z"
              fill="#6F6F6F"/>
    </svg>
    let playSvg = <svg width="19" height="19" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M3.46727 0.463034C1.574 -0.622972 0.0390625 0.266697 0.0390625 2.44858V18.5499C0.0390625 20.734 1.574 21.6225 3.46727 20.5375L17.5406 12.4665C19.4345 11.3801 19.4345 9.62001 17.5406 8.53388L3.46727 0.463034Z"
            fill="#6F6F6F"/>
    </svg>
    let statsSvg = <svg width="19" height="19" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M4.90625 10.8125H0.96875C0.606313 10.8125 0.3125 11.1063 0.3125 11.4688V18.0312C0.3125 18.3937 0.606313 18.6875 0.96875 18.6875H4.90625C5.26869 18.6875 5.5625 18.3937 5.5625 18.0312V11.4688C5.5625 11.1063 5.26869 10.8125 4.90625 10.8125Z"
            fill="#6F6F6F"/>
        <path
            d="M18.0312 5.5625H14.0938C13.7313 5.5625 13.4375 5.85631 13.4375 6.21875V18.0312C13.4375 18.3937 13.7313 18.6875 14.0938 18.6875H18.0312C18.3937 18.6875 18.6875 18.3937 18.6875 18.0312V6.21875C18.6875 5.85631 18.3937 5.5625 18.0312 5.5625Z"
            fill="#6F6F6F"/>
        <path
            d="M11.4688 0.3125H7.53125C7.16881 0.3125 6.875 0.606313 6.875 0.96875V18.0312C6.875 18.3937 7.16881 18.6875 7.53125 18.6875H11.4688C11.8312 18.6875 12.125 18.3937 12.125 18.0312V0.96875C12.125 0.606313 11.8312 0.3125 11.4688 0.3125Z"
            fill="#6F6F6F"/>
    </svg>
    let lockSvg = <svg width="19" height="19" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M14.4062 7.71094H5.70942V4.33822C5.70942 2.85075 6.9606 1.64062 8.49848 1.64062C10.0364 1.64062 11.2875 2.85075 11.2875 4.33822V5.90625H12.9282V4.33822C12.9282 1.94611 10.941 0 8.49848 0C6.05596 0 4.06879 1.94611 4.06879 4.33822V7.71094H2.59375C1.23679 7.71094 0.132812 8.81491 0.132812 10.1719V18.5391C0.132812 19.896 1.23679 21 2.59375 21H14.4062C15.7632 21 16.8672 19.896 16.8672 18.5391V10.1719C16.8672 8.81491 15.7632 7.71094 14.4062 7.71094ZM15.2266 18.5391C15.2266 18.9914 14.8586 19.3594 14.4062 19.3594H2.59375C2.14143 19.3594 1.77344 18.9914 1.77344 18.5391V10.1719C1.77344 9.71955 2.14143 9.35156 2.59375 9.35156H14.4062C14.8586 9.35156 15.2266 9.71955 15.2266 10.1719V18.5391Z"
            fill="#6F6F6F"/>
        <path
            d="M8.5 11.7305C7.66185 11.7305 6.98242 12.4099 6.98242 13.248C6.98242 13.7832 7.25969 14.2533 7.67817 14.5236V16.3242C7.67817 16.7772 8.04542 17.1445 8.49848 17.1445C8.9515 17.1445 9.3188 16.7772 9.3188 16.3242V14.5255C9.73896 14.2556 10.0176 13.7845 10.0176 13.248C10.0176 12.4099 9.33815 11.7305 8.5 11.7305Z"
            fill="#6F6F6F"/>
    </svg>
    let hotSvg = <svg width="19" height="19" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M17.9246 3.07535C15.9414 1.09221 13.3046 0 10.5 0C7.69535 0 5.05858 1.09221 3.07535 3.07535C1.09221 5.05858 0 7.69535 0 10.5C0 13.3046 1.09221 15.9414 3.07535 17.9246C5.05858 19.9078 7.69535 21 10.5 21C13.3046 21 15.9414 19.9078 17.9246 17.9246C19.9078 15.9414 21 13.3046 21 10.5C21 7.69535 19.9078 5.05858 17.9246 3.07535ZM1.23047 10.5C1.23047 5.38876 5.38876 1.23047 10.5 1.23047C12.8347 1.23047 14.9703 2.09844 16.6018 3.52816L14.7035 5.42645C14.2257 5.03135 13.6132 4.79362 12.9461 4.79362C11.4232 4.79362 10.1842 6.03262 10.1842 7.55557C10.1842 8.22261 10.4223 8.83477 10.8174 9.31256L7.86823 12.2617V4.79346H4.49416V6.02392H6.63776V13.4922L3.52816 16.6018C2.0984 14.9703 1.23047 12.8347 1.23047 10.5ZM11.4146 7.55557C11.4146 6.7111 12.1016 6.02409 12.9461 6.02409C13.7906 6.02409 14.4776 6.7111 14.4776 7.55557C14.4776 8.40004 13.7906 9.08705 12.9461 9.08705C12.1016 9.08705 11.4146 8.40004 11.4146 7.55557ZM12.9461 10.3175C14.2305 10.3175 15.2754 11.3624 15.2754 12.6468C15.2754 13.9312 14.2305 14.9761 12.9461 14.9761C11.6617 14.9761 10.6168 13.9312 10.6168 12.6468C10.6168 11.3624 11.6617 10.3175 12.9461 10.3175ZM10.5 19.7695C8.16531 19.7695 6.02975 18.9016 4.39819 17.4718L6.63772 15.2323V16.1891H7.86819V14.0018L9.39069 12.4793C9.298 14.4679 10.9558 16.2065 12.9461 16.2065C14.9089 16.2065 16.5058 14.6096 16.5058 12.6468C16.5058 11.3603 15.8199 10.2312 14.7947 9.60565C15.3551 9.09981 15.708 8.36817 15.708 7.55553C15.708 7.14746 15.6184 6.76015 15.4588 6.41119L17.4719 4.39815C18.9016 6.02975 19.7695 8.16531 19.7695 10.5C19.7695 15.6112 15.6112 19.7695 10.5 19.7695Z"
            fill="#6F6F6F"/>
    </svg>

    let componentConfig = {
        iconFiletypes: ['.jpg', '.png', '.gif'],
        showFiletypeIcon: true,
        postUrl: '/uploadHandler'
    };
    return (
        <MainCreateNFT>
            <ContainerCreateNFTTop>
                <h1>Create New NFT</h1>
                <h2>Upload a Image, Video, Audio, or GIF</h2>
                <p>File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB</p>
                <FileNFT className="drop-zone">
                    <DropzoneComponent config={componentConfig}/>
                </FileNFT>
            </ContainerCreateNFTTop>
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
                <SelectInput type="select" placeholder="Choose a collection">
                    <option value="1">gello</option>
                    <option value="2">dsfsd</option>
                    <option value="3">geldsffsdlo</option>
                    <option value="4">gelsfddlo</option>
                </SelectInput>
            </ContainerCreateNFT>
            <ContainerCreateNFT>
                <AddOptionCreateNFT svg={menuSvg} name="Properties" desc="Properties show up underneath your item,
                                                    are clickable,and can be filtered in your collection's sidebar."
                                    child={<OptionButton>+</OptionButton>}/>
                <hr/>
                <AddOptionCreateNFT svg={playSvg} name="Levels" desc="Levels show up underneath your item, are clickable,
                                                                    and can be filtered in your collection's sidebar."
                                    child={<OptionButton>+</OptionButton>}/>
                <hr/>
                <AddOptionCreateNFT svg={statsSvg} name="Stats" desc="Stats show up underneath your item, are clickable,
                                                                    and can be filtered in your collection's sidebar."
                                    child={<OptionButton>+</OptionButton>}/>
                <hr/>
                <AddOptionCreateNFT svg={lockSvg} name="Unlockable Content"
                                    desc="Include unlockable content that can only
                                       be revealed by the owner of the item."
                                    child={<ToggleButton type={"checkbox"}/>}/>
                <hr/>
                <AddOptionCreateNFT svg={hotSvg} name="Explicit & Sensitive Content" desc="Set this item as
                                                                                        explicit and sensitive content.
                                                                                        Be revealed by the owner of the item."
                                    child={<ToggleButton type={"checkbox"}/>}/>
                <hr/>
            </ContainerCreateNFT>
            <ContainerCreateNFT>
                <h2>Supply</h2>
                <p>The number of copies that can be minted. No gas cost to you! Quantities above one coming soon. </p>
                <SelectInput  type="select" placeholder="1">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </SelectInput>
                <AStyled color="white" href="#demo-modal" background="#A7A7FF"
                         secondBackground="#bcbcff">Create</AStyled>
            </ContainerCreateNFT>
            <ModalCreatedNFT name={"Benuk"}/>
            <FooterStyled/>
        </MainCreateNFT>
    )
}