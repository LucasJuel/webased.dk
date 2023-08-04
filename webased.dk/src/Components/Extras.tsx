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
            Webased er din dynamiske vej til online succes! Vi brænder for at skabe skræddersyede hjemmesider, der ikke kun imponerer, men også engagerer dine kunder. Med vores ekspertise i HTML, CSS, JavaScript og Wordpress er vi klar til at omdanne din vision til virkelighed og give din virksomhed den digitale platform, den fortjener. Sammen kan vi nå nye højder og tage din online tilstedeværelse til det næste niveau. Lad Webased være din partner på rejsen mod succes!
        </Typography>
    )
}

function PreviousWorkText(){
    return(
        <Typography variant="body1" textAlign={"center"}>
            Vi er stolte af vores imponerende portefølje af tidligere software- og hjemmesideprojekter, der viser vores evne til at levere skræddersyede løsninger og enestående brugeroplevelser. Gennem vores dedikerede team af erfarne udviklere og designere har vi hjulpet vores kunder med at optimere deres forretningsprocesser, forbedre produktiviteten og styrke deres online tilstedeværelse. Vores mål er altid at levere løsninger, der skaber værdi og resultater for vores kunder.
        </Typography>
    )
}

function ProductTagline(){
    return (
        <Typography variant="h6" textAlign={"center"}>

Optimér din forretning med vores topmoderne løsninger! Skab succes med vores skræddersyede produkter, designet til at imponere og engagere dit publikum. Lad vores ekspertise inden for innovation og teknologi løfte dit brand til nye højder</Typography>
    )
}

export {CompanyLogo, ShortIntro, PreviousWorkText, ProductTagline}
