import React from 'react';
import SliderStyled from "../LandingPage/Slider/SliderStyled";
import {ButtonTwoStyled} from "../styles/Landing/Home.styled";
import {
    ItemPageImg,
    ItemPageOwnerDesc,
    ItemPageOwnerDescContentLeft,
    ItemPageOwnerDescContentRight,
    ItemPageOwnerDescText,
    ItemPageOwnerHeader,
    ItemPageOwnerHeaderLeft,
    ItemPageOwnerHeaderLeftData,
    ItemPageOwnerMain,
    ItemPageOwnerOptions, ItemPageOwnerTable,
    OptionsDiv
} from "../styles/ItemPageOwner/ItemPageOwner.styled";
import {FooterStyled} from "../styles/Basic/Footer.styled";
import {Container} from "../styles/Basic/Header.styled";
import 'react-accessible-accordion/dist/fancy-example.css';
import Accordion from "../Accordions/Accodion";
import AccordionBordered from "../Accordions/AccordionBordered";



let createdData = {
    h: "More from this collection",
    data: [
        {
            cost: "3,2",
            name: "Taras"
        },
        {
            cost: "9",
            name: "Gorilla"
        },
        {
            cost: "7,1",
            name: "Bovda"
        }
    ]
}
let menuSvg = <svg width="17" height="13" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
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
let vector = <svg width="17" height="13" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M20.9321 1.43127C20.8871 1.32275 20.8218 1.22571 20.7406 1.1445C20.7353 1.13921 20.73 1.1383 20.7256 1.13391C20.6462 1.0589 20.5553 0.996269 20.453 0.9539C20.3691 0.919489 20.2809 0.908907 20.1927 0.90095C20.1662 0.899186 20.1442 0.886841 20.1177 0.886841H13.059C12.571 0.886841 12.1766 1.28124 12.1766 1.7692C12.1766 2.25715 12.571 2.65155 13.059 2.65155H17.9965L11.0119 9.67585L8.3543 6.27354C8.20078 6.07679 7.97224 5.95502 7.72521 5.93648C7.46845 5.91794 7.23196 6.0053 7.05199 6.17559L0.275624 12.5911C-0.0782115 12.9264 -0.0931819 13.4849 0.241213 13.8387C0.415937 14.0214 0.64886 14.1131 0.882686 14.1131C1.10064 14.1131 1.31855 14.0328 1.48885 13.8723L7.56021 8.1238L10.2363 11.5499C10.3925 11.7502 10.6264 11.8729 10.8796 11.8878C11.1328 11.9019 11.379 11.8084 11.5581 11.6293L19.2353 3.90796V8.82791C19.2353 9.31582 19.6297 9.71026 20.1177 9.71026C20.6056 9.71026 21 9.31586 21 8.82791V1.76924V1.76833C20.9991 1.65275 20.9762 1.53894 20.9321 1.43127Z"
        fill="#A7A7FF"/>
</svg>
let hand = <svg width="17" height="13" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M14.3403 3.44232V8.69232C14.3403 8.91524 14.1593 9.09616 13.9364 9.09616C13.7135 9.09616 13.5326 8.91524 13.5326 8.69232V1.01924H11.1095V7.88462C11.1095 8.10755 10.9286 8.28847 10.7057 8.28847C10.4827 8.28847 10.3018 8.10755 10.3018 7.88462V0.211548H7.87873V7.88462C7.87873 8.10755 7.69781 8.28847 7.47488 8.28847C7.25196 8.28847 7.07104 8.10755 7.07104 7.88462V1.82693H4.64796V11.9231L3.01238 9.68497C2.52777 8.93786 1.58196 8.68747 0.888961 9.11555C0.198384 9.55332 0.027153 10.508 0.505307 11.2527C0.505307 11.2527 3.14323 15.2451 4.26754 16.9542C5.39185 18.6633 7.21319 20 10.6192 20C16.2585 20 16.7633 15.6449 16.7633 14.3462C16.7633 13.0474 16.7633 3.44232 16.7633 3.44232H14.3403Z"
        fill="#6F6F6F"/>
