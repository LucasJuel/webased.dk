import React from 'react'
import { Container, Typography } from '@mui/material'
import {useAuth0 } from '@auth0/auth0-react';
import { userInfo } from 'os';

function ProfilePage() {
  const { isAuthenticated, user } = useAuth0();
  console.log(user?.address)

  return (
    <Container>
      <Typography>
        {user?.name}
      </Typography>
    </Container>
  )
}

export default ProfilePage