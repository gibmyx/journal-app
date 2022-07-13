// @flow
import * as React from 'react';
import {Box, Toolbar} from "@mui/material";
import {Navbar, Sidebar} from "../components";

type Props = {
    children: JSX.Element
};

const drawerWidth = 180;

export const JournalLayout = ({children}: Props) => {
    return (
        <Box sx={{display: 'flex'}}>
            {/*Navbar*/}
            <Navbar drawerWidth={drawerWidth}/>

            {/*Sidebar*/}
            <Sidebar drawerWidth={drawerWidth}/>

            <Box
                component='main'
                sx={{flexGrow: 1, p: 3}}
            >
                {/*Toolbar*/}
                <Toolbar/>
                {children}
            </Box>
        </Box>
    );
};