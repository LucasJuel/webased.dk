import React from 'react'
import companyLogo from '../svg/logogWname.png'


function Extras() {
}

function GetShortIntro() {
    return ("Webased er din dynamiske vej til online succes! Vi brænder for at skabe skræddersyede hjemmesider, der ikke kun imponerer, men også engagerer dine kunder. Med vores ekspertise i HTML, CSS, JavaScript og Wordpress er vi klar til at omdanne din vision til virkelighed og give din virksomhed den digitale platform, den fortjener. Sammen kan vi nå nye højder og tage din online tilstedeværelse til det næste niveau. Lad Webased være din partner på rejsen mod succes!")
}

function GetCompanyLogo(){
    return(<img src={companyLogo} style={{ width: 500, justifyContent: 'center' }} alt="" />)
}

export {Extras, GetShortIntro, GetCompanyLogo}