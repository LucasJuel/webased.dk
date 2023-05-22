import { Button, Container, Divider, Grid, IconButton } from '@mui/material'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';

export default function Header() {
    return (
        <Container>
            <Grid container justifyContent="space-between" alignItems="center" height={80}>
                <Grid item>
                    <Grid container spacing={4} alignItems="stretch">
                        <Grid item>
                            <Button>Option 1</Button>
                        </Grid>
                        <Grid item>
                            <Button>Option 2</Button>
                        </Grid>
                        <Grid item>
                            <Button>Option 3</Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container spacing={4} alignItems="stretch">
                        <Grid item>
                            <IconButton size="small">
                                <AccountCircleOutlinedIcon sx={{ fontSize: 30 }} color="primary" />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton size="small">
                                <PhoneEnabledIcon sx={{ fontSize: 30 }} color="primary" />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

        </Container>
    )
}
