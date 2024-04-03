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
import { Link } from "react-router-dom";

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
    lineHeight: "19.5px",
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
class MainDrawer extends React.Component {
  constructor() {
    super();
    this.state = {
      isMainDrawerOpen: true,
      isSettingsDrawerOpen: false,
      isHelpDrawerOpen: false,
    };
  }

  toggleMainDrawer = () => {
    this.setState((preState) => ({
      isMainDrawerOpen: !preState.isMainDrawerOpen,
    }));
  };
  toggleSettingsDrawer = () => {
    this.setState((prevState) => ({
      isSettingsDrawerOpen: !prevState.isSettingsDrawerOpen,
    }));
  };
  toggleHelpDrawer = () => {
    this.setState((prevState) => ({
      isHelpDrawerOpen: !prevState.isHelpDrawerOpen,
    }));
  };
  render() {
    const { isMainDrawerOpen, isSettingsDrawerOpen, isHelpDrawerOpen } =
      this.state;
    const navigationMainItemsSet = [
      {
        text: "Dashboard",
        icon: <Box component={"img"} src={home} />,
        link: "/dashboard",
      },
      { text: "QR code generator", icon: <Box component={"img"} src={qr} /> },
      { text: "Transactions", icon: <Box component={"img"} src={dollar} /> },
      {
        text: "Wallet",
        icon: <Box component={"img"} src={wallet} />,
        link: "/faq",
      },
      {
        text: "Settings",
        icon: <Box component={"img"} src={settings} />,
        onClick: this.toggleSettingsDrawer,
      },
      {
        text: "Notifications",
        icon: <Box component={"img"} src={bell} />,
        link: "/notifications",
      },
    ];
    const navigationSetItemsSet = [
      {
        text: "Account creation",
        icon: <Box component={"img"} src={home} />,
        link: "/dashboard",
      },
      { text: "Profile", icon: <Box component={"img"} src={qr} /> },
      { text: "Reset passcode", icon: <Box component={"img"} src={dollar} /> },
      {
        text: "Terms & conditions",
        icon: <Box component={"img"} src={wallet} />,
        link: "/faq",
      },
      {
        text: "Need help?",
        icon: <Box component={"img"} src={settings} />,
        onClick: this.toggleHelpDrawer,
      },
      {
        text: "Logout",
        icon: <Box component={"img"} src={bell} />,
        link: "/notifications",
      },
    ];
    const navigationHelpItemsSet = [
      {
        text: "Help center questions",
        icon: <Box component={"img"} src={home} />,
        link: "/help",
      },
      { text: "FAQ", icon: <Box component={"img"} src={qr} />,
       link: "/faq"
    },
      {
        text: "Contact Us",
        icon: <Box component={"img"} src={wallet} />,
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
            // onClose={this.toggleMainDrawer}
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
                      alignItems: "center",
                      justifyContent: "space-evenly",
                      marginTop: "20px",
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
                  <FireNav>
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
                  </FireNav>
                </Box>
              </SetStyledDrawerPaper>
            </div>
          )}
          {isHelpDrawerOpen && (
            <div
              style={{
                borderRight: "1px solid #999999",
                padding: "40px",
                background: "pink",
              }}
            >
              <SetStyledDrawerPaper>
                <Box sx={{ width: "9vw", height: "950px" }}>
                  <FireNav>
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
                  </FireNav>
                </Box>
              </SetStyledDrawerPaper>
            </div>
          )}
          {/* <Drawer key="drawer1" docked={false}></Drawer>
          <Drawer key="drawer2" docked={false} openSecondary={true}></Drawer> */}
        </Box>
      </>
    );
  }
}

export default MainDrawer;
