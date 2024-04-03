import { Box, Typography } from "@mui/material";
import React from "react";
import MainDrawer from "../MainDrawer";

class NeedHelp extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <Box sx={{ display: "flex", alignItems: "flex-start" }}>
          <MainDrawer />
          <Box sx={webStyles.outerBox}>
            <Box sx={{ margin: "20px", marginTop: 0 }}>
              <Typography style={webStyles.help} variant="h4">
                Need Help?
              </Typography>
            </Box>

            <Box sx={webStyles.box2}>
              <Typography
                style={{
                  lineHeight: "32px",
                  alignItems: "center",
                  fontWeight: "700",
                  fontFamily: "Montserrat",
                  letterSpacing: "-0.5%",
                  color: "#06130E",
                }}
                variant="h4"
              >
                Help center questions:
              </Typography>
            </Box>
            <Box sx={webStyles.box2}>
              <Typography style={webStyles.heading} variant="h5">
                1. Add money - You can top up your Aliph pay account with
                different options: Iban transfer or by adding your bank card Or
                Through a credit\debit card
              </Typography>
            </Box>

            <Box
              sx={{
                marginLeft: "30px",
                display: "flex",
                flexDirection: "column",
                alignItems: "baseline",
              }}
            >
              <Typography
                variant="subtitle1"
                style={{
                  color: "#333333",
                  lineHeight: "24px",
                  fontWeight: "400",
                  margin: "20px",
                  fontFamily: "Montserrat-Regular",
                  fontSize: "19px",
                }}
              >
                A. Click the “Add money” button
              </Typography>
              <Typography
                variant="subtitle1"
                style={{
                  color: "#333333",
                  margin: "20px",
                  lineHeight: "24px",
                  fontFamily: "Montserrat-Regular",
                  fontWeight: "400",
                  fontSize: "19px",
                }}
              >
                B. Select the credit\debit card option
              </Typography>
              <Typography
                variant="subtitle1"
                style={{
                  color: "#333333",
                  margin: "20px",
                  lineHeight: "24px",
                  fontWeight: "400",
                  fontFamily: "Montserrat-Regular",
                  fontSize: "19px",
                }}
              >
                C. Enter the amount {">"} continue
              </Typography>
              <Typography
                variant="subtitle1"
                style={{
                  color: "#333333",
                  margin: "20px",
                  lineHeight: "24px",
                  fontWeight: "400",
                  fontFamily: "Montserrat-Regular",
                  fontSize: "19px",
                }}
              >
                D. Enter your card’s details
              </Typography>
              <Typography
                variant="subtitle1"
                style={{
                  color: "#333333",
                  margin: "20px",
                  lineHeight: "24px",
                  fontWeight: "400",
                  fontFamily: "Montserrat-Regular",
                  fontSize: "19px",
                }}
              >
                E. Confirm to top up your wallet in seconds!
              </Typography>
              <Typography
                variant="subtitle1"
                style={{
                  color: "#333333",
                  margin: "20px",
                  lineHeight: "24px",
                  fontWeight: "400px",
                  fontFamily: "Montserrat-Regular",
                  fontSize: "19px",
                }}
              >
                F. Through bank transfer to Aliphpay
              </Typography>
              <Typography
                variant="subtitle1"
                style={{
                  color: "#333333",
                  margin: "20px",
                  lineHeight: "24px",
                  fontWeight: "400",
                  fontFamily: "Montserrat-Regular",
                  fontSize: "19px",
                }}
              >
                G. Click the “Add money” button
              </Typography>
              <Typography
                variant="subtitle1"
                style={{
                  color: "#333333",
                  margin: "20px",
                  lineHeight: "24px",
                  fontWeight: "400",
                  fontFamily: "Montserrat-Regular",
                  fontSize: "19px",
                }}
              >
                H. Select the bank transfer to Aliph pay option
              </Typography>
              <Typography
                variant="subtitle1"
                style={{
                  color: "#333333",
                  margin: "20px",
                  lineHeight: "24px",
                  fontWeight: "400",
                  fontFamily: "Montserrat-Regular",
                  fontSize: "20px",
                }}
              >
                I. Choose one of the partner banks, and copy the account number
                or IBAN
              </Typography>
              <Typography
                variant="subtitle1"
                style={{
                  color: "#333333",
                  margin: "20px",
                  lineHeight: "24px",
                  fontWeight: "400",
                  fontFamily: "Montserrat-Regular",
                  fontSize: "19px",
                }}
              >
                J. From your bank account, transfer to your Aliph pay account by
                pasting the account number or IBAN
              </Typography>
              <Typography
                variant="subtitle1"
                style={{
                  color: "#333333",
                  margin: "20px",
                  lineHeight: "24px",
                  fontWeight: "400",
                  fontFamily: "Montserrat-Regular",
                  fontSize: "19px",
                }}
              >
                K. The transfer will be delivered during your bank’s official
                working hours
              </Typography>
            </Box>

            <Box sx={webStyles.box2}>
              <Typography style={webStyles.heading} variant="h5">
                2. Account Verification- To continue enjoying Aliph pay services
                and protect your privacy; You must verify your account in
                Identity Authentication Management
              </Typography>
            </Box>

            <Box sx={webStyles.box4}>
              <Typography
                style={{
                  //   marginLeft: "50px",
                  fontFamily: "Montserrat-Bold",
                  fontWeight: "600",
                  fontSize: "20px",
                  lineHeight: "19.5px",
                }}
                variant="h5"
              >
                How to verify your account?
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "baseline",
                marginLeft: "2.8vw",
              }}
            >
              <Typography
                variant="subtitle1"
                style={{
                  color: "#333333",
                  lineHeight: "24px",
                  fontWeight: "400",
                  margin: "20px",
                  fontFamily: "Montserrat-Regular",
                  fontSize: "19px",
                  marginRight: "110px",
                }}
              >
                1. Make sure that your number is under your ID. If not, please
                get in touch with your network provider.
              </Typography>
              <Typography
                variant="subtitle1"
                style={{
                  color: "#333333",
                  margin: "20px",
                  lineHeight: "24px",
                  fontWeight: "400px",
                  fontFamily: "Montserrat-Regular",
                  fontSize: "19px",
                }}
              >
                2. From Aliph pay application; click “account information”
              </Typography>
              <Typography
                variant="subtitle1"
                style={{
                  color: "#333333",
                  margin: "20px",
                  lineHeight: "24px",
                  fontWeight: "400",
                  fontFamily: "Montserrat-Regular",
                  fontSize: "19px",
                }}
              >
                3. Click “ID verification”
              </Typography>
              <Typography
                variant="subtitle1"
                style={{
                  color: "#333333",
                  margin: "20px",
                  lineHeight: "24px",
                  fontWeight: "400",
                  fontFamily: "Montserrat-Regular",
                  fontSize: "19px",
                }}
              >
                4. Enter your Absher username and password
              </Typography>
              <Typography
                variant="subtitle1"
                style={{
                  color: "#333333",
                  margin: "20px",
                  lineHeight: "24px",
                  fontWeight: "400",
                  fontFamily: "Montserrat-Regular",
                  fontSize: "19px",
                }}
              >
                5. You will receive one of the offers after completing the
                verification process of your account
              </Typography>
            </Box>

            <Box sx={webStyles.box3}>
              <Typography style={webStyles.heading} variant="h5">
                3. Request Invoice payment
              </Typography>
            </Box>

            <Box sx={{ marginLeft: "45px" }}>
              <Typography
                style={{
                  fontFamily: "Montserrat-Bold",
                  fontWeight: "600",
                  fontSize: "20px",
                  lineHeight: "19.5px",
                  marginLeft: "1.6vw",
                }}
                variant="h5"
              >
                How to request invoice payment
              </Typography>
            </Box>

            <Box
              sx={webStyles.box5}
            >
              <Typography
                variant="subtitle1"
                style={{
                  color: "#333333",
                  lineHeight: "24px",
                  fontWeight: "400",
                  margin: "20px",
                  fontFamily: "Montserrat-Regular",
                  fontSize: "19px",
                  marginRight: "700px",
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
                  fontWeight: "400",
                  fontFamily: "Montserrat-Regular",
                  fontSize: "19px",
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
                  fontSize: "19px",
                }}
              >
                3. Enter an amount, and you can add a note with your request.
              </Typography>
              <Typography
                variant="subtitle1"
                style={{
                  color: "#333333",
                  margin: "20px",
                  lineHeight: "24px",
                  fontWeight: "400",
                  fontFamily: "Montserrat-Regular",
                  fontSize: "19px",
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
                  fontSize: "19px",
                }}
              >
                5. Pay invoice{" "}
              </Typography>
            </Box>

            <Box sx={webStyles.box3}>
              <Typography style={webStyles.heading} variant="h5">
                4. How to pay invoice
              </Typography>
            </Box>

            <Box
              sx={webStyles.box5}
            >
              <Typography
                variant="subtitle1"
                style={{
                  color: "#333333",
                  lineHeight: "24px",
                  fontWeight: "400",
                  margin: "20px",
                  fontFamily: "Montserrat-Regular",
                  fontSize: "19px",
                }}
              >
                1. Click the “invoices”
              </Typography>
              <Typography
                variant="subtitle1"
                style={{
                  color: "#333333",
                  margin: "20px",
                  lineHeight: "24px",
                  fontWeight: "400",
                  fontFamily: "Montserrat-Regular",
                  fontSize: "19px",
                }}
              >
                2. Choose an invoice
              </Typography>
              <Typography
                variant="subtitle1"
                style={{
                  color: "#333333",
                  margin: "20px",
                  lineHeight: "24px",
                  fontWeight: "400",
                  fontFamily: "Montserrat-Regular",
                  fontSize: "19px",
                }}
              >
                3. Read the details
              </Typography>
              <Typography
                variant="subtitle1"
                style={{
                  color: "#333333",
                  margin: "20px",
                  lineHeight: "24px",
                  fontWeight: "400",
                  fontFamily: "Montserrat-Regular",
                  fontSize: "19px",
                }}
              >
                4. If it is ok, press pay, and money will be deducted from your
                wallet
              </Typography>
            </Box>
          </Box>
        </Box>
      </>
    );
  }
}

export default NeedHelp;

const webStyles = {
  outerBox: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    flexDirection: "column",
    marginLeft: "5vw",
  },
  help: {
    alignItems: "center",
    fontWeight: "600",
    fontFamily: "Montserrat-Regular",
    letterSpacing: "-0.5%",
    color: "#031417",
  },
  box2: { margin: "20px", marginRight: "3vw" },
  box3: { margin: "2vw", marginLeft: "3vw" },
  heading: {
    color: "#333333",
    lineHeight: "26px",
    fontWeight: "700",
    fontFamily: "Montserrat-Bold",
    letterSpacing: "-0.5%",
  },
  box4: {
    marginLeft: "3.6vw",
  },
  box5: {
    display: "flex",
    flexDirection: "column",
    alignItems: "baseline",
    marginLeft: "2.8vw",
  }
};
