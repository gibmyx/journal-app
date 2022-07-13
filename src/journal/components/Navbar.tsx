// @flow
import * as React from 'react';
import {AppBar, Grid, IconButton, Toolbar, Typography} from "@mui/material";
import {LogoutOutlined, MenuOutlined} from "@mui/icons-material";

type Props = {
    drawerWidth: number
};
export const Navbar = ({drawerWidth}: Props) => {
    return (
        <AppBar
            position={"fixed"}
            sx={{
                width: {sm:`calc(100% - ${drawerWidth}px)` },
                ml: {sm: `${drawerWidth}`}
            }}
        >
            <Toolbar>
                <IconButton
                    color='inherit'
                    edge='start'
                    sx={{mr: 2, display: {sm: 'none'}}}
                >
                    <MenuOutlined/>
                </IconButton>
                <Grid container direction='row' justifyContent='space-between'>
                    <Typography variant='h6' noWrap component='div' alignItems='center'> JournalApp</Typography>
                    <IconButton color='error'>
                        <LogoutOutlined/>
                    </IconButton>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};