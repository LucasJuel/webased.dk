import React from 'react'
import { IsAuthed } from './Header'
import { Container, Typography } from '@mui/material'
import { User, useAuth0 } from '@auth0/auth0-react';
import { userInfo } from 'os';

function ProfilePage() {
  const { isAuthenticated, user } = useAuth0();
  console.log(user)

  return (
    <Container>
      <Typography>
        {User.name}
      </Typography>
    </Container>
  )
}

export default ProfilePage