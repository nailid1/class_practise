import React from "react";
import aliphImg from "../../assets/aliph1.png";
import Button, { ButtonProps } from "@mui/material/Button";
import {
  Box,
  IconButton,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import loginBg1 from "../../assets/loginBg.png";
import sideImg from "../../assets/sideLogin.png";
import imgBottom from "../../assets/imgBottom.png";
import { withRouter } from "../register/WithRouter";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/FirebaseConfig";
import { Link } from "react-router-dom";

class LoginNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
      email: "",
      password: "",
      error: false,
    };
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleClickShowPassword = () => {
    this.setState({
      showPassword: !this.state.showPassword,
    });
  };
  login = () => {
    const { signIn } = this.props;
    if (!this.state.email && !this.state.password) {
      this.setState({ error: true });
    } else {
      this.setState({ error: false });
    }
    try {
      signInWithEmailAndPassword(auth, this.state.email, this.state.password)
        .then((res) => {
          const user = res.user;
          console.log("user -- ", user);
          signIn();
          this.props.navigation("/side");
        })
        .catch((err) => {
          console.log("err -- > ", err);
          // this.setState({error: err})
          if (err === "auth/invalid-email") {
            alert("Invalid email");
            // this.setState({error: err})
          }
        });
    } catch (error) {
      alert(error);
    }
  };
  render() {
    return (
      <>
        <Box sx={webStyles.box1}>
          <Box component="img" src={aliphImg} sx={webStyles.imgAliph}></Box>
          <Box component="img" src={loginBg1} sx={webStyles.imgBg1}></Box>
        </Box>
        <Box sx={webStyles.formContainer} data-testid="login-form">
          <Box sx={webStyles.formBox}>
            <Box sx={webStyles.textBox}>
              <Typography variant="h6" style={webStyles.headTypo}>
                LOG IN
              </Typography>
              <Typography variant="subtitle1" style={webStyles.typoDes}>
                Please enter your registered phone number and password to login.
              </Typography>
              {this.state.error ? (
                  <small className="error-field" style={webStyles.error}>
                    Required Field !
                  </small>
                ) : null}
              <Box sx={webStyles.field}>
                <Box>
                  <InputLabel sx={webStyles.labelInput} data-testid="contact">
                    Email
                  </InputLabel>
                  <CssTextField
                    name="email"
                    type="email"
                    data-testid="contact1"
                    variant="outlined"
                    id="contact"
                    value={this.state.email}
                    onChange={(e) => {
                      this.handleChange(e);
                    }}
                  />
                </Box>
                <Box>
                  <InputLabel
                    sx={webStyles.labelInput}
                    data-testid="password"
                    id="password1"
                  >
                    Password
                  </InputLabel>
                  <CssTextField
                    data-testid="password1"
                    name="password"
                    type="password"
                    variant="outlined"
                    value={this.state.password}
                    onChange={(e) => {
                      this.handleChange(e);
                    }}
                  ></CssTextField>
                </Box>
              </Box>
              <Box sx={webStyles.btnBox}>
                <ColorButton
                  variant="contained"
                  data-testid="login-btn"
                  onClick={this.login}
                >
                  Login
                </ColorButton>
              </Box>
            </Box>
            <Box sx={webStyles.formInner}></Box>
            <Box sx={webStyles.forgotBox}>
              <Typography variant="subtitle1" sx={webStyles.forgotPass}>
                <Link
                  to={"/forgot"}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Forgot Password ?
                </Link>
              </Typography>
            </Box>
            <Box sx={webStyles.lastBox}>
              <Typography variant="subtitle1" sx={webStyles.accTypo}>
                <Link
                  to={"/register"}
                  style={{ textDecoration: "none", color: "blue" }}
                >
                  New User? Create Account.
                </Link>
              </Typography>
            </Box>
          </Box>
          <Box component="img" src={sideImg} sx={webStyles.imgSide}></Box>
        </Box>
        <Box component="img" src={imgBottom} sx={webStyles.imgBg2}></Box>
      </>
    );
  }
}

export default withRouter(LoginNew);

