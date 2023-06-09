import { Button, Container, Grid } from '@mui/material'
import React from 'react'
import { } from '@mui/material/utils'

function openApp(){
  
}

export default function Header() {
  return (
    <Container>
        <Grid container alignItems="center" justifyContent="space-evenly" spacing={2}>
            <Grid item lg={4}>
              Hej
            </Grid>
            <Grid item lg={4}>
              Hej2
            </Grid>
            <Grid item lg={4}>
              <Button onClick={() => openApp()}>Knap 1</Button>
            </Grid>
        </Grid>
    </Container>
  )
}
