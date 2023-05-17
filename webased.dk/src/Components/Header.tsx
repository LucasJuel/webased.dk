import { Container, Grid } from '@mui/material'
import React from 'react'
import { Item } from '@mui/material/utils'

export default function Header() {
  return (
    <Container>
        <Grid>
            <Grid item lg={4}>
                <Item>Hej</Item>
            </Grid>
            <Grid item lg={4}>
                <Item>Hej</Item>
            </Grid>
            <Grid item lg={4}>
                <Item>Hej</Item>
            </Grid>
        </Grid>
    </Container>
  )
}