const CssTextField = styled(TextField)({
  "& .MuiInput-underline:after": {
    borderBottomColor: "#B2BAC2",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#E0E3E7",
      width: "26vw",
      borderRadius: "12px",
      "@media (min-width:600px) and (max-width:900px)": {
        width: "55vw",
      },
      "@media (min-width:300px) and (max-width:599px)": {
        width: "70vw",
        height: "6.236vh",
      },
    },
    "&:hover fieldset": {
      borderColor: "#B2BAC2",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#6F7E8C",
    },
  },
});
const ColorButton = styled(Button)(
  //    <ButtonProps>
  ({ theme }) => ({
    backgroundColor: "#3FB98C",
    fontFamily: "Montserrat-Bold",
    fontWeight: "600",
    fontSize: "16px",
    // lineHeight: "24px",
    borderRadius: "8px",
    width: "26vw",
    height: "6.2vh",
    "&:hover": {
      backgroundColor: "#3FB98C",
    },
    marginTop: "3vw",
    "@media (min-width:600px) and (max-width:900px)": {
      width: "55vw",
      height: "6.3vh",
    },
    "@media (min-width:900px) and (max-width:1500px)": {
      marginTop: "4vw",
    },
    "@media (min-width:300px) and (max-width:599px)": {
      marginTop: "15vw",
      marginLeft: "0.52vw",
      width: "72vw",
      height: "6.23vh",
    },
  })
);

