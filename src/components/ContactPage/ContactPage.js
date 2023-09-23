import React from "react";
import { Stack, Button } from "@mui/material/";
// import ReactDOM from ‘react-dom';
import "semantic-ui-css/semantic.min.css";
import ReactDOM from "react-dom";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";
import { Form, Input, TextArea } from "semantic-ui-react";

import "./ContactPage.css";
export const ContactPage = () => {
  const SERVICE_ID = "service_97xx9zl";
  const TEMPLATE_ID = "template_pm49olr";
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
          id="submit"
          type="submit"
          size="medium"
          variant="contained"
        >
          Submit{" "}
        </Button>
      </Stack>
    );
  }
  return (
    <div>
      <div id="container">
        <div id="box">
          <p id="contactTitle">Contact Us</p>
          <div >
            <Form
              onSubmit={handleOnSubmit}
            >
              <Form.Field
                // id="name"
                name="from_name"
                className="type"
                type={"text"}
                required={true}
                id="name"
                control={Input}
                placeholder="Name"
              />{" "}
              <Form.Field
                id="number"
                name="phone_number"
                className="type"
                control={Input}
                type={"tel"}
                required={true}
                placeholder="Phone Number"
              />
              <Form.Field
                id="email"
                name="email"
                className="type"
                type={"email"}
                control={Input}
                required={true}
                placeholder="Email Address"
              />
              <Form.Field
                id="info"
                control={Input}
                name="message"
                // className="big"
                type={"tel"}
                required={true}
                placeholder="How can we help you?"
              />
              <div id="bt">
                <BasicButtons />
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};