</svg>
let stroke = <svg width="17" height="13" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M19.2499 0.00012207H11.9764C11.4952 0.00012207 10.8227 0.278873 10.4827 0.618582L0.510679 10.5906C-0.170226 11.2707 -0.170226 12.3858 0.510679 13.0652L7.93569 20.4899C8.61506 21.17 9.72908 21.17 10.4095 20.4891L20.3815 10.5187C20.7212 10.179 21 9.50543 21 9.0253V1.7502C21 0.787873 20.2122 0.00012207 19.2499 0.00012207ZM15.7497 7.00016C14.7832 7.00016 13.9997 6.2158 13.9997 5.25009C13.9997 4.28279 14.7832 3.50001 15.7497 3.50001C16.7163 3.50001 17.5001 4.28279 17.5001 5.25009C17.5001 6.2158 16.7163 7.00016 15.7497 7.00016Z"
        fill="#6F6F6F"/>
</svg>

const columns = [{
    dataField: 'id',
    text: 'Product ID'
}, {
    dataField: 'name',
    text: 'Product Name'
}, {
    dataField: 'price',
    text: 'Product Price'
}];

let products = [{
    id: 1,
    name: "Product1",
    price: 120
}, {
    id: 2,
    name: "Product2",
    price: 80
}];

let items = [
    {
        uuid: 1,
        heading: "Properties",
        content: "lorem ipsum"
    },
    {
        uuid: 1,
        heading: "Properties",
        content: "lorem ipsum"
    },
    {
        uuid: 1,
        heading: "Properties",
        content: "lorem ipsum"
    }
];

