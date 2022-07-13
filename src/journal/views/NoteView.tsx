// @flow
import * as React from 'react';
import {Button, Grid, TextField, Typography} from "@mui/material";
import {SaveOutlined} from "@mui/icons-material";
import {ImageGallery} from "../components";

type Props = {};
const NoteView = (props: Props) => {
    return (
        <Grid container direction="row" justifyContent="space-between" alignItems="center" sx={{mb: 1}}>
            <Grid item>
                <Typography fontSize={39} fontWeight="lighter"> 28 de agosto 2023</Typography>
            </Grid>
            <Grid item>
                <Button color="primary" sx={{padding: 2}}>
                    <SaveOutlined sx={{fontSize: 30, mr: 1}}/>
                    Guardar
                </Button>
            </Grid>
            <Grid container>
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="Ingrese un titulo"
                    label="Titulo"
                    sx={{border: 'none', mb: 1}}
                />
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="¿Qué sucedió en el día de hoy?"
                    rows={5}
                    sx={{border: 'none', mb: 1}}
                />
            </Grid>
            <Grid container>
                <ImageGallery/>
            </Grid>
        </Grid>
    );
};

export default NoteView