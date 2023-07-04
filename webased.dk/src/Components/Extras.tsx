import React from 'react'
import companyLogo from '../svg/logogWname.png'
import { Typography } from '@mui/material'

const CompanyLogo = ({...props}) =>{
    return (
        <img src={companyLogo} style={{ width: props.width, justifyContent: 'center' }} alt=""/>
    )
}

function ShortIntro(){
    return (
        <Typography variant="body1">
            "Webased er din dynamiske vej til online succes! Vi brænder for at skabe skræddersyede hjemmesider, der ikke kun imponerer, men også engagerer dine kunder. Med vores ekspertise i HTML, CSS, JavaScript og Wordpress er vi klar til at omdanne din vision til virkelighed og give din virksomhed den digitale platform, den fortjener. Sammen kan vi nå nye højder og tage din online tilstedeværelse til det næste niveau. Lad Webased være din partner på rejsen mod succes!"
        </Typography>
    )
}

export {CompanyLogo, ShortIntro}