export default function ItemPageOwner(props) {
    return (
        <ItemPageOwnerMain>
            <ItemPageOwnerHeader>
                <ItemPageImg>
                    <img src="images/second.png" alt=""/>
                </ItemPageImg>
                <ItemPageOwnerHeaderLeft>
                    <ItemPageOwnerHeaderLeftData>
                        <h1>{props.name}</h1>
                        <h3>Part of the {props.collectionOf}</h3>
                        <ItemPageOwnerOptions>
                            <OptionsDiv>
                                <svg width="25" height="15" viewBox="0 0 25 15" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12.5 0.0488281C7.72348 0.0488281 3.39189 2.6621 0.195612 6.90675C-0.0652041 7.25451 -0.0652041 7.74034 0.195612 8.0881C3.39189 12.3379 7.72348 14.9511 12.5 14.9511C17.2765 14.9511 21.6081 12.3379 24.8044 8.09321C25.0652 7.74546 25.0652 7.25962 24.8044 6.91187C21.6081 2.6621 17.2765 0.0488281 12.5 0.0488281ZM12.8426 12.747C9.67193 12.9464 7.05354 10.3332 7.25299 7.15734C7.41664 4.53895 9.53897 2.41663 12.1574 2.25298C15.3281 2.05353 17.9465 4.66681 17.747 7.84262C17.5782 10.4559 15.4559 12.5782 12.8426 12.747ZM12.6841 10.3229C10.976 10.4303 9.56454 9.02397 9.67705 7.31588C9.76399 5.9044 10.9095 4.76397 12.321 4.67192C14.0291 4.56452 15.4406 5.97089 15.3281 7.67898C15.236 9.09556 14.0905 10.236 12.6841 10.3229Z"
                                        fill="#6F6F6F"/>
                                </svg>
                                <p>{props.views}k Views</p>
                            </OptionsDiv>
                            <OptionsDiv>
                                <svg width="24" height="20" viewBox="0 0 24 20" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M22.1619 2.88175C20.8644 1.15525 19.3426 0.2695 17.6386 0.25H17.5816C15.1141 0.25 12.9886 2.10175 11.9994 3.13C11.0094 2.10175 8.88461 0.25 6.41636 0.25H6.36011C4.65536 0.2695 3.13511 1.15525 1.81586 2.91175C1.00489 4.11242 0.640138 5.55924 0.784959 7.00088C0.92978 8.44251 1.57503 9.78787 2.60861 10.8032L11.4744 19.534C11.6146 19.6714 11.803 19.7484 11.9994 19.7484C12.1957 19.7484 12.3842 19.6714 12.5244 19.534L21.3894 10.8032C22.4257 9.78252 23.0707 8.43031 23.2119 6.98257C23.3531 5.53482 22.9815 4.08347 22.1619 2.88175ZM20.3379 9.7345L11.9994 17.95L3.66086 9.7345C2.87991 8.97038 2.39021 7.95759 2.27628 6.87095C2.16236 5.7843 2.43136 4.69198 3.03686 3.7825C4.03811 2.44975 5.16011 1.76575 6.37436 1.75H6.41786C9.02786 1.75 11.3881 4.693 11.4114 4.723C11.4844 4.80758 11.5748 4.87544 11.6763 4.92196C11.7779 4.96847 11.8884 4.99255 12.0001 4.99255C12.1118 4.99255 12.2223 4.96847 12.3239 4.92196C12.4255 4.87544 12.5158 4.80758 12.5889 4.723C12.6129 4.693 14.9889 1.684 17.6259 1.75C18.2968 1.80053 18.9465 2.0081 19.5225 2.35595C20.0984 2.7038 20.5846 3.18218 20.9416 3.7525C21.556 4.66296 21.832 5.75988 21.7217 6.85271C21.6114 7.94553 21.1218 8.96518 20.3379 9.7345Z"
                                        fill="#FFA4D4"/>
                                </svg>
                                <p>{props.likes} Likes</p>
                            </OptionsDiv>
                        </ItemPageOwnerOptions>
                    </ItemPageOwnerHeaderLeftData>
                    <ItemPageOwnerHeaderLeftData>
                        <p>Currently owned by {props.owner}</p>
                        <Container>
                            <ButtonTwoStyled secondBackground="#bcbcff" color="white"
                                             background="#A7A7FF">Sell</ButtonTwoStyled>
                            <ButtonTwoStyled secondBackground="#bcbcff" color="#A7A7FF"
                                             background="#FFFFFF">Edit</ButtonTwoStyled>
                        </Container>
                    </ItemPageOwnerHeaderLeftData>
                </ItemPageOwnerHeaderLeft>
            </ItemPageOwnerHeader>
            <ItemPageOwnerDesc>
                <ItemPageOwnerDescContentRight>
                    <ItemPageOwnerDescText>
                        <h3>Creation Description</h3>
                        <p>The description will be included on the item's detail page underneath its image.
                            The description will be included on the item's detail page underneath its image.</p>
                        <p>Created by {props.owner}</p>
                    </ItemPageOwnerDescText>
                    <div>
                        <hr/>
                        <Accordion svg={menuSvg} title="Properties" content="HEllo world"/>
                        <hr/>
                        <Accordion svg={menuSvg} title="About Collection" content="Lorem ipsum dolor sit amet"/>
                        <hr/>
                        <Accordion svg={menuSvg} title="Details" content="Lorem ipsum dolor sit amet"/>
                        <hr/>
                    </div>
                </ItemPageOwnerDescContentRight>
                <ItemPageOwnerDescContentLeft>
                    <AccordionBordered svg={vector} title="Properties" content="Lorem ipsum dolor sit amet"/>
                    <AccordionBordered svg={hand} title="About Collection" content="Lorem ipsum dolor sit amet"/>
                    <AccordionBordered svg={stroke} title="Details" content="Lorem ipsum dolor sit amet"/>
                </ItemPageOwnerDescContentLeft>
            </ItemPageOwnerDesc>
            <ItemPageOwnerTable>
                {/*<AccordionBordered svg={vector} title="Properties" content="<BootstrapTable keyField='id' data={ products } columns={ columns } />"/>*/}
            </ItemPageOwnerTable>
            <div>
                <SliderStyled {...createdData}/>
                <ButtonTwoStyled secondBackground="#bcbcff" color="white" background="#A7A7FF">View
                    collection</ButtonTwoStyled>
            </div>
            <FooterStyled/>

        </ItemPageOwnerMain>
    )
}