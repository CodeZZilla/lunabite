import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import Header from "./Components/LandingPage/Header/Header";
import {getChainOptions, WalletProvider} from '@terra-money/wallet-provider';
import createGlobalStyle from "./GlobalFont"

getChainOptions().then((chainOptions) => {
    ReactDOM.render(
        <React.StrictMode>
            <WalletProvider {...chainOptions}>
                <createGlobalStyle/>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </WalletProvider>
        </React.StrictMode>,
        document.getElementById('root')
    );
})