const webStyles = {
  error: { color: "red", fontWeight: "400", fontSize:"18px" },
  eye: {
    ml: {
      xl: "12vw",
      "@media (min-width:1600px) and (max-width:1700px)": {
        marginLeft: "10vw",
      },
      "@media (min-width:1701px) and (max-width:1800px)": {
        marginLeft: "11vw",
      },
      "@media (min-width:1536px) and (max-width:1599px)": {
        marginLeft: "9.5vw",
      },
      "@media (min-width:1470px) and (max-width:1535px)": {
        marginLeft: "8.8vw",
      },
      "@media (min-width:1400px) and (max-width:1469px)": {
        marginLeft: "8vw",
      },
      "@media (min-width:1300px) and (max-width:1399px)": {
        marginLeft: "6.5vw",
      },
      "@media (min-width:1200px) and (max-width:1299px)": {
        marginLeft: "5vw",
      },
      "@media (min-width:1100px) and (max-width:1199px)": {
        marginLeft: "3vw",
      },
      "@media (min-width:900px) and (max-width:970px)": {
        marginLeft: "-2.5vw",
      },
      "@media (min-width:600px) and (max-width:900px)": {
        display: "none",
      },
      "@media (min-width:300px) and (max-width:599px)": {
        display: "none",
      },
    },
  },
  box1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    ml: "42vw",
    "@media (min-width:600px) and (max-width:899px)": {},
  },
  imgAliph: {
    height: "13.2vh",
    width: "10.8vw",
    mt: "-3vh",
    "@media (min-width:450px) and (max-width:1280px)": {
      margin: "0.5208333333333334vw",
      height: "10vh",
      width: "15vh",
      marginRight: "300px",
      marginTop: "45px",
    },
    "@media (min-width:300px) and (max-width:900px)": {
      display: "none",
    },
  },
  imgBg1: {
    width: "32.424vw", //622.53
    // height: "52vh",
    top: "-25.9vw",
    left: "94.9vw",
    radius: "5.73vw",
    border: "1.93vw",
    rotation: "-72.36°",
    ml: "20vw",
    mt: "-2vh",
    "@media(max-width:900px)": {
      display: "none",
    },
    "@media (min-width:1400px) and (max-width:1500px)": {
      ml: "26.04vw",
    },
  },
  formContainer: {
    display: "flex",
    gap: "5vw",
    mt: "-1vw",
    width: "69.89",
    top: "12.29vw",
    left: "15.05vw",
    position: "absolute",
    "@media (min-width:450px) and (max-width:1280px)": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      top: "220px",
      width: "1342px",
      left: "200px",
    },
    "@media (min-width:360px) and (max-width:449px)": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "",
      top: "25vw",
      width: "80vw",
      left: "16.02vw",
    },
  },
  formBox: {
    width: "26vw",
    height: "55vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: "0.8vw",
    "@media (min-width:450px) and (max-width:1280px)": {
      width: "150vw",
      height: "110vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      marginTop: "-25vh",
      marginLeft: "-50vw",
    },
    "@media (min-width:360px) and (max-width:449px)": {
      marginLeft: "22.5vw",
      marginTop: "2vw",
    },
  },
  imgSide: {
    width: "38.65vw",
    height: "57.89vh",
    "@media (max-width:900px)": {
      display: "none",
    },
  },
  imgBg2: {
    ml: "-70vw",
    mb: "-2.2vh",
    Width: "33vw",
    Height: "52vh",
    Top: "869px",
    Left: "379.76px",
    Radius: "110.13px",
    Border: "37.13px",
    Rotation: "-72.36°",
    marginTop: "50.1vh",
    "@media (min-width:450px) and (max-width:1280px)": {
      display: "none",
    },
    "@media (max-width:900px)": {
      display: "none",
    },
  },
  textBox: {
    width: "26vw",
    height: "8vh",
    "@media (min-width:450px) and (max-width:1280px)": {
      width: "60vw",
      height: "12vh",
    },
    "@media (min-width:300px) and (max-width:599px)": {
      width: "327px",
      height: "82px",
    },
  },
  formInner: {
    width: "26vw",
    height: "42.7vh",
    "@media (min-width:300px) and (max-width:599px)": {
      width: "16.25vw",
      height: "19.58vw",
    },
  },
  headTypo: {
    fontWeight: "700",
    fontSize: "24px",
    lineHeight: "32px",
    letterSpacing: "-0.5%",
    color: "#031417",
    fontFamily: "Montserrat-Bold",
  },
  typoDes: {
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "17.07px",
    color: "#333333",
    mb: "-10vh",
    fontFamily: "Montserrat",
  },
  field: {
    display: "flex",
    flexDirection: "column",
    mt: "5vh",
    width: "35vw",
    height: "9.7",
    gap: "3vh",
    textAlign: "justify",
    "@media (min-width:450px) and (max-width:1280px)": {
      width: "35vw",
      height: "9.7",
    },
  },
  labelInput: {
    color: "#031417",
    fontWeight: "700",
    fontSize: "18px",
    // lineHeight: "24px",
    // mb: "10px",
    ml: "0.5vw",
    fontFamily: "Montserrat-Bold",
  },
  btnBox: {
    // mt: "-30px",
    // mb: "10px",
    "@media (min-width:700px) and (max-width:804px)": {
      marginTop: "0vw",
      marginBottom: "1vw",
    },
  },
  lastBox: {
    display: "flex",
    alignItems: "baseline",
    gap: "0.2vw",
    "@media (min-width:700px) and (max-width:804px)": {
      marginTop: "18.22vw",
    },
    "@media (min-width:600px) and (max-width:900px)": {
      marginTop: "0vw",
    },
    "@media (min-width:300px) and (max-width:600px)": {
      width: "70vw",
      height: "2.44vh",
      marginTop: "88vw",
      display: "flex",
      gap: "2vw",
      marginLeft: "20vw",
    },
    "@media (min-width:421px) and (max-width:600px)": {
      marginTop: "380px",
      marginLeft: "40vw",
    },
    "@media (min-width:1200px) and (max-width:1500px)": {
      marginTop: "350px",
      marginLeft: "1vw",
    },
  },
  forgotPass: {
    fontFamily: "Montserrat-Bold",
    fontWeight: "700",
    fontSize: "14px",
    lineHeight: "18px",
    color: "#118799",
    "@media (min-width:300px) and (max-width:599px)": {
      width: "72vw",
      height: "3vw",
    },
  },
  forgotBox: {
    display: "flex",
    justifyContent: "flex-end",
    mr: "0.5vw",
    "@media (min-width:600px) and (max-width:900px)": {
      width: "57vw",
      marginBottom: "5vw",
    },
    "@media (min-width:300px) and (max-width:599px)": {
      width: "72vw",
      height: "3vw",
      display: "flex",
      justifyContent: "end",
      marginLeft: "1.04vw",
      marginTop: "-3vw",
    },
  },
  accTypo: {
    fontFamily: "Montserrat",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "2vh",
  },
  signTypo: {
    fontFamily: "Montserrat-Bold",
    fontWeight: "700",
    fontSize: "16px",
    lineHeight: "2.5vh",
    color: "#118799",
  },
};
