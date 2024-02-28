import {
  Button,
  Typography,
  Stack,
  IconButton,
  ButtonGroup,
  Checkbox,
  FormGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Box,
  RadioGroup,
  Radio,
  Rating,
  Slider,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import React from "react";
import SendIcon from "@mui/icons-material/Send";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";
class MuiTypography extends React.Component {
  render() {
    return (
      <div>
        {/* Example of Typography font */}
        <Typography variant="h1">h1 heading</Typography>
        <Typography variant="h2">h2 heading</Typography>
        <Typography variant="h3">h3 heading</Typography>
        <Typography variant="h4" component={"h1"} gutterBottom>
          h4 heading
        </Typography>
        <Typography variant="h5">h5 heading</Typography>
        <Typography variant="h6">h6 heading</Typography>
        <Typography variant="subtitle1">Sub Title 1</Typography>
        <Typography variant="subtitle2">Sub Title 2</Typography>
        <Typography variant="body1">
          body 1 - If you're using an older version of Material-UI, consider
          updating it to the latest version. Newer versions might have resolved
          compatibility issues with @emotion/styled.
        </Typography>
        <Typography variant="body2" gutterBottom>
          body 2 - If you're using an older version of Material-UI, consider
          updating it to the latest version. Newer versions might have resolved
          compatibility issues with @emotion/styled.
        </Typography>
        {/* Example of Typography font */}

        {/* Example of MUI Buttons */}
        <Stack spacing={4}>
          <Stack spacing={2} direction={"row"}>
            <Button variant="text" href="https://google.com">
              Text
            </Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
          </Stack>
          <Stack spacing={2} direction={"row"}>
            <Button variant="contained" color="primary">
              Primary
            </Button>
            <Button variant="contained" color="secondary">
              Secondary
            </Button>
            <Button variant="contained" color="error">
              Error
            </Button>
            <Button variant="contained" color="warning">
              Warning
            </Button>
            <Button variant="contained" color="info">
              Info
            </Button>
            <Button variant="contained" color="success">
              Sucess
            </Button>
          </Stack>
          <Stack spacing={2} display={"block"} direction={"row"}>
            <Button variant="contained" size="small">
              Small
            </Button>
            <Button variant="contained" size="medium">
              Medium
            </Button>
            <Button variant="contained" size="large">
              Large
            </Button>
          </Stack>
          <Stack spacing={2} direction={"row"}>
            <Button variant="contained" startIcon={<SendIcon />}>
              Send
            </Button>
            <Button variant="contained" endIcon={<SendIcon />}>
              Send
            </Button>
            <IconButton aria-label="send" color="primary" size="small">
              {" "}
              <SendIcon />
            </IconButton>
          </Stack>
        </Stack>

        {/* Example of MUI Buttons */}

        {/* Example of MUI Button Group */}

        <ButtonGroup
          size="large"
          variant="contained"
          aria-label="Basic button group"
        >
          <Button>First</Button>
          <Button>Second</Button>
          <Button>Third</Button>
        </ButtonGroup>
        <ButtonGroup
          size="medium"
          color="secondary"
          variant="outlined"
          aria-label="Basic button group"
        >
          <Button>First</Button>
          <Button>Second</Button>
          <Button>Third</Button>
        </ButtonGroup>
        <ButtonGroup
          size="small"
          color="success"
          variant="text"
          aria-label="Basic button group"
        >
          <Button>First</Button>
          <Button>Second</Button>
          <Button>Third</Button>
        </ButtonGroup>
        <ButtonGroup
          size="large"
          variant="contained"
          aria-label="Vertical button group"
          orientation="vertical"
        >
          <Button>First</Button>
          <Button>Second</Button>
          <Button>Third</Button>
        </ButtonGroup>
        <ButtonGroup
          size="medium"
          color="secondary"
          variant="outlined"
          aria-label="Basic button group"
          orientation="vertical"
        >
          <Button>First</Button>
          <Button>Second</Button>
          <Button>Third</Button>
        </ButtonGroup>
        <ButtonGroup
          size="small"
          color="success"
          variant="text"
          aria-label="Basic button group"
          orientation="vertical"
        >
          <Button>First</Button>
          <Button>Second</Button>
          <Button>Third</Button>
        </ButtonGroup>

        {/* Example of MUI Button Group */}

        {/* Example of MUI Checkbox */}
        <Checkbox />
        <Checkbox defaultChecked />
        <Checkbox disabled />
        <Checkbox disabled checked />

        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Label"
          />
          <FormControlLabel required control={<Checkbox />} label="Required" />
          <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
        </FormGroup>
        <Checkbox defaultChecked size="small" />
        <Checkbox defaultChecked size="medium" />
        <Checkbox defaultChecked size="large" />

        {/* Example of MUI Checkbox */}

        {/* Example of MUI Radio Buttons */}
        <Box sx={{ margin: "60px", display: "flex", alignItems: "flex-start" }}>
          <FormControl>
            <FormLabel>Gender</FormLabel>
            <RadioGroup row defaultValue={"female"}>
              <FormControlLabel
                value={"female"}
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel
                value={"male"}
                control={<Radio />}
                label="Male"
              />
              <FormControlLabel
                value={"others"}
                control={<Radio />}
                label="Others"
              />
              <FormControlLabel
                value={"other"}
                control={<Radio />}
                label="Other Disabled"
                disabled
              />
            </RadioGroup>
          </FormControl>
        </Box>

        <Box sx={{ margin: "60px", display: "flex", alignItems: "flex-start" }}>
          <FormControl>
            <FormLabel>Course</FormLabel>
            <RadioGroup row defaultValue={"BTech"}>
              <FormControlLabel
                value={"top"}
                control={<Radio />}
                label="Top"
                labelPlacement="top"
              />
              <FormControlLabel
                value={"mca"}
                control={<Radio color="secondary" />}
                label="MCA"
                labelPlacement="bottom"
              />
              <FormControlLabel
                value={"msc"}
                control={<Radio color="success" />}
                label="MSC"
                labelPlacement="start"
              />
              <FormControlLabel
                value={"other"}
                control={<Radio color="default" />}
                label="Others"
                labelPlacement="end"
              />
            </RadioGroup>
          </FormControl>
        </Box>

        <Box sx={{ margin: "60px", display: "flex", alignItems: "flex-start" }}>
          <FormControl>
            <FormLabel>Course</FormLabel>
            <RadioGroup row defaultValue={"BTech"}>
              <FormControlLabel
                value={"BTech"}
                control={<Radio />}
                label="B. Tech"
              />
              <FormControlLabel
                value={"mca"}
                control={<Radio color="secondary" />}
                label="MCA"
              />
              <FormControlLabel
                value={"msc"}
                control={<Radio color="success" />}
                label="MSC"
              />
              <FormControlLabel
                value={"other"}
                control={<Radio color="default" />}
                label="Others"
              />
              <FormControlLabel
                value={"manual"}
                control={<Radio color="error" />}
                label="Error"
              />
            </RadioGroup>
          </FormControl>
        </Box>
        {/* Example of MUI Radio Buttons */}

        {/* Example of MUI Rating */}

        <Typography component="legend">Controlled</Typography>
        <Rating precision={0.5} />
        <Rating />

        {/* Example of MUI Rating */}

        <Box sx={{ width: 200, display:"flex", alignItems: "center" }}>
          <Stack spacing={2} direction="row" sx={{ mb: 1}}  alignItems= "center">
            <VolumeDown />
            <Slider aria-label="Volume" />
            <VolumeUp />
          </Stack>
          <Slider disabled defaultValue={30} aria-label="Disabled slider" />
        </Box>

        <Box sx={{ width: 200 }}>
          <FormControl fullWidth>
            <InputLabel>Age</InputLabel>
            <Select label="age" value={"age"}>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
    );
  }
}

export default MuiTypography;
