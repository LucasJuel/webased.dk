import { Container, Grid, SvgIcon, Typography } from '@mui/material'
import React from 'react'
import companyLogo from '../svg/logogWname.png'
import placeholder from '../svg/palceholde.png'
import gif from '../Extra/gif.gif'
import { GetShortIntro, GetCompanyLogo } from '../Extra/Extras'


function TopBody(){
  return(
    <Container>
      <Grid container justifyContent={'space-around'}>
        <Grid item textAlign={'start'}>
          <Typography variant='h4'>
            Skab dit eget
          </Typography>
          <Typography variant='h4' marginTop={-2} color="primary">
            online footprint
          </Typography>
        </Grid>
        <Grid item>
          <img src={gif} alt="loading"/>
        </Grid>
      </Grid>
    </Container>
  )
}

function MainBody() {
  return (
    <TopBody></TopBody>
  )
}

export default MainBody