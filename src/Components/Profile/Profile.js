import {React,useEffect} from 'react';
import {
    ContentProfile,
    HeaderProfile,
    LeftProfile,
    MainProfile, NFTProfile, ProfileBanner, ProfileLogo,
    RightProfile
} from "../styles/Profile/Profile.styled";
import Card from "../LandingPage/Slider/Card";
import {ButtonTwoStyled} from "../styles/Landing/Home.styled";
import SliderStyled from "../LandingPage/Slider/SliderStyled";



export default function Profile(props) {
    let collectedData = {
        h:"Collected",
        data:[
        {
            cost:"0,1",
            name:"Valentyn"
        },
        {
            cost:"1,1",
            name:"Oksana"
        },
        {
            cost:"0,1",
            name:"Dmitriy"
        }
    ]}
    let createdData = {
        h:"Created",
        data:[
        {
            cost:"3,2",
            name:"Taras"
        },
        {
            cost:"9",
            name:"Gorilla"
        },
        {
            cost:"7,1",
            name:"Bovda"
        }
    ]}
    let favouriteData = {
        h:"Favourite",
        data:[
        {
            cost:"4,9",
            name:"Stovbr"
        },
        {
            cost:"2,3",
            name:"Queen"
        },
        {
            cost:"8,3",
            name:"Nike"
        }
    ]}

    useEffect(()=>{
        onScroll()
    },[])

    let onScroll = () => {
        window.scrollTo(0,0)
    }

    return (
        <MainProfile>
           <HeaderProfile/>
            <ContentProfile>
                <RightProfile>
                    <ProfileLogo><svg width="100" height="100" viewBox="0 0 16 16" fill="none"
                                      xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.728 8.62207C11.8303 7.79187 12.5444 6.47278 12.5444 4.98981C12.5444 2.48401 10.5057 0.445312
                        7.9997 0.445312C5.4939 0.445312 3.4552 2.48401 3.4552 4.98981C3.4552 6.47278 4.16913 7.79187 5.27143
                        8.62207C2.32013 9.72986 0.213867 12.5804 0.213867 15.9141H1.62012C1.62012 12.3962 4.48206 9.53448 7.99988
                         9.53448C11.5175 9.53448 14.3795 12.3962 14.3795 15.9141H15.7857C15.7855 12.5804 13.6795 9.72986 10.728
                         8.62207ZM4.86145 4.98981C4.86145 3.25928 6.26917 1.85156 7.9997 1.85156C9.73023 1.85156 11.1379 3.25928
                          11.1379 4.98981C11.1379 6.72034 9.73023 8.12823 7.9997 8.12823C6.26917 8.12823 4.86145 6.72034 4.86145
                          4.98981Z" fill="white"/>
                    </svg></ProfileLogo>
                    <h1>{props.name}</h1>
                    <h4>@{props.nickname}</h4>
                    <p>The official Butterball fanclub account. This is a bio section.</p>
                    <div>
                        <ButtonTwoStyled color="white" secondBackground="#bcbcff" background="#A7A7FF">Twitter</ButtonTwoStyled>
                        <ButtonTwoStyled color="white" secondBackground="#bcbcff" background="#A7A7FF">Discord</ButtonTwoStyled>
                        <ButtonTwoStyled color="white" secondBackground="#bcbcff" background="#A7A7FF">Instagram</ButtonTwoStyled>
                    </div>
                </RightProfile>
                <LeftProfile>
                    <Card cost="0,1 LUNA created" name="Butterball"/>
                </LeftProfile>
            </ContentProfile>
            <NFTProfile>
                <SliderStyled {...collectedData}/>
                <SliderStyled {...createdData}/>
                <SliderStyled {...favouriteData}/>
            </NFTProfile>
            <ProfileBanner/>
        </MainProfile>
    )
}