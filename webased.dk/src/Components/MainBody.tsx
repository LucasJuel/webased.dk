import { CardContent, Container, Grid, SvgIcon, Typography, Card } from '@mui/material'
import "../Stylesheets/MainBody.css";
import React from 'react'
import placeholder from '../svg/palceholde.png'
import { CompanyLogo, ShortIntro } from './Extras'


function MainBody() {
  return (
    <Container maxWidth={false}>
      <TopRow/>
      <Spacer/>
      <SecondRow/>
      <Spacer/>
      <ThirdRow/>
      <Spacer/>
      <hr></hr>
      <Spacer/>
      <PrevWork/>
    </Container>
  )
}

const TopRow = () => {
  return (
    <Container>
      <div style={{ height: "8vh" }}></div>
      <Grid container spacing={5} justifyContent={'space-between'}>
        <Grid item xs={6} textAlign={'center'}>
          <CompanyLogo width={500}></CompanyLogo>
          <Typography variant="h6" >
            Din partner til at forvandle dit online footprint
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <ShortIntro/>
        </Grid>
      </Grid>
    </Container>
  )
}

const SecondRow = () => {
  return (
    <Container>
      <ShortIntro/>
    </Container>
  )
}

const ThirdRow = () => {
  return (
    <Container>
      <Grid container rowGap={10} justifyContent={'space-evenly'}>
        <Grid item>
          <ProductBox title="Title 1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in viverra lorem. Curabitur pretium sem ac arcu luctus maximus. Pellentesque ullamcorper dui felis, et dignissim purus rutrum sed. Nulla suscipit.</ProductBox>
        </Grid>
        <Grid item>
          <ProductBox title="Title 2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in viverra lorem. Curabitur pretium sem ac arcu luctus maximus. Pellentesque ullamcorper dui felis, et dignissim purus rutrum sed. Nulla suscipit.</ProductBox>
        </Grid>
        <Grid item>
          <ProductBox title="Title 3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in viverra lorem. Curabitur pretium sem ac arcu luctus maximus. Pellentesque ullamcorper dui felis, et dignissim purus rutrum sed. Nulla suscipit.</ProductBox>
        </Grid>
      </Grid>
    </Container>
  )
}
const ProductBox = ({...props}) => {
  return (
    <Card sx={{maxWidth: 275}} variant='outlined'>
      <CardContent>
        <Typography variant='h5'>
          {props.title}
        </Typography>
        <hr color="primary"></hr>
        <Typography variant='body2'> 
          {props.children}
        </Typography>
      </CardContent>
    </Card>
  )
}

const PrevWork = () => {
  return (
    <Typography>Hej</Typography>
  )
}

const Spacer = () => {
  return (
    <div style={{ height: "8vh" }}></div>
  )
}

export default MainBody