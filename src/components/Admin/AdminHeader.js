import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Typography } from "@mui/material";
import { Stack } from "@mui/material";
import { Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { makeStyles } from "@mui/styles";

const NavBarAdmin = () => {
  const useStyles = makeStyles({
    navbar: {
      width: "100%",
    },
  });
  const handleCheckout = () => {
    localStorage.removeItem("AdminClient");
  };
  const classes = useStyles();


  return (
    <header className={classes.navbar}>
      <AppBar
        style={{
          elevation: 0,
          position: "fixed",
          backgroundColor: "#032055",
        }}
      >
        <Toolbar>
          <Typography
            sx={{ flexGrow: 1, display: { xs: "none", md: "block" } }}
          >
            <img src="/img/footerlogo.jpg" alt="logo" />
          </Typography>
          <Stack spacing={2} direction="row">
            <Button href="/" onClick={handleCheckout}>
              <LogoutIcon
                sx={[
                  {
                    fontSize: "30px",
                    justifyContent: "flex-end",
                    display: { xs: "none", lg: "flex" },
                  },
                ]}
              />
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default NavBarAdmin;
