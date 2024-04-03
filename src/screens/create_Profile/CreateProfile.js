import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import aliphImg from "../../assets/aliph1.png";
import back from "../../assets/backBtn.png";
import loginBg1 from "../../assets/loginBg.png";
import sideImg from "../../assets/sideLogin.png";
import imgBottom from "../../assets/imgBottom.png";
import styled from "@emotion/styled";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
//@mui/x-date-pickers/DatePicker
import { Link } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../config/FirebaseConfig";
import { red } from "@mui/material/colors";
class CreateProfile extends React.Component {
  constructor() {
    super();
    this.state = {
      fullName: "",
      nationality: "",
      dob: "",
      username: "",
      crNum: "",
      mobileNum: "",
    };
  }

  // try {
  //   const result = await addDoc(this.empCollectionRef, {
  //     firstName: fName,
  //     lastName: lName,
  //     email: email,
  //     address: address,
  //     contact: contact,
  //     password: password,
  //   });
  //   console.log("result  --  ", result);
  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then(async (res) => {
  //       const user = res.user;
  //       console.log("user --- ", user);
  //       await updateProfile(user, { displayName: this.state.email });
  //       this.props.navigation("/");
  //       alert("successfully submitted");
  //     })
  //     .catch((err) => {
  //       alert(err);
  //       console.log(err);
  //       if (err === "auth/invalid-email") {
  //         alert("Invalid email");
  //       }
  //     });
  // } catch (error) {
  //   alert(error);
  // }
  empCollectionRef = collection(db, "profiles");

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log("handle change running .");
  };
  saveProfile = () => {
    const { fullName, nationality, dob, username, crNum, mobileNum } =
      this.state;
    try {
      const result = addDoc(this.empCollectionRef, {
        fullName: fullName,
        nationality: nationality,
        dateOfBirth: dob,
        userName: username,
        crNumber: crNum,
        mobileNumber: mobileNum,
      });
      console.log("result  --  ", result);
      alert("Profile added successfully .");
    } catch (error) {
      alert(error);
    }
    this.setState({
      fullName: "",
      nationality: "",
      dob: "",
      username: "",
      crNum: "",
      mobileNum: "",
    });
  };
  render() {
    return (
      <>
        <Box sx={webStyles.imgBox}>
          <Box component={"img"} src={back} sx={webStyles.back}></Box>
          <Box component="img" src={aliphImg} sx={webStyles.imgAliph}></Box>
          <Box component={"img"} src={loginBg1} sx={webStyles.imgBg1}></Box>
          <Box sx={webStyles.createHead}>
            <Typography
              variant="subtitle1"
              sx={{
                fontFamily: "Montserrat-Bold",
                fontWeight: "600",
                fontSize: "20px",
                lineHeight: "28px",
                color: "#031417",
              }}
            >
              Create Profile
            </Typography>
          </Box>
        </Box>

        <Box sx={webStyles.mainBox}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={webStyles.createHbox}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontFamily: "Montserrat-Bold",
                  fontWeight: "600",
                  fontSize: "20px",
                  lineHeight: "28px",
                  color: "#031417",
                }}
              >
                Create Profile
              </Typography>
            </Box>
            <Box sx={webStyles.innerBox}>
              <Box>
                <InputLabel sx={webStyles.labelInput}>Full name</InputLabel>
                <CssTextField1
                  name="fullName"
                  type="text"
                  variant="outlined"
                  id="fullName"
                  value={this.state.fullName}
                  onChange={this.handleChange}
                />
              </Box>
              <Box>
                <InputLabel sx={webStyles.labelInput}>Nationality</InputLabel>
                <CssTextField1
                  name="nationality"
                  type="text"
                  variant="outlined"
                  id="nationality"
                  value={this.state.nationality}
                  onChange={this.handleChange}
                />
              </Box>
            </Box>
            <Box sx={webStyles.innerBox}>
              <Box>
                <InputLabel sx={webStyles.labelDob}>Date of Birth</InputLabel>
                <CssTextField1
                  type="date"
                  name="dob"
                  value={this.state.dob}
                  onChange={this.handleChange}
                />
              </Box>
              <Box>
                <InputLabel sx={webStyles.labelDob}>Username</InputLabel>
                <CssTextField1
                  name="username"
                  type="text"
                  variant="outlined"
                  id="username"
                  sx={{ marginLeft: "3.5vw" }}
                  value={this.state.username}
                  onChange={this.handleChange}
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "baseline",
                justifyContent: "center",
                marginTop: "2vh",
                marginBottom: "2vh",
                gap: "2vh",
              }}
            >
              <Box>
                <InputLabel sx={webStyles.labelInput}>CR number</InputLabel>
                <CssTextField
                  name="crNum"
                  type="text"
                  variant="outlined"
                  value={this.state.crNum}
                  onChange={this.handleChange}
                />
              </Box>
              <Box>
                <InputLabel sx={webStyles.labelInput}>Mobile No.</InputLabel>
                <CssTextField
                  name="mobileNum"
                  type="text"
                  variant="outlined"
                  value={this.state.mobileNum}
                  onChange={this.handleChange}
                />
              </Box>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Checkbox sx={{ marginTop: "-2vh" }}></Checkbox>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "Montserrat-Regular",
                  fontWeight: "400",
                  fontSize: "14px",
                  width: "20vw",
                }}
              >
                I hereby confirm that I have reviewed all the above information
                and agree to the{" "}
                <Link
                  to={"/tandc"}
                  style={{
                    fontFamily: "Montserrat-Bold",
                    fontWeight: "700",
                    fontSize: "14px",
                    color: "#333333",
                  }}
                >
                  Terms and Conditions.
                </Link>
              </Typography>
            </Box>
            <Box sx={webStyles.btnBox}>
              <ColorButton
                variant="contained"
                data-testid="login-btn"
                onClick={this.saveProfile}
              >
                Save
              </ColorButton>
            </Box>
          </Box>
          <Box component={"img"} src={sideImg} sx={webStyles.side}></Box>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Box component={"img"} src={imgBottom} sx={webStyles.bottomImg}></Box>
        </Box>
      </>
    );
  }
}

