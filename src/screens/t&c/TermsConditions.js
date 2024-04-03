import { Box, Typography } from "@mui/material";
import React from "react";
import back from "../../assets/backBtn.png";
import aliphImg from "../../assets/aliph1.png";
import loginBg1 from "../../assets/loginBg.png";
import imgBottom from "../../assets/imgBottom.png";
import { withRouter } from "../register/WithRouter";
class TermsConditions extends React.Component {
  backToProfile = () => {
    this.props.navigation("/create-profile");
  };
  render() {
    return (
      <>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            component={"img"}
            src={back}
            sx={webStyles.imgBack}
            onClick={this.backToProfile}
          ></Box>
          <Box component="img" src={aliphImg} sx={webStyles.imgAliph}></Box>
          <Box component={"img"} src={loginBg1} sx={webStyles.imgBg1}></Box>
        </Box>
        <Box sx={webStyles.typoMainBox}>
          <Box sx={webStyles.innerBox}>
            <Typography
              variant="h4"
              sx={{
                fontFamily: "Montserrat-Bold",
                fontWeight: "600",
                fontSize: "24px",
                color: "#031417",
              }}
            >
              Terms & Conditions
            </Typography>
          </Box>
          <Box sx={webStyles.innerBox}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Montserrat-Bold",
                fontWeight: "700",
                fontSize: "20px",
                color: "#06130E",
              }}
            >
              Wallet Services
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              marginLeft: "0.2vw",
              width: "50vw",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Montserrat-Bold",
                fontWeight: "700",
                fontSize: "18px",
                color: "#333333",
              }}
            >
              1. These terms
            </Typography>
          </Box>
          <Box sx={{ display: "flex", width: "50vw", mt: "2vh", mb: "1vh" }}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Montserrat-Bold",
                fontWeight: "600",
                fontSize: "16px",
                color: "#4D4D4D",
              }}
            >
              1.1 The Agreement; Mobile Wallet Services – Terms and Conditions
            </Typography>
          </Box>
          <Box
            sx={{ display: "flex", width: "50vw", alignItems: "flex-start" }}
          >
            <Typography
              variant="body1"
              sx={{
                fontFamily: "Montserrat-Regular",
                fontWeight: "400",
                fontSize: "14px",
                color: "#666666",
                textAlign: "justify",
              }}
            >
              These Wallet Services – Terms and Conditions (including all
              Annexes and Policies) (the “Agreement”), each as may be modified
              from time to time as described in Section 19.2 below, apply when
              You register for a Wallet Account or opt for using the Wallet
              Services with ALIPH Pay which enables You to make payments for
              purchasing products and/or services, make remittances and receive
              certain payments. In these Terms, “You”, “Your” and “Their” refer
              to the user of the Wallet Services and “We,” “Us,” “Our,”, “Saudi
              Digital Payments Company” or “ALIPH Pay” refer to the provider of
              the Wallet Services. Further information regarding ALIPH Pay is
              set out in Section 2 below.
            </Typography>
          </Box>
          <Box sx={{ display: "flex", width: "50vw", mt: "2vh", mb: "1vh" }}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Montserrat-Bold",
                fontWeight: "600",
                fontSize: "16px",
                color: "#4D4D4D",
              }}
            >
              1.2
            </Typography>
          </Box>
          <Box
            sx={{ display: "flex", width: "50vw", alignItems: "flex-start" }}
          >
            <Typography
              variant="body1"
              sx={{
                fontFamily: "Montserrat-Regular",
                fontWeight: "400",
                fontSize: "14px",
                color: "#666666",
                textAlign: "justify",
              }}
            >
              Why You should read them. These terms tell You who We are, how We
              will provide the Wallet Services to You, how You and We may change
              or end this Agreement, what to do if there is a problem and other
              important information
            </Typography>
          </Box>
          <Box sx={{ display: "flex", width: "50vw", mt: "2vh", mb: "1vh" }}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Montserrat-Bold",
                fontWeight: "600",
                fontSize: "16px",
                color: "#4D4D4D",
                mb: "1vh",
              }}
            >
              1.3 Eligibility
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "50vw",
              alignItems: "flex-start",
              flexDirection: "column",
              gap: "1.5vh",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontFamily: "Montserrat-Regular",
                fontWeight: "400",
                fontSize: "14px",
                color: "#666666",
              }}
            >
              You may not use the Wallet Services and may not accept the
              Agreement if:
            </Typography>
            <Box sx={{ display: "flex" }}>
              <Typography
                variant="body1"
                sx={{
                  fontWeight: "700",
                  fontFamily: "Montserrat-Regular",
                  fontSize: "14px",
                  color: "#666666",
                  mr: "0.5vw",
                }}
              >
                (a)
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "Montserrat-Regular",
                  fontWeight: "400",
                  fontSize: "14px",
                  color: "#666666",
                }}
              >
                You are not of legal age to form a binding contract with Us and
                operate the Wallet Services; or
              </Typography>
            </Box>

            <Box sx={{ display: "flex" }}>
              <Typography
                variant="body1"
                sx={{
                  fontWeight: "700",
                  fontFamily: "Montserrat-Regular",
                  fontSize: "14px",
                  color: "#666666",
                  mr: "0.5vw",
                }}
              >
                (b)
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "Montserrat-Regular",
                  fontWeight: "400",
                  fontSize: "14px",
                  color: "#666666",
                }}
              >
                You are a person barred from receiving the Wallet Services under
                the laws of the Kingdom of Saudi Arabia
              </Typography>
            </Box>
            <Box sx={{ display: "flex", width: "50vw", mt: "2vh", mb: "1vh" }}>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Montserrat-Bold",
                  fontWeight: "600",
                  fontSize: "16px",
                  color: "#4D4D4D",
                  mb: "1vh",
                }}
              >
                1.4 Provision and Language of the Agreement
              </Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Typography
                variant="body1"
                sx={{
                  fontWeight: "700",
                  fontFamily: "Montserrat-Regular",
                  fontSize: "14px",
                  color: "#666666",
                  mr: "0.5vw",
                }}
              >
                (a)
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "Montserrat-Regular",
                  fontWeight: "400",
                  fontSize: "14px",
                  color: "#666666",
                  textAlign: "justify",
                }}
              >
                A copy of the Agreement, as amended from time to time, is
                available to You on the App. In order to use the Wallet
                Services, You must first accept the Agreement. This Agreement
                forms a legally binding agreement between You and ALIPH Pay. You
                can accept the Agreement selecting such option when prompted on
                the App and as indicated towards the end of this Agreement
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={{ display: "flex" }}>
          <Box component={"img"} src={imgBottom} sx={webStyles.imgBottom}></Box>
        </Box>
      </>
    );
  }
}

export default withRouter(TermsConditions);
const webStyles = {
  imgBack: {
    margin: "3vw",
    marginTop: "-3vh",
    "@media (max-width:880px)": {
      margin: "3vw",
    },
  },
  imgAliph: {
    height: "11.5vh",
    width: "10.55vw",
    top: "6vh",
    left: "20vw",
    marginLeft: "35vw",
    "@media (max-width:880px)": {
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
    "@media (max-width:880px)": {
      display: "none",
    },
  },
  typoMainBox: {
    display: "flex",
    alignItems: "center",
    width: "52.09vw",
    height: "90vh",
    // background: "pink",
    marginLeft: "22vw",
    marginTop: "2vh",
    flexDirection: "column",
  },
  innerBox: {
    margin: "1vw",
    marginLeft: "0.5vw",
    display: "flex",
    alignItems: "flex-start",
    width: "50vw",
  },
  imgBottom: {
    "@media (max-width:1280px)": {
      display: "none",
    },
  },
};
