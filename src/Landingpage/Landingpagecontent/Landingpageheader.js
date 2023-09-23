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
            <AdbIcon
              sx={{
                display: "flex",
                mr: 1,
                color: "#e03a3c",
              }}
            />
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
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" onClick={handleClickOpen}>
                    Contact us
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
            <AdbIcon sx={{ display: "flex", mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: "flex",
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              HOME SERVICE
            </Typography>
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
              <button className="header-btn" onClick={handleClickOpen}>
                Contant Us
              </button>
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
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ fontFamily: "Poppins-SemiBold" }}>
          Contact Us
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <TextField
                className="contactusform "
                label="Full Name"
                size="small"
              />
              <TextField
                className="contactusform "
                label="Email"
                size="small"
              />
              <TextField
                className="contactusform "
                label="Number"
                size="small"
              />
              <TextField
                className="contactusform "
                size="small"
                id="outlined-multiline-static"
                label="Message"
                multiline
                rows={4}
              />
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>cancel</Button>
          <button className="sumbit-contactus" onClick={handleClose} autoFocus>
            Submit
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Landingpageheader;
