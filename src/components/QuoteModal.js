import React from "react";
import Button from "@mui/material/Button";
import { createTheme } from "@mui/material/styles";
import "semantic-ui-css/semantic.min.css";
import ReactDOM from "react-dom";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";
import { Form, Input, TextArea } from "semantic-ui-react";
import { ThemeProvider } from "@emotion/react";
import { Stack } from "@mui/system";
const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#0991f1",
      darker: "#053e85",
    },
    neutral: {
      main: " rgb(255, 180, 221)",
      contrastText: "#fff",
    },
  },
});
export const QuoteModal = () => {
  const SERVICE_ID = "service_97xx9zl";
  const TEMPLATE_ID = "template_84a438j";
  const USER_ID = "QTsRxBkNhWhmkQvXo";
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Oops, something went wrong",
          text: error.text,
        });
      }
    );
    e.target.reset();
  };
  function BasicButtons() {
    return (
      <Stack spacing={2} direction="row">
        <Button
          className="type"
          id="submitQuote"
          type="submit"
          size="small"
          variant="contained"
        >
          Submit{" "}
        </Button>
      </Stack>
    );
  }
  return (
    <div>
      <div id="modalDiv">
        <Form onSubmit={handleOnSubmit}>
          <Form.Field
            id="modalInputs"
            name="from_name"
            className="type"
            type={"text"}
            style={{ width: "70%" }}
            required={true}
            control={Input}
            placeholder="Name:"
          />{" "}
          <Form.Field
            id="modalInputs"
            name="phone_number"
            className="type"
            control={Input}
            type={"tel"}
            style={{ width: "70%" }}
            required={true}
            placeholder="Phone Number:"
          />
          <Form.Field
            id="modalInputs"
            name="email"
            className="type"
            style={{ width: "70%" }}
            type={"email"}
            control={Input}
            required={true}
            placeholder="Email Address:"
          />
          <Form.Field
            id="modalInputs"
            control={Input}
            name="zipcode"
            className="type"
            type={"tel"}
            style={{ width: "70%" }}
            required={true}
            placeholder="Zipcode:"
          />
          <Form.Field
            id="modalInputs"
            control={Input}
            name="message"
            style={{ width: "70%" }}
            className="type"
            type={"tel"}
            required={true}
            placeholder="Services needed:"
          />
          <BasicButtons />
        </Form>
      </div>
    </div>
  );
};
