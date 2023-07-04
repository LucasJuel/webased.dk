import {
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  Popover,
  Typography,
} from "@mui/material";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import ManageAccountsRoundedIcon from "@mui/icons-material/ManageAccountsRounded";
import { useAuth0 } from "@auth0/auth0-react";
import { CompanyLogo } from "./Extras";
import React from "react";

export default function Header() {
  const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
    return (
      <IconButton size="small" onClick={() => loginWithRedirect()}>
        <AccountCircleOutlinedIcon sx={{ fontSize: 30 }} color="primary" />
      </IconButton>
    );
  };

  const AccountButton = () => {
    const { isAuthenticated, user } = useAuth0();

    console.log(user?.name);

    if (isAuthenticated) {
      return (
        <IconButton size="small" onClick={() => console.log("hej")}>
          <ManageAccountsRoundedIcon sx={{ fontSize: 30 }} color="primary" />
        </IconButton>
      );
    } else {
      return <LoginButton></LoginButton>;
    }
  };

  const LogoutButton = () => {
    const { logout } = useAuth0();
    return (
      <button
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
      >
        Log Out
      </button>
    );
  };

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Container maxWidth={false}>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        height={80}
        marginBottom={10}
      >
        <Grid item>
          <Grid container spacing={4} alignItems={"center"}>
            <Grid item sx={{ marginRight: 10 }}>
              <CompanyLogo width={180} />
            </Grid>
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
              <AccountButton></AccountButton>
            </Grid>
            <Grid item>
              <IconButton size="small" onClick={handleClick}>
                <PhoneEnabledIcon sx={{ fontSize: 30 }} color="primary" />
              </IconButton>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
              >
                <Typography sx={{ p: 2 }}>
                  <strong>Mail: </strong>lucas@webased.dk{" "}
                </Typography>
                <Typography sx={{ p: 2 }}>
                  <strong>Telefon: </strong>28456070{" "}
                </Typography>
              </Popover>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
