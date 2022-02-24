import React, {useRef} from "react";
import {useDetectOutsideClick} from "./useDetectedOutsideClick";
import {Link} from "react-router-dom";
import {useWallet, WalletStatus} from "@terra-money/wallet-provider";
import LoginIcon from '@mui/icons-material/Login';
import QrCodeIcon from '@mui/icons-material/QrCode';
import LogoutIcon from '@mui/icons-material/Logout';
import {Button} from "@mui/material";


export const Dropdown = ({text, link, items, login = false}) => {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    const {
        status,
        availableConnectTypes,
        availableInstallTypes,
        connect,
        install,
        disconnect,
    } = useWallet()

    const loginUI = () => {
        if (status === WalletStatus.WALLET_NOT_CONNECTED) {
            return <ul>
                <li key={0}>
                    <div style={{display: "flex"}}>
                        <i>
                            <LoginIcon fontSize="medium"/>
                        </i>
                        <Button onClick={() => connect(availableConnectTypes[0])}>Terra wallet</Button>
                    </div>
                </li>
                <li key={1}>
                    <div style={{display: "flex"}}>
                        <i>
                            <QrCodeIcon fontSize="medium"/>
                        </i>
                        <Button onClick={() => connect(availableConnectTypes[1])}>QR code</Button>
                    </div>
                </li>
            </ul>

        } else if (status === WalletStatus.WALLET_CONNECTED) {
            return <li key={0}>
                <div style={{display: "flex"}}>
                    <i>
                        <LogoutIcon fontSize="medium"/>
                    </i>
                    <Button onClick={() => disconnect()}>Disconnect</Button>
                </div>
            </li>
        }
    }

    return (
        <div className="menu-container" onMouseLeave={() => setIsActive(!isActive)}
             onMouseEnter={() => setIsActive(true)}>
            <nav className="nav-item">
                <Link to={link} className="icon-button">
                    {text}
                </Link>
            </nav>
            <nav ref={dropdownRef} className={`menu ${isActive ? "active" : "inactive"}`}>
                {
                    !login ? null
                       /* <ul>
                            {
                                items.map((item, i) => (
                                    <li key={i}>
                                        <div style={{display: "flex"}}>
                                            <i>
                                                {item.icon}
                                            </i>
                                            <Link to={item.link}>{item.text}</Link>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>*/
                        : loginUI()
                }
            </nav>
        </div>
    );
}
