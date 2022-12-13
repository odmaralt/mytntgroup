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
          Whether it may be building your dream home or remodeling your house to
          make it even more spectacular, TNT Group has your back. When it comes
          time to find a general contractor, you need a team that’s reliable,
          affordable, and serves quality work. You need a contractor that can
          truly understand your vision, communicate effectively, and deliver
          results you love on time and on budget. TNT Group Construction will
          give you all this and more. Call now and get a free estimate on your
          next project!
        </p>
        <BasicButtons />
      </div>
    </div>
    </div>
    
  );
};

export default LandingPage;