const ColorButton = styled(Button)(
  //    <ButtonProps>
  ({ theme }) => ({
    backgroundColor: "#3FB98C",
    fontFamily: "Montserrat-Bold",
    fontWeight: "600",
    fontSize: "16px",
    lineHeight: "24px",
    borderRadius: "8px",
    width: "23vw",
    height: "6.2vh",
    "&:hover": {
      backgroundColor: "#3FB98C",
    },
    marginTop: "1.5vw",
    // "@media (min-width:600px) and (max-width:900px)": {
    //   width: "55vw",
    //   height: "6.3vh",
    // },
    // "@media (min-width:900px) and (max-width:1500px)": {
    //   marginTop: "4vw",
    // },
    // "@media (min-width:300px) and (max-width:599px)": {
    //   marginTop: "15vw",
    //   marginLeft: "0.52vw",
    //   width: "72vw",
    //   height: "6.23vh",
    // },
  })
);

const CssTextField = styled(TextField)({
  "& .MuiInput-underline:after": {
    borderBottomColor: "#B2BAC2",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#E0E3E7",
      width: "22vw",
      borderRadius: "8px",
      "@media (min-width:1700px) and (max-width:1800px)": {
        width: "22.5vw",
      },
      "@media (min-width:1500px) and (max-width:1699px)": {
        width: "23.5vw",
      },
      "@media (min-width:1500px) and (max-width:1599px)": {
        width: "23.5vw",
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
const CssTextField1 = styled(TextField)({
  "& .MuiInput-underline:after": {
    borderBottomColor: "#B2BAC2",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#E0E3E7",
      width: "9.5vw",
      borderRadius: "8px",
      "@media (max-width:1500px)": {
        width: "auto",
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
const webStyles = {
  createHead: {
    "media (min-width:1201px)": {
      display: "none",
    },
    "@media (min-width:300px) and (max-width:1200px)": {
      width: "40%",
      height: "28px",
      display: "flex",
      justifyContent: "space-between",
    },
  },
  mainBox: {
    display: "flex",
    justifyContent: "space-evenly",
    width: "74.6vw",
    height: "57.9vh",
    ml: "244px",
    mt: "3vh",
    "@media (min-width:300px) and (max-width:1200px)": {
      alignItems: "center",
      width: "100%",
      justifyContent: "end",
      marginRight: "100px"
    },
  },
  createHbox: {
    width: "40%",
    height: "28px",
    display: "flex",
    justifyContent: "space-between",
    "@media (max-width:1200px)": {
      display: "none",
    },
  },
  side: {
    width: "38vw",
    height: "57.9vh",
    "@media (max-width:1200px)": {
      display: "none",
    },
  },
  imgBox: {
    display: "flex",
    alignItems: "center",
    "@media (min-width:300px) and (max-width:1200px)": {
      marginTop: "80px",
      alignItems: "baseline",
      justifyContent: "space-between",
      marginRight: "18vw",
      marginBottom: "100px",
    },
  },
  back: {
    margin: "2vw",
    marginTop: "-7vh",
    "@media (min-width:300px) and (max-width:600px)": {
      margin: "2vw",
      marginTop: "0vh",
    },
  },
  btnBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "23vw",
    "@media (min-width:1700px) and (max-width:1800px)": {
      width: "22.5vw",
    },
  },
  imgAliph: {
    height: "11.5vh",
    width: "10.55vw",
    top: "6vh",
    left: "20vw",
    marginLeft: "35vw",
    "@media (min-width:300px) and (max-width:600px)": {
      display: "none",
    },
  },
  imgBg1: {
    width: "29vw", //622.53
    top: "-498px",
    left: "1821px",
    radius: "110.13px",
    border: "37.13px",
    rotation: "-72.36°",
    ml: "20vw",
    mt: "-9vh",
    "@media (max-width:1200px)": {
      display: "none",
    },
  },
  labelInput: {
    color: "#031417",
    fontWeight: "700",
    fontSize: "16px",
    // lineHeight: "24px",
    mr: "8vw",
    fontFamily: "Montserrat-Bold",
  },
  labelDob: {
    color: "#031417",
    fontWeight: "700",
    fontSize: "16px",
    lineHeight: "24px",
    mr: "4vw",
    fontFamily: "Montserrat-Bold",
  },
  bottomImg: {
    marginLeft: "-2vw",
    marginBottom: "-6vh",
    "@media (max-width:1200px)": {
      display: "none",
    },
  },
  innerBox: {
    display: "flex",
    alignItems: "center",
    marginTop: "2vh",
    justifyContent: "space-between",
    "@media (min-width:600px) and (max-width:900px)": {
      justifyContent: "center",
    },
  },
};

export default CreateProfile;

//.contentContainer
// align-items: center;
// justify-content: center;
//enter passcode h5 : font-weight: 700;
