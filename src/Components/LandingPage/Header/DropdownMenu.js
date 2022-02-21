import React, {useEffect, useRef, useState} from 'react'
import {Link} from "react-router-dom";
import {useWallet, WalletStatus} from "@terra-money/wallet-provider";
import ModalSuccess from "./ModalSuccess";

export default function DropdownMenu() {
   const {
        status,
        availableConnectTypes,
        availableInstallTypes,
        connect,
        install,
        disconnect,
    } = useWallet()

    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, [])

    function DropdownItem(props) {
        return (
            <Link to={props.link} className="menu-item" onClick={() => props.onClick()}>
                {props.children}
            </Link>
        );
    }

    return (
        <div className="dropdown" style={{height: menuHeight}} ref={dropdownRef}>
            <div className="menu">
                {status === WalletStatus.WALLET_NOT_CONNECTED && (
                    <>
                        {/*{availableInstallTypes.map((installType) => (
                            <DropdownItem
                                key={`install-${installType}`}
                                onClick={() => install(installType)}
                                link="/">
                                Install {installType}
                            </DropdownItem>
                        ))}*/}
                        {availableConnectTypes.map((connectType) => (
                            <DropdownItem
                                key={`connect-${connectType}`}
                                onClick={() => connect(connectType)}
                                link="/">
                                Connect {connectType}
                            </DropdownItem>
                        ))}
                    </>)}
                {status === WalletStatus.WALLET_CONNECTED && (
                    <>
                        <DropdownItem
                            onClick={() => disconnect()}
                            link="/">
                            Disconnect
                        </DropdownItem>
                    </>
                )}
            </div>
        </div>
    );
}