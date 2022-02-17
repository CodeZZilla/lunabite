import React from 'react';
import Logo from "./Logo"
import Search from "./Search";
import Navbar from "./NavBar";
import NavItem from "./NavItem";
import DropdownMenu from "./DropdownMenu";
import NavButton from "./NavButton";
import {Dropdown} from "./Dropdown";
import HomeIcon from "../../../Icons/IconWallet";
import ImageAspectRatioOutlinedIcon from '@mui/icons-material/ImageAspectRatioOutlined';
import {useWallet} from "@terra-money/wallet-provider";

/*const {
    status,
    availableConnectTypes,
    availableInstallTypes,
    connect,
    install,
    disconnect,
} = useWallet()*/

const itemsOfCreate = [
    {
        text: "All NFTs",
        link: '/create-new-nft',
        icon: <ImageAspectRatioOutlinedIcon fontSize="medium"/>
    },
    {
        text: "All NFTs",
        link: '/create-new-nft',
        icon: <ImageAspectRatioOutlinedIcon fontSize="medium"/>
    },
    {
        text: "All NFTs",
        link: '/create-new-nft',
        icon: <ImageAspectRatioOutlinedIcon fontSize="medium"/>
    },
    {
        text: "All NFTs",
        link: '/create-new-nft',
        icon: <ImageAspectRatioOutlinedIcon fontSize="medium"/>
    }
]
const itemsOfCreate1 = [
    {
        text: "All NFTs",
        link: '/create-new-nft',
        icon: <ImageAspectRatioOutlinedIcon fontSize="medium"/>
    },
    {
        text: "All NFTs",
        link: '/create-new-nft',
        icon: <ImageAspectRatioOutlinedIcon fontSize="medium"/>
    },
    {
        text: "All NFTs",
        link: '/create-new-nft',
        icon: <ImageAspectRatioOutlinedIcon fontSize="medium"/>
    },
    {
        text: "All NFTs",
        link: '/create-new-nft',
        icon: <ImageAspectRatioOutlinedIcon fontSize="medium"/>
    }
]
const itemsOfCreate2 = [
    {
        text: "All NFTs",
        link: '/create-new-nft',
        icon: <ImageAspectRatioOutlinedIcon fontSize="medium"/>
    },
    {
        text: "All NFTs",
        link: '/create-new-nft',
        icon: <ImageAspectRatioOutlinedIcon fontSize="medium"/>
    },
    {
        text: "All NFTs",
        link: '/create-new-nft',
        icon: <ImageAspectRatioOutlinedIcon fontSize="medium"/>
    },
    {
        text: "All NFTs",
        link: '/create-new-nft',
        icon: <ImageAspectRatioOutlinedIcon fontSize="medium"/>
    }
]
const itemsOfCreate3 = [
    {
        text: "All NFTs",
        link: '/create-new-nft',
        icon: <ImageAspectRatioOutlinedIcon fontSize="medium"/>
    },
    {
        text: "All NFTs",
        link: '/create-new-nft',
        icon: <ImageAspectRatioOutlinedIcon fontSize="medium"/>
    },
    {
        text: "All NFTs",
        link: '/create-new-nft',
        icon: <ImageAspectRatioOutlinedIcon fontSize="medium"/>
    },
    {
        text: "All NFTs",
        link: '/create-new-nft',
        icon: <ImageAspectRatioOutlinedIcon fontSize="medium"/>
    }
]
/*const itemsOfCreate4 = [
    {
        text: availableConnectTypes.,
        link: '/create-new-nft',
        icon: <ImageAspectRatioOutlinedIcon fontSize="medium"/>
    },
    {
        text: "All NFTs",
        link: '/create-new-nft',
        icon: <ImageAspectRatioOutlinedIcon fontSize="medium"/>
    },
    {
        text: "All NFTs",
        link: '/create-new-nft',
        icon: <ImageAspectRatioOutlinedIcon fontSize="medium"/>
    },
    {
        text: "All NFTs",
        link: '/create-new-nft',
        icon: <ImageAspectRatioOutlinedIcon fontSize="medium"/>
    }
]*/


