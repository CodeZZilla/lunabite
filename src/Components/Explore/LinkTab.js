import React from "react"
import {Tab} from "@mui/material";


export default function LinkTab(props) {
    return (
        <Tab
            sx={{
                fontSize:'14px',
                fontWeight:'700',
                color: '#6F6F6F',
                '&:hover': {
                    color: '#000000',
                    opacity: 1,
                },
                '&.Mui-selected': {
                    color: '#A7A7FF',
                },
                '&.Mui-focusVisible': {
                    backgroundColor: '#A7A7FF',
                },
                '&.MuiTouchRipple-root' :{
                    backgroundColor: '#A7A7FF',
                }
            }}
            component="Link"
            onClick={(event) => {
                event.preventDefault();
            }}
            {...props}
        />
    );
}
