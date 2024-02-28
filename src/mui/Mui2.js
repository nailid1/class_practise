import {
  Box,
  FormControlLabel,
  Stack,
  Switch,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import React from "react";

class Mui2 extends React.Component {
  constructor() {
    super();
    this.state = {
      format: [],
      checked: false,
    };
  }
  handleFormatChange = (format, updatedFormat) => {
    this.setState({ format: updatedFormat });
    console.log("format ", format);
  };
  handleChange = (e) => {
    this.setState({ checked: e.target.checked });
    console.log(this.state.checked);
  };

  render() {
    console.log(this.state.checked);
    return (
      <>
        {/* <Stack direction={"row"}>
          <ToggleButtonGroup
            aria-label="text formatting"
            value={this.state.format}
            onChange={this.handleFormatChange} exclusive
          >
            <ToggleButton value={"bold"} aria-label="bold">
              <FormatBoldIcon />
            </ToggleButton>
            <ToggleButton value={"italic"} aria-label="italic">
              <FormatItalicIcon />
            </ToggleButton>
            <ToggleButton value={"underlined"} aria-label="underlined">
              <FormatUnderlinedIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack> */}

        <Stack spacing={4} sx={{ margin: "60px" }}>
          <Stack direction={"row"} spacing={2}>
            <Typography variant="h5">Example of TextField</Typography>
            <TextField label="Name" variant="outlined" />
            <TextField label="Email" variant="filled" />
            <TextField label="Add" variant="standard" />
          </Stack>
        </Stack>
        <Box>
          <Typography variant="h4">Example of Switch</Typography>
          <FormControlLabel
            label="Dark Mode"
            control={
              <Switch
                checked={this.state.checked}
                onChange={this.handleChange}
                size="small"
                color="success"
              />
            }
          />
        </Box>
        {/* <Stack spacing={2} sx={{margin:"60px"}}>

        </Stack> */}
      </>
    );
  }
}

export default Mui2;
