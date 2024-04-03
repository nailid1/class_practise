import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import React from "react";
import MainDrawer from "../MainDrawer";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

class FAQ extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <Box sx={{ display: "flex", alignItems: "flex-start" }}>
          <MainDrawer />
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-start",
              flexDirection: "column",
              ml: {
                xl: "10vw",
                lg: "25vw",
                md: "20vw",
                sm: "2vw",
              },
              m: {
                xs: "2vw",
              },
            }}
          >
            <Box sx={{ margin: "20px", marginTop: 0 }}>
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
            </Box>

            <Box sx={{ marginLeft: "30px", marginBottom: "20px" }}>
              <Typography
                variant="h4"
                sx={{ fontWeight: "700", fontSize: "24px" }}
              >
                FAQ:
              </Typography>
            </Box>

            <Box>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography
                    variant="h5"
                    style={{ fontSize: "18px", fontWeight: "700" }}
                  >
                    1. How to request invoice payment?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Box sx={{ marginLeft: "35px" }}>
                    <Typography
                      variant="subtitle1"
                      style={{
                        color: "#333333",
                        lineHeight: "24px",
                        fontWeight: "400",
                        margin: "20px",
                        fontFamily: "Montserrat-Regular",
                        fontSize: "18px",
                        marginRight: "110px",
                      }}
                    >
                      1. Click the “Generate invoice”
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      style={{
                        color: "#333333",
                        margin: "20px",
                        lineHeight: "24px",
                        fontWeight: "400px",
                        fontFamily: "Montserrat-Regular",
                        fontSize: "18px",
                      }}
                    >
                      2. Choose a contact
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      style={{
                        color: "#333333",
                        margin: "20px",
                        lineHeight: "24px",
                        fontWeight: "400",
                        fontFamily: "Montserrat-Regular",
                        fontSize: "18px",
                      }}
                    >
                      3. Enter an amount, and you can add a note with your
                      request.
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      style={{
                        color: "#333333",
                        margin: "20px",
                        lineHeight: "24px",
                        fontWeight: "400",
                        fontFamily: "Montserrat-Regular",
                        fontSize: "18px",
                      }}
                    >
                      4. Your request will be sent along
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      style={{
                        color: "#333333",
                        margin: "20px",
                        lineHeight: "24px",
                        fontWeight: "400",
                        fontFamily: "Montserrat-Regular",
                        fontSize: "18px",
                      }}
                    >
                      5. Pay invoice
                    </Typography>
                  </Box>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  <Typography
                    variant="h5"
                    style={{ fontSize: "18px", fontWeight: "700" }}
                  >
                    2. How to pay invoice?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Box sx={{ marginLeft: "35px" }}>
                    <Typography
                      variant="subtitle1"
                      style={{
                        color: "#333333",
                        lineHeight: "24px",
                        fontWeight: "400",
                        margin: "20px",
                        fontFamily: "Montserrat-Regular",
                        fontSize: "18px",
                        marginRight: "110px",
                      }}
                    >
                      1. Click the “Generate invoice”
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      style={{
                        color: "#333333",
                        margin: "20px",
                        lineHeight: "24px",
                        fontWeight: "400px",
                        fontFamily: "Montserrat-Regular",
                        fontSize: "18px",
                      }}
                    >
                      2. Choose a contact
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      style={{
                        color: "#333333",
                        margin: "20px",
                        lineHeight: "24px",
                        fontWeight: "400",
                        fontFamily: "Montserrat-Regular",
                        fontSize: "18px",
                      }}
                    >
                      3. Enter an amount, and you can add a note with your
                      request.
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      style={{
                        color: "#333333",
                        margin: "20px",
                        lineHeight: "24px",
                        fontWeight: "400",
                        fontFamily: "Montserrat-Regular",
                        fontSize: "18px",
                      }}
                    >
                      4. Your request will be sent along
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      style={{
                        color: "#333333",
                        margin: "20px",
                        lineHeight: "24px",
                        fontWeight: "400",
                        fontFamily: "Montserrat-Regular",
                        fontSize: "18px",
                      }}
                    >
                      5. Pay invoice
                    </Typography>
                  </Box>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  <Typography
                    variant="h5"
                    style={{ fontSize: "18px", fontWeight: "700" }}
                  >
                    3. How to verify your account?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Box sx={{ marginLeft: "35px" }}>
                    <Typography
                      variant="subtitle1"
                      style={{
                        color: "#333333",
                        lineHeight: "24px",
                        fontWeight: "400",
                        margin: "20px",
                        fontFamily: "Montserrat-Regular",
                        fontSize: "18px",
                        marginRight: "110px",
                      }}
                    >
                      1. Click the “Generate invoice”
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      style={{
                        color: "#333333",
                        margin: "20px",
                        lineHeight: "24px",
                        fontWeight: "400px",
                        fontFamily: "Montserrat-Regular",
                        fontSize: "18px",
                      }}
                    >
                      2. Choose a contact
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      style={{
                        color: "#333333",
                        margin: "20px",
                        lineHeight: "24px",
                        fontWeight: "400",
                        fontFamily: "Montserrat-Regular",
                        fontSize: "18px",
                      }}
                    >
                      3. Enter an amount, and you can add a note with your
                      request.
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      style={{
                        color: "#333333",
                        margin: "20px",
                        lineHeight: "24px",
                        fontWeight: "400",
                        fontFamily: "Montserrat-Regular",
                        fontSize: "18px",
                      }}
                    >
                      4. Your request will be sent along
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      style={{
                        color: "#333333",
                        margin: "20px",
                        lineHeight: "24px",
                        fontWeight: "400",
                        fontFamily: "Montserrat-Regular",
                        fontSize: "18px",
                      }}
                    >
                      5. Pay invoice
                    </Typography>
                  </Box>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  <Typography
                    variant="h5"
                    style={{ fontSize: "18px", fontWeight: "700" }}
                  >
                    4. How to verify your account?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Box sx={{ marginLeft: "35px" }}>
                    <Typography
                      variant="subtitle1"
                      style={{
                        color: "#333333",
                        lineHeight: "24px",
                        fontWeight: "400",
                        margin: "20px",
                        fontFamily: "Montserrat-Regular",
                        fontSize: "18px",
                        marginRight: "110px",
                      }}
                    >
                      1. Click the “Generate invoice”
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      style={{
                        color: "#333333",
                        margin: "20px",
                        lineHeight: "24px",
                        fontWeight: "400px",
                        fontFamily: "Montserrat-Regular",
                        fontSize: "18px",
                      }}
                    >
                      2. Choose a contact
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      style={{
                        color: "#333333",
                        margin: "20px",
                        lineHeight: "24px",
                        fontWeight: "400",
                        fontFamily: "Montserrat-Regular",
                        fontSize: "18px",
                      }}
                    >
                      3. Enter an amount, and you can add a note with your
                      request.
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      style={{
                        color: "#333333",
                        margin: "20px",
                        lineHeight: "24px",
                        fontWeight: "400",
                        fontFamily: "Montserrat-Regular",
                        fontSize: "18px",
                      }}
                    >
                      4. Your request will be sent along
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      style={{
                        color: "#333333",
                        margin: "20px",
                        lineHeight: "24px",
                        fontWeight: "400",
                        fontFamily: "Montserrat-Regular",
                        fontSize: "18px",
                      }}
                    >
                      5. Pay invoice
                    </Typography>
                  </Box>
                </AccordionDetails>
              </Accordion>
            </Box>
          </Box>
        </Box>
      </>
    );
  }
}

export default FAQ;
