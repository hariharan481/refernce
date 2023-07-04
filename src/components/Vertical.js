import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, IconButton, Stack } from "@mui/material";
import { Star } from "@mui/icons-material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: 224,
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab label="Code Details" {...a11yProps(0)} />
        <Tab label="Item Two" {...a11yProps(1)} />
        <Tab label="Item Three" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Typography variant="subtitle2" color={"black"}>
          A00.0 cholera due to vibreo Cholrate
          <Button
            disableElevation
            disableFocusRipple
            sx={{
              width: "150px",
              height: "15px",
              color: "white",
              fontFamily: "sans-serif",
              ml: "170px",
              backgroundColor: "green",
              textTransform: "lowercase",
              fontWeight: "700px",
              textAlign: "center",
            }}
          >
            Billable Codes{" "}
            <IconButton disableFocusRipple disableTouchRipple>
              <Star
                sx={{
                  color: "white",
                  fontSize: "15px",
                }}
              />
            </IconButton>
          </Button>
        </Typography>

        <Box
          sx={{
            height: "35px",
            width: "800px",
            backgroundColor: "#c8e2dd",
            color: "black",
            fontFamily: "sans-serif",
            fontSize: "13px",
            marginLeft: "-15px",
            mt: "20px",
          }}
        >
          <Stack direction={"row"} gap={"40px"} mt={4}>
            <Typography variant="subtitle1" color="black" fontWeight={"700"}>
              Code notes
            </Typography>
            <Typography variant="subtitle1" color={"black"} fontWeight={"700"}>
              Section notes
            </Typography>
            <Typography variant="subtitle1" color={"black"} fontWeight={"700"}>
              Chapter Notes
            </Typography>
            <Typography variant="subtitle1" color={"black"} fontWeight={"700"}>
              Chapter guidlines
            </Typography>
          </Stack>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
}
