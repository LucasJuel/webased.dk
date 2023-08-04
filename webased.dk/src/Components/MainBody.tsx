import { CardContent, Container, Grid, SvgIcon, Typography, Card, CardActionArea, CardMedia, Button, CardActions } from '@mui/material'
import "../Stylesheets/MainBody.css";
import React from 'react'
import placeholder from '../svg/palceholde.png'
import lifehub from '../svg/iPhone_13_12_Pro_Max_1.png'
import afklar from '../svg/afklar.dk.png'
import { CompanyLogo, ShortIntro, PreviousWorkText, ProductTagline } from './Extras'


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
      <Spacer/>
      <hr></hr>
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
      <ProductTagline/>
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
    <Container>
      <Typography variant='h3' textAlign={"center"}>Tidligere Projekter</Typography>
      <Spacer/>
      <PreviousWorkText/>
      <Spacer/>
      <Grid container justifyContent={"space-around"}>
        <Grid item>
          <WorkBox 
            imgPath={lifehub}
            title="Lifehub"
            desc="Lifestyle mobile app designet til at give brugeren et overblik over deres dag."
            buttonLink="https://github.com/DeMoManique/SoftwareProjektJuni"
            buttonText="Github"
            />
        </Grid>
        <Grid item>
        <WorkBox 
            imgPath={afklar}
            title="Afklar.dk"
            desc="afklar.dk er en virksomhed der er målrettet mod at danne et mere professionelt tekst look."
            buttonLink="https://afklar.dk"
            buttonText="Gå til"
            />
        </Grid>
        <Grid item>
        <WorkBox 
            imgPath={placeholder}
            title="Modesaxen"
            desc="Modesaxen er en super hyggelig familie frisørsalon på Valby Langgade"
            buttonLink="https://modesaxen.dk"
            buttonText="Under opbygning"
            />
        </Grid>
      </Grid>
    </Container>
  )
}

const WorkBox = ({...props}) => {
  return (
    <Card sx={{width: 305}} className='cardAnim'>
      <CardMedia 
        sx={{ height: 180 }}

        image={props.imgPath}
      />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {props.desc}
        </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" href={props.buttonLink} target='_blank'>{props.buttonText}</Button>
      </CardActions>
    </Card>
  )
}

const Spacer = () => {
  return (
    <div style={{ height: "8vh" }}></div>
  )
}

export default MainBody