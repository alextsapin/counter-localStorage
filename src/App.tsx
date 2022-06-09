import React from 'react';
//import Button from './components/Button/Button';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const App = () => {
    return (
        <Container fixed>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid item md={4}>
                    <div className="incBox">
                        <TextField 
                            label="Max value" 
                            color="primary" 
                            type="number" 
                            focused 
                        />

                        <TextField 
                            className="mt-4" 
                            label="Min value" 
                            color="primary" 
                            type="number" 
                            focused 
                        />

                        <div className="btnBox btnBox__set mt-3"></div>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
}

export default App;