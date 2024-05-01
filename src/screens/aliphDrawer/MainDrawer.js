import styled from "@emotion/styled";
import {
  Box,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import HomeOutlined from "@mui/icons-material/HomeOutlined";
import home from "../../assets/home.png";
import qr from "../../assets/qrScan.png";
import dollar from "../../assets/dollar.png";
import wallet from "../../assets/wallet.png";
import settings from "../../assets/settings.png";
import bell from "../../assets/notification.png";
import aliphImg from "../../assets/Aliph.png";
import reset from "../../assets/reset.png";
import note from "../../assets/note.png";
import help from "../../assets/help.png";
import logout from "../../assets/logout.png";
import hc from "../../assets/hc.png";
import faq from "../../assets/faq.png";
import contact from "../../assets/contact.png";
import ac from "../../assets/contact.png";
import profile from "../../assets/profile.png";
import lock from "../../assets/lock.png";
import { Link } from "react-router-dom";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { signOut } from "firebase/auth";
import { auth } from "../../config/FirebaseConfig";
import { withRouter } from "../register/WithRouter";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const drawerWidth = "9vw";

const StyledDrawer = styled(Drawer)({
  width: drawerWidth,
  flexShrink: 0,
});
const StyledDrawerPaper = styled("div")(({ theme }) => ({
  width: drawerWidth,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  marginLeft: "40px",
}));

const SetStyledDrawerPaper = styled("div")(({ theme }) => ({
  //   width: "5vw",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  marginLeft: "40px",
}));

const FireNav = styled(List)({
  "& .css-10hburv-MuiTypography-root": {
    fontWeight: "700",
    color: "#333333",
  },
  "& .css-h4y409-MuiList-root": {
    display: "flex",
    flexDirection: "column",
    marginRight: "55px",
    marginTop: "40px",
    justifyContent: "center",
  },
});
const FireNav2 = styled(List)({
  "& .css-10hburv-MuiTypography-root": {
    fontWeight: "600",
    fontFamily: "Montserrat-Bold",
    fontSize: "16px",
    color: "#999999",
  },
  "& .css-h4y409-MuiList-root": {
    display: "flex",
    flexDirection: "column",
    marginRight: "55px",
    justifyContent: "center",
    width: "max-content",
    marginLeft: "-4vw",
  },
});
const FireNav3 = styled(List)({
  "& .css-10hburv-MuiTypography-root": {
    fontWeight: "600",
    fontFamily: "Montserrat-Bold",
    fontSize: "16px",
    color: "#999999",
  },
  "& .css-h4y409-MuiList-root": {
    display: "flex",
    flexDirection: "column",
    marginRight: "55px",
    //   marginTop: "2vw",
    justifyContent: "center",
    width: "max-content",
    marginLeft: "-4vw",
  },
});
class MainDrawer extends React.Component {
  constructor(props) {
    super(props);
    // this.logOut = this.logOut.bind(this);
    this.state = {
      isMainDrawerOpen: true,
      isSettingsDrawerOpen: false,
      isHelpDrawerOpen: false,
    };
  }
  componentDidMount = () => {
    console.log("PROPS", this.props.value);
    // console.log("PROPS logout", this.props.logOut);
    if (this.props.value == true) {
      this.setState({ isSettingsDrawerOpen: true, isHelpDrawerOpen: true });
    }
  };
  toggleMainDrawer = () => {
    this.setState((preState) => ({
      isMainDrawerOpen: !preState.isMainDrawerOpen,
    }));
  };
  toggleSettingsDrawer = () => {
    if(this.state.isHelpDrawerOpen == true){
        this.setState({isHelpDrawerOpen: false})
    }
    this.setState((prevState) => ({
      isSettingsDrawerOpen: !prevState.isSettingsDrawerOpen,
    }));
  };
  toggleHelpDrawer = () => {
    this.setState((prevState) => ({
      isHelpDrawerOpen: !prevState.isHelpDrawerOpen,
    }));
  };

  logOut = () => {
    // const { logout } = this.props;
    console.log("logout running");
    signOut(auth)
      .then(() => {
        // if (typeof this.props.logout === "function") {
        // //   this.props.logOut();
        // } else {
        //   console.error("logout function is not passed correctly.");
        // }
        console.log("User signed out successfully");
        alert("You have logged Out Successfully .");
        this.props.navigation("/");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };
  render() {
    const { isMainDrawerOpen, isSettingsDrawerOpen, isHelpDrawerOpen } =
      this.state;
    const navigationMainItemsSet = [
      {
        text: "Dashboard",
        icon: <Box component={"img"} src={home} />,
        // link: "/dashboard",
      },
      { text: "QR code generator", icon: <Box component={"img"} src={qr} /> },
      { text: "Transactions", icon: <Box component={"img"} src={dollar} /> },
      {
        text: "Wallet",
        icon: <Box component={"img"} src={wallet} />,
        // link: "/faq",
      },
      {
        text: "Settings",
        icon: <Box component={"img"} src={settings} />,
        onClick: this.toggleSettingsDrawer,
      },
      {
        text: "Notifications",
        icon: <Box component={"img"} src={bell} />,
        // link: "/notifications",
      },
    ];
    const navigationSetItemsSet = [
      {
        text: "Account creation",
        icon: <Box component={"img"} src={ac} /> ,
      },
      { text: "Profile", icon: <Box component={"img"} src={profile} /> , },
      { text: "Reset passcode", icon: <Box component={"img"} src={reset} /> },
      { text: "Reset password", icon: <Box component={"img"} src={lock} /> , },
      {
        text: "Terms & conditions",
        icon: <Box component={"img"} src={note} />,
        // link: "/faq",
      },
      {
        text: "Need help?",
        icon: <Box component={"img"} src={help} />,
        onClick: this.toggleHelpDrawer,
      },
      {
        text: "Logout",
        icon: <Box component={"img"} src={logout} />,
        onClick: this.logOut,
      },
    ];
    const navigationHelpItemsSet = [
      {
        text: "Help center questions",
        icon: <Box component={"img"} src={hc} />,
        link: "/help",
      },
      { text: "FAQ", icon: <Box component={"img"} src={faq} />, link: "/faq" },
      {
        text: "Contact Us",
        icon: <Box component={"img"} src={contact} />,
        link: "/contact",
      },
    ];
    return (
      <>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            flexDirection: "row",
          }}
        >
          <CssBaseline />
          <StyledDrawer
            anchor="left"
            variant="permanent"
            open={isMainDrawerOpen}
          >
            <StyledDrawerPaper>
              <Box
                component="img"
                src={aliphImg}
                mt={"1vw"}
                sx={{ marginRight: "35px" }}
              ></Box>
              <Box sx={{ margin: "160px" }}>
                <FireNav>
                  <List>
                    {navigationMainItemsSet.map(
                      ({ text, icon, link, onClick }, index) => (
                        <ListItem key={text} button onClick={onClick}>
                          {link ? (
                            <ListItemButton component={Link} button to={link}>
                              <ListItemIcon>{icon}</ListItemIcon>
                              <ListItemText primary={text} />
                            </ListItemButton>
                          ) : (
                            <ListItemButton>
                              <ListItemIcon>{icon}</ListItemIcon>
                              <ListItemText primary={text} />
                            </ListItemButton>
                          )}
                        </ListItem>
                      )
                    )}
                  </List>
                </FireNav>
              </Box>
            </StyledDrawerPaper>
          </StyledDrawer>
          {isSettingsDrawerOpen && (
            <div style={{ borderRight: "1px solid #999999", padding: "40px" }}>
              <SetStyledDrawerPaper>
                <Box
                  sx={{ marginLeft: "30px", width: "11vw", height: "900px" }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "baseline",
                      justifyContent: "flex-start",
                      marginTop: "-1vw",
                      marginLeft: "-2vw",
                      color: "#666666",
                      height: "fit-content",
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        fontFamily: "Montserrat-Bold",
                        fontWeight: "700",
                        fontSize: "24px",
                      }}
                    >
                      Settings
                    </Typography>
                  </Box>
                  <FireNav2>
                    <List>
                      {navigationSetItemsSet.map(
                        ({ text, icon, link, onClick }, index) => (
                          <ListItem key={text} button onClick={onClick}>
                            {link ? (
                              <ListItemButton component={Link} button to={link}>
                                <ListItemIcon>{icon}</ListItemIcon>
                                <ListItemText primary={text} />
                              </ListItemButton>
                            ) : (
                              <ListItemButton>
                                <ListItemIcon>{icon}</ListItemIcon>
                                <ListItemText primary={text} />
                              </ListItemButton>
                            )}
                          </ListItem>
                        )
                      )}
                    </List>
                  </FireNav2>
                </Box>
              </SetStyledDrawerPaper>
            </div>
          )}
          {isHelpDrawerOpen && (
            <div
              style={{
                borderRight: "1px solid #999999",
                padding: "40px",
              }}
            >
              <SetStyledDrawerPaper>
                <Box sx={{ width: "9vw", height: "950px" }}>
                  <FireNav3>
                    <List>
                      {navigationHelpItemsSet.map(
                        ({ text, icon, link, onClick }, index) => (
                          <ListItem key={text} button onClick={onClick}>
                            {link ? (
                              <ListItemButton component={Link} button to={link}>
                                <ListItemIcon>{icon}</ListItemIcon>
                                <ListItemText primary={text} />
                              </ListItemButton>
                            ) : (
                              <ListItemButton>
                                <ListItemIcon>{icon}</ListItemIcon>
                                <ListItemText primary={text} />
                              </ListItemButton>
                            )}
                          </ListItem>
                        )
                      )}
                    </List>
                  </FireNav3>
                </Box>
              </SetStyledDrawerPaper>
            </div>
          )}
        </Box>
      </>
    );
  }
}

export default withRouter(MainDrawer);
