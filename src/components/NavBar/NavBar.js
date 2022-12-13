import React from "react";
// import Logo from "../Logo";
import { Stack, Button } from "@mui/material/";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { QuoteModal } from "../QuoteModal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

// import { auth } from "../firebase";
import "./NavBar.css";
const NavBar = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function QuoteButton() {
    return (
      <Stack spacing={2} direction="row">
        <Button
          onClick={handleOpen}
          id="buttonQuote"
          size="large"
          variant="contained"
        >
          Get quote now!
        </Button>
      </Stack>
    );
  }
  const navigate = useNavigate();

  const handleClickHomeLink = () => {
    navigate("/");
  };

  // const handleClickContactLink = () => {
  //   navigate("/contact");
  // };
  return (
    <div className="navBar">
      {" "}
      {/* <Logo /> */}
      <div id="navItems">
        <a id="homeHeader" className="active" href="#landingPage">
          Home
        </a>
        <a href="#servicesDiv">Services</a>
        <a href="#projectPage">Projects</a>
        <a href="#contactTitle">Contact</a>
      </div>
      <div id="quoteDiv">
        <QuoteButton />
      </div>
      <Modal open={open} onClose={handleClose}>
        <QuoteModal />
      </Modal>
    </div>
  );
};
export default NavBar;
