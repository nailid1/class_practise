import { Box, Typography } from "@mui/material";
import React from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { passwordReset } from "../../config/FirebaseForgot";
export class ForgotPassword extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      emailMsg: false,
    };
  }

  handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      await passwordReset(this.state.email);
      this.setState({ emailMsg: true });
      console.log("try running ..")
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        alert("User not found, try again!");
        this.setState({ email: "" });
        console.log("catch running ..")
      }
    }
  };
  render() {
    return (
      <>
        <Box>
          {this.state.emailMsg ? (
            <h3>The Email has been sent; Check your Inbox!</h3>
          ) : (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                margin: "150px",
                gap: "20px",
              }}
            >
              <Typography variant="h4">Forgot Password</Typography>
              <TextField
                type="email"
                name="email"
                id="outlined-basic"
                label="Please Enter Your Registered Email"
                variant="outlined"
                onChange={(e) => this.setState({ email: e.target.value })}
              />
              <Button variant="contained" onClick={this.handleForgotPassword}>
                Reset Password
              </Button>
            </Box>
          )}
        </Box>
        {/* <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            margin: "150px",
            gap: "20px",
          }}
        >
          {
          this.state.emailMsg ? <h3>The Email has been sent; Check your Inbox!</h3> :<Typography variant="h4">Forgot Password</Typography>
          
          <TextField
            id="outlined-basic"
            label="Reset Your Password"
            variant="outlined"
          />
          <Button variant="contained">Reset Password</Button>
          }
        </Box> */}
      </>
    );
  }
}
