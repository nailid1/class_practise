import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import MainDrawer from "../MainDrawer";
import PhoneIcon from "@mui/icons-material/Phone";
import LanguageIcon from "@mui/icons-material/Language";
class ContactUs extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <Box sx={{ display: "flex", alignItems: "flex-start" }}>
          <MainDrawer value={true} />
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-start",
              flexDirection: "column",
              marginLeft: "5vw",
            }}
          >
            <Box sx={{ margin: "1vw" }}>
              <Typography
                style={{
                  alignItems: "center",
                  fontWeight: "600",
                  fontFamily: "Montserrat-Regular",
                  letterSpacing: "-0.5%",
                  color: "#031417",
                }}
                variant="h4"
              >
                Need Help?
              </Typography>
              <Divider variant="fullWidth" orientation="horizontal" />
            </Box>
            <Box sx={{ margin: "1vw" }}>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "Montserrat-Bold",
                  fontWeight: "700",
                  fontSize: "24px",
                  textAlign: "center",
                }}
              >
                Contact Us:
              </Typography>
            </Box>

            <Box sx={{ marginLeft: "1vw", marginBottom: "1vw" }}>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "Montserrat-Regular",
                  fontWeight: "400",
                  size: "16px",
                  textAlign: "justify",
                }}
              >
                If you have any questions, comments, or feedback, please don't
                hesitate to get in touch with us. We value your input and look
                forward to hearing from you.
              </Typography>
            </Box>

            <Box>
              <Box sx={webStyles.box1}>
                <PhoneIcon />
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontFamily: "Montserrat-Bold",
                    fontWeight: "600",
                    fontSize: "16px",
                    color: "#4D4D4D",
                  }}
                >
                  Phone Number: -{" "}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: "Montserrat-Bold",
                    fontWeight: "600",
                    fontSize: "16px",
                  }}
                >
                  00966 539322039
                </Typography>
              </Box>
              <Box sx={webStyles.box1}>
                <LanguageIcon />
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontFamily: "Montserrat-Bold",
                    fontWeight: "600",
                    fontSize: "16px",
                    color: "#4D4D4D",
                  }}
                >
                  Website Url: -
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: "Montserrat-Bold",
                    fontWeight: "600",
                    fontSize: "16px",
                  }}
                >
                  https://www.aliph-pay.com
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </>
    );
  }
}

export default ContactUs;

const webStyles = {
  box1: {
    display: "flex",
    alignItems: "center",
    width: "20vw",
    justifyContent: "flex-start",
    gap: "0.5vw",
    margin: "1vw",
  },
};
