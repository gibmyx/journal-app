// @flow
import * as React from 'react';
import {CssBaseline} from "@mui/material";
import {ThemeProvider} from "@emotion/react";
import {purpleTheme} from "./";

type Props = {
    children: JSX.Element
};
export const AppTheme = ({children}: Props) => {
    return (
        <ThemeProvider theme={purpleTheme}>
            <CssBaseline/>
            {children}
        </ThemeProvider>
    );
};