import * as React from "react";
import "./LandingPage.css";

import { Stack, Button } from "@mui/material/";

const LandingPage = () => {
  function BasicButtons() {
    return (
      <Stack spacing={2} direction="row">
        <Button id="buttonHome" size="large" variant="contained">
          <a href="tel:4257707900">Call now</a>{" "}
        </Button>
      </Stack>
    );
  }
  return (
    <div id="landingPage">
      <div id="firstPage">
        <div id="imgDiv">
          <h1 id="header">TNT Group Construction</h1>
          <p>
            Whether you're building your dream home or sprucing up your current
            one, TNT Group is here for you. When you need a trustworthy,
            affordable, and skilled contractor who listens to your ideas,
            communicates well, and delivers on time and within budget, turn to
            TNT Group Construction. Contact us now for a free project estimate!
          </p>
          <BasicButtons />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
