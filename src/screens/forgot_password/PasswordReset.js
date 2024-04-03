import React from "react";
import { confirmThePasswordReset } from "../../config/FirebaseForgot";
import { withRouter } from "../register/WithRouter";
import { Box, Button, TextField } from "@mui/material";
import { useLocation } from "react-router-dom";
const defaultFormFields = {
  password: "",
  confirmPassword: "",
};

// const oobCode = urlpara();
export function ParentLocation() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const oobCode = searchParams.get("oobCode");
  return <PasswordReset oobCode={oobCode} />;
}
class PasswordReset extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      successMessage: false,
      formFields: defaultFormFields,
    };
  }
  resetFormFields = () => {
    this.setState({ formFields: defaultFormFields });
  };

  handleReset = async (e) => {
    e.preventDefault();
    const { password, confirmPassword } = this.state.formFields;
    if (password !== confirmPassword) {
      alert("Passwords did not match.");
      return;
    }
    const { oobCode } = this.props;
    // const { location } = this.props;
    // const { search } = this.props;
    // const searchParams = new URLSearchParams(search);
    // //const oobCode = searchParams.get("oobCode");
    // const oobCode = "jRlXQs-Pn0LVv9Z4Eh0XHr3yhxUuOTN3ftkCWZcbIsMAAAGOUN3BRg";
    // let oobCode = searchParams.get
    try {
      if (oobCode) {
        await confirmThePasswordReset(oobCode, confirmPassword);
        this.resetFormFields();
        this.setState({ successMessage: true });
        this.props.navigation("/")
      } else {
        alert("Something is wrong; try again later!");
        console.log("missing oobCode");
      }
    } catch (error) {
      if (error.code === "auth/invalid-action-code") {
        alert("Something is wrong; try again later.");
      }
      console.log(error.message);
    }
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      formFields: { ...prevState.formFields, [name]: value },
    }));
  };
  render() {
    const { password, confirmPassword } = this.state.formFields;
    const { successMessage } = this.state;
    if (successMessage) {
      return (
        <div>
          <h3>Success! Your Password changed successfully</h3>
          <button onClick={() => this.props.navigation("/")}>
            Go to the Login page
          </button>
        </div>
      );
    }
    return (
      <>
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
          <Box>
            <TextField
              type="password"
              name="password"
              value={password}
              label="Enter Password"
              variant="outlined"
              onChange={this.handleChange}
            />
          </Box>
          <Box>
            <TextField
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              label="Enter Confirm Password"
              variant="outlined"
              onChange={this.handleChange}
            />
          </Box>
          <Box>
            <Button variant="contained" onClick={this.handleReset}>
              Reset Password
            </Button>
          </Box>
        </Box>
      </>
    );
  }
}

export default withRouter(PasswordReset);