export default function Header() {
    return (
    <Navbar>
        <Logo/>
        <Search/>
        {/*<NavItem link="/create-new-nft" name="Create" />*/}
        <Dropdown items={itemsOfCreate} text={"Create"} link={"/create-new-nft"}/>
        <Dropdown items={itemsOfCreate1} text={"Explore"} link={"/profile"}/>
        <Dropdown items={itemsOfCreate2} text={"Charts"} link={"/item-owner"}/>
        <Dropdown items={itemsOfCreate3} text={"Resources"} link={"/"}/>
        <NavButton>
            <DropdownMenu/>
        </NavButton>
       {/* <ButtonStyled>
            <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M13.6923 1.38452H2.30769C1.03522 1.38452 0 2.41974 0 3.69221V12.3076C0 13.5801 1.03522 14.6153 2.30769 14.6153H13.6923C14.9648 14.6153 16 13.5801 16 12.3076V3.69221C16 2.41974 14.9648 1.38452 13.6923 1.38452ZM15.0769 9.38453H11.6923C10.9288 9.38453 10.3077 8.7634 10.3077 7.9999C10.3077 7.2364 10.9288 6.61528 11.6923 6.61528H15.0769V9.38453ZM15.0769 5.69221H11.6923C10.4198 5.69221 9.38463 6.72743 9.38463 7.9999C9.38463 9.27237 10.4198 10.3076 11.6923 10.3076H15.0769V12.3076C15.0769 13.0711 14.4558 13.6922 13.6923 13.6922H2.30769C1.54422 13.6922 0.923063 13.0711 0.923063 12.3076V3.69221C0.923063 2.92874 1.54419 2.30758 2.30769 2.30758H13.6923C14.4558 2.30758 15.0769 2.92871 15.0769 3.69221V5.69221Z"
                    fill="white"/>
                <path
                    d="M12.3074 7.53857H11.692C11.4371 7.53857 11.2305 7.74523 11.2305 8.00011C11.2305 8.25501 11.4371 8.46164 11.692 8.46164H12.3074C12.5623 8.46164 12.7689 8.25498 12.7689 8.00011C12.7689 7.7452 12.5623 7.53857 12.3074 7.53857Z"
                    fill="white"/>
            </svg>
        </ButtonStyled>
        <ButtonStyled>
            <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M13.6923 1.38452H2.30769C1.03522 1.38452 0 2.41974 0 3.69221V12.3076C0 13.5801 1.03522 14.6153 2.30769 14.6153H13.6923C14.9648 14.6153 16 13.5801 16 12.3076V3.69221C16 2.41974 14.9648 1.38452 13.6923 1.38452ZM15.0769 9.38453H11.6923C10.9288 9.38453 10.3077 8.7634 10.3077 7.9999C10.3077 7.2364 10.9288 6.61528 11.6923 6.61528H15.0769V9.38453ZM15.0769 5.69221H11.6923C10.4198 5.69221 9.38463 6.72743 9.38463 7.9999C9.38463 9.27237 10.4198 10.3076 11.6923 10.3076H15.0769V12.3076C15.0769 13.0711 14.4558 13.6922 13.6923 13.6922H2.30769C1.54422 13.6922 0.923063 13.0711 0.923063 12.3076V3.69221C0.923063 2.92874 1.54419 2.30758 2.30769 2.30758H13.6923C14.4558 2.30758 15.0769 2.92871 15.0769 3.69221V5.69221Z"
                    fill="white"/>
                <path
                    d="M12.3074 7.53857H11.692C11.4371 7.53857 11.2305 7.74523 11.2305 8.00011C11.2305 8.25501 11.4371 8.46164 11.692 8.46164H12.3074C12.5623 8.46164 12.7689 8.25498 12.7689 8.00011C12.7689 7.7452 12.5623 7.53857 12.3074 7.53857Z"
                    fill="white"/>
            </svg>
        </ButtonStyled>*/}
    </Navbar>
    )
}
