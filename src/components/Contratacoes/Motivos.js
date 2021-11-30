import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Talk from '../../assets/tongues.png'


const Motivos = () => {
    return(
        <Grid 
            container 
            rowSpacing={1} 
            columnSpacing={2}
            directionn="row"
            justifyContent="center"
            alignItems="center"
            >
            <Grid item xs={6} spacing={3}>
                <img src={Talk} alt=""/>
                <Typography variant="subtitle2" > Exemplo </Typography>
            </Grid>
            <Grid item xs={6}>
                <img src={Talk} alt=""/>
                <Typography variant="subtitle2" > Exemplo </Typography>
            </Grid>
            <Grid item xs={6}>
                <img src={Talk} alt=""/>
                <Typography variant="subtitle2" > Exemplo </Typography>
            </Grid>
            <Grid item xs={6}>
                <img src={Talk} alt=""/>
                <Typography variant="subtitle2" > Exemplo </Typography>
            </Grid>
            <Grid item xs={6}>
                <img src={Talk} alt=""/>    
                <Typography variant="subtitle2" > Exemplo </Typography>
            </Grid>
            <Grid item xs={6}>
                <img src={Talk} alt=""/>
                <Typography variant="subtitle2" > Exemplo </Typography>
            </Grid>
        </Grid>
    );
}

export default Motivos;