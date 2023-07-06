import { Button, Container, Grid, Icon, Input, Link, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { CompanyLogo } from './Extras'

function Footer() {

    const [value, setValue] = useState("");

    return (
        <Container maxWidth={false} sx={{bgcolor: "whitesmoke", paddingTop: 15, paddingBottom: 5}}>
            <Grid container justifyContent={'space-between'} columnGap={2}>
                <Grid item xs={2}>
                    <CompanyLogo width={200}/>
                    <Typography variant='body2'>
                        Hej dette er en lille tekst
                    </Typography>
                </Grid>
                <Grid item xs={5}>
                    <Typography variant='body2'>
                        Dette er en lille overskrift
                    </Typography>
                    <Grid container alignItems={"center"}>
                        <Grid item xs={5}>
                            <TextField variant="filled" placeholder='Your E-Mail' size="small" fullWidth={true} onChange={(v) => setValue(v.target.value)}></TextField>
                        </Grid>
                        <Grid item>
                            <Button color="primary" onClick={() => console.log(value)}>Subscribe</Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={2}>  
                    <Typography variant='body2'>
                        Follow Us
                    </Typography>
                    <Grid container columnGap={3}>
                        <Grid item>
                            <Icon>Hej</Icon>
                        </Grid>
                        <Grid item>
                            <Icon>Hej1</Icon>
                        </Grid>
                        <Grid item>
                            <Icon>Hej2</Icon>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={2}>
                    <Typography variant='body2'>
                        Call Us
                    </Typography>
                    <br></br>
                    <Typography variant='body1'>
                        +45 28 45 60 70
                    </Typography>
                </Grid>
            </Grid>
            <hr></hr>
            <Grid container justifyContent={"space-between"}>
                <Grid item>
                    <Typography variant="body2">
                        © 2023 Webased. Digitalt Footprint Agentur, Danmark. All Rights Reserved
                    </Typography>
                </Grid>
                <Grid item>
                    <Grid container columnGap={6}>
                        <Grid item>
                            <Link href="#">Privatlivs Politik</Link>
                        </Grid>
                        <Grid item>
                            <Link href="#">Købsbetingelser</Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <br></br>
        </Container>
    )
}

export default Footer