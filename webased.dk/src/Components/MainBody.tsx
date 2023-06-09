import { Container, Grid, SvgIcon, Typography } from '@mui/material'
import React from 'react'
import companyLogo from '../svg/logogWname.png'
import placeholder from '../svg/palceholde.png'


function MainBody() {
  return (
    // <Container>
    //   <Typography variant='h2'>
    //     Velkommen til <img src={companyLogo} style={{ width: 400, marginLeft: 30, justifyContent: 'center' }} alt="" />
    //   </Typography>
    //   <hr></hr>
    //   <div style={{height: "200px"}}></div>
    //   <Grid container spacing={5} justifyContent={'space-evenly'}>
    //     <Grid item xs={6}>
    //       <Typography variant="body1" >
    //         Vi er din pålidelige partner inden for webudvikling og design. Vores ekspertise inkluderer skabelse af skræddersyede hjemmesider i HTML, CSS, JavaScript og Wordpress med integrerede databaser. Vi er dedikeret til at hjælpe lokale virksomheder med at etablere en stærk online tilstedeværelse ved at levere professionelle og moderne hjemmesideløsninger. Med vores tekniske ekspertise og kreative design skaber vi unikke hjemmesider, der afspejler din virksomhedsidentitet og budskab. Vi ser frem til at samarbejde med dig og hjælpe din virksomhed med at opnå online succes. Velkommen til Webased!
    //       </Typography>
    //     </Grid>
    //     <Grid item xs={5}>
    //       <img src={placeholder} alt=""/>
    //     </Grid>
    //   </Grid>
    // </Container>
    <Container>
      <div style={{ height: "8vh" }}></div>
      <Grid container spacing={5} justifyContent={'space-between'}>
        <Grid item xs={6} textAlign={'center'}>
          <img src={companyLogo} style={{ width: 500, justifyContent: 'center' }} alt="" />
          <Typography variant="h6" >
            Din partner til at forvandle dit online footprint
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1" >
            Webased er din dynamiske vej til online succes! Vi brænder for at skabe skræddersyede hjemmesider, der ikke kun imponerer, men også engagerer dine kunder. Med vores ekspertise i HTML, CSS, JavaScript og Wordpress er vi klar til at omdanne din vision til virkelighed og give din virksomhed den digitale platform, den fortjener. Sammen kan vi nå nye højder og tage din online tilstedeværelse til det næste niveau. Lad Webased være din partner på rejsen mod succes!          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

export default MainBody