class SettingsDrawer extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <>
            {true && (
            <div style={{ background: "red" }}>
              <StyledDrawerPaper>
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
            </div>
          )}
          {!true && (
            <div
              style={{ width: "200px", background: "yellow", height: "100vh" }}
            ></div>
          )}

          {/* <Drawer key="drawer1" docked={false}></Drawer>
          <Drawer key="drawer2" docked={false} openSecondary={true}></Drawer> */}
            </>
        )
    }
}