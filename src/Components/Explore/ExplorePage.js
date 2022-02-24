import React, {useState} from 'react';
import styled from "styled-components";
import {ExploreBlock, LinkTabStyled} from "../styles/ExploreStyled/ExplorePage.styled";
import {Box, Tab, Tabs} from "@mui/material";
import LinkTab from "./LinkTab";
import CollectionSection from "../CollectionCard/CollectionSection";

const AntTabs = styled(Tabs)({
    borderBottom: '1px solid #e8e8e8',
    '& .MuiTabs-indicator': {
        backgroundColor: '#A7A7FF',
    },
});

export default function ExplorePage() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <ExploreBlock>
            <h1>Explore Collections</h1>
            <Box sx={{
                width: '90%',
                height:'100%',
                '& .MuiTabs-flexContainer':{
                    justifyContent:'center'
                }
            }}>
                <AntTabs allowScrollButtonsMobile value={value} onChange={handleChange}>
                    <LinkTab label="Trending" to="/trash"/>
                    <LinkTab label="Top" to="/trash"/>
                    <LinkTab label="Art" to="/spam"/>
                    <LinkTab label="Collectibles" to="/spam"/>
                    <LinkTab label="Domain Names" to="/spam"/>
                    <LinkTab label="Music" to="/spam"/>
                    <LinkTab label="Photography" to="/spam"/>
                    <LinkTab label="Sports" to="/spam"/>
                    <LinkTab label="Trading cars" to="/spam"/>
                    <LinkTab label="Utility" to="/spam"/>
                    <LinkTab label="Virtual worlds" to="/spam"/>
                </AntTabs>
            </Box>
            <CollectionSection/>
        </ExploreBlock>
    )
}