// @flow
import * as React from 'react';
import {AuthLayout} from "../layout/AuthLayout";
import {Button, Grid, Link, TextField, Typography} from "@mui/material";
import {Google} from "@mui/icons-material";
import {Link as RouterLink} from "react-router-dom";

type Props = {

};
export const RegisterPage = (props: Props) => {
    return (
        <AuthLayout title={"Register"}>
            <form>
                <Grid container>
                    <Grid item xs={12}>
                        <TextField
                            label="Nombre completo"
                            type="test"
                            placeholder="tu nombre"
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={12} sx={{mt: 2}}>
                        <TextField
                            label="Correo"
                            type="email"
                            placeholder="example@example.com"
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={12} sx={{mt: 2}}>
                        <TextField
                            label="Contraseña"
                            type="password"
                            placeholder="Contraseña"
                            fullWidth
                        />
                    </Grid>

                    <Grid
                        container
                        spacing={2}
                        sx={{mb: 2, mt: 1}}
                    >
                        <Grid item xs={12}>
                            <Button variant='contained' fullWidth>
                                Crear cuenta
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container
                          direction="row"
                          justifyContent="end"
                    >
                        <Typography sx={{mr: 1}}>¿Ya tienes cuenta?</Typography>
                        <Link component={RouterLink} color="inherit" to="/auth/login">
                            ingresar
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    );
};