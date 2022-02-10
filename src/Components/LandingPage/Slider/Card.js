import React from 'react';
import {CardStyled, DivH1, ImgSlider} from "../../styles/Basic/Slider.styled";
import {ButtonStyled} from "../../styles/Basic/Header.styled";


export default function Card(props) {
    return (
        <CardStyled>
            <ImgSlider src="images/second.png"/>
            <DivH1>
                <h3>{props.cost}</h3>
            </DivH1>
            <div>
                <ButtonStyled><svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.728 8.62207C11.8303 7.79187 12.5444 6.47278 12.5444 4.98981C12.5444 2.48401 10.5057 0.445312
                        7.9997 0.445312C5.4939 0.445312 3.4552 2.48401 3.4552 4.98981C3.4552 6.47278 4.16913 7.79187 5.27143
                        8.62207C2.32013 9.72986 0.213867 12.5804 0.213867 15.9141H1.62012C1.62012 12.3962 4.48206 9.53448 7.99988
                         9.53448C11.5175 9.53448 14.3795 12.3962 14.3795 15.9141H15.7857C15.7855 12.5804 13.6795 9.72986 10.728
                         8.62207ZM4.86145 4.98981C4.86145 3.25928 6.26917 1.85156 7.9997 1.85156C9.73023 1.85156 11.1379 3.25928
                          11.1379 4.98981C11.1379 6.72034 9.73023 8.12823 7.9997 8.12823C6.26917 8.12823 4.86145 6.72034 4.86145
                          4.98981Z" fill="white"/>
                </svg></ButtonStyled>
                <h4>{props.name}</h4>
            </div>
        </CardStyled>
    )
}
