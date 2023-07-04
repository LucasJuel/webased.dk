import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import placeholder from "../svg/palceholde.png"

function Body() {
  return (
    <div>
        <Container maxWidth={false} style={{backgroundColor: '#4D7E3E', height: "29vw"}}>
            <Grid container>
                <Grid item xs={6} padding={8}> 
                    <Typography variant={"h4"}>Title</Typography>
                    <Typography variant={"body1"}>Sut den</Typography>
                </Grid>
                <Grid item xs={6} justifyContent={'flex-end'}>
                    <img src={placeholder} style={{height: "29vw"}}></img>
                </Grid>
            </Grid> 
        </Container>
        <Container maxWidth={false} style={{backgroundColor: '#205c0e7e', height: "29vw"}}>
            <Grid container>
                <Grid item xs={6} justifyContent={'flex-end'}>
                    <img src={placeholder} style={{height: "29vw"}}></img>
                </Grid>
                <Grid item xs={6} padding={8}> 
                    <Typography variant={"h4"}>Title</Typography>
                    <Typography variant={"body1"}>Sut den</Typography>
                </Grid>
            </Grid> 
        </Container>
    </div>
  )
}

export default Body
