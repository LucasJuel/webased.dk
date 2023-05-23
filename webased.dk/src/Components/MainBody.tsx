import { Container, SvgIcon } from '@mui/material'
import React from 'react'
import companyLogo from '../svg/logogWname.png'

function MainBody() {
  return (
    <Container>
      <img src={companyLogo} style={{width: 400}}></img>
    </Container>
  )
}

export default MainBody