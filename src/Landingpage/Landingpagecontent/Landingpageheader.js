import React, { useState } from "react";
import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import DehazeIcon from "@mui/icons-material/Dehaze";
import logo from "../../img/Home Service-02 1.png"

const pages = ["Home", "About", "Services"];

const Landingpageheader = ({ Home, About, Services,handleLinkClick }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {" "}
      <AppBar
        position="static"
        sx={{ backgroundColor: "white", padding: "7px 0" }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* <AdbIcon
              sx={{
                display: "flex",
                mr: 1,
                color: "#e03a3c",
              }}
            /> */}
            <div className="logo">
              <img src={logo} />
            </div>
            <Typography
              variant="h6"
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: "flex",
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                color: "#111111",
                fontFamily: "Poppins",
              }}
            >
              HOME SERVICE
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                  zIndex: "999999",
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} className="menubar-btn" onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
                <MenuItem  onClick={handleCloseNavMenu}>
                  <a href="tel:+91 9360880958" className="menubar-btn" textAlign="center" onClick={handleClickOpen}>
                    Contact us
                  </a>
                </MenuItem>
              </Menu>
            </Box>
           
           
            <Box
              className="header-btn-simple"
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
                gap: "20px",
              }}
            >
              
                <Button
                  onClick={() => handleLinkClick(Home)}
                  sx={{
                    my: 2,
                    color: "black",
                    display: "block",
                    fontFamily: "Poppins-SemiBold",
                  }}
                >
                  Home
                </Button>
                <Button
                  
                  onClick={() => handleLinkClick(About)}
                  sx={{
                    my: 2,
                    color: "black",
                    display: "block",
                    fontFamily: "Poppins-SemiBold",
                  }}
                >
                 About
                </Button>
                <Button
                 
                 onClick={() => handleLinkClick(Services)}
                  sx={{
                    my: 2,
                    color: "black",
                    display: "block",
                    fontFamily: "Poppins-SemiBold",
                  }}
                >
                  Service
                </Button>
             
            </Box>

            <div style={{ display: "flex" }}>
              <a href="tel:+91 9360880958" className="header-btn">
                Call Us
              </a>
            </div>
            <div>
              <div
                className="header-btn-icon"
                aria-label="delete"
                size="small"
                onClick={handleOpenNavMenu}
              >
                <DehazeIcon size="small" />
              </div>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
      
    </div>
  );
};

export default Landingpageheader;
