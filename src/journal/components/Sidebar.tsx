// @flow
import * as React from 'react';
import {
    Box,
    Divider,
    Drawer,
    Grid,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon, ListItemText,
    Toolbar,
    Typography
} from "@mui/material";
import {TurnedInNot} from "@mui/icons-material";

type Props = {
    drawerWidth: number
};
export const Sidebar = ({drawerWidth}: Props) => {
    return (
        <Box
            component='nav'
            sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}}
        >
            <Drawer
                variant='permanent'
                open
                sx={{
                    display: {xs: 'black'},
                    width: drawerWidth,
                    '& .MuiDrawar-paper': {BoxSizing: 'border-box'}
            }}
            >
                <Toolbar>
                    <Typography variant='h6' noWrap component='div'>
                        Gibmyx Gomez
                    </Typography>
                </Toolbar>
                <Divider />
                <List>
                    {
                        ['Enero', 'Febrero', 'Marzo', 'Abril'].map(text => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TurnedInNot/>
                                    </ListItemIcon>
                                    <Grid container>
                                        <ListItemText primary={text}/>
                                        <ListItemText secondary={"hi"}/>
                                    </Grid>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>
            </Drawer>
        </Box>
    );
};