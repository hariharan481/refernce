import React from "react";
import { Box } from "@mui/material";
import TabPanel from "./openTab";
import "../App.css";
const Table = () => {
  return (
    <Box className="Table-box">
      <div className="tab-head">Tabular Search</div>
      <TabPanel />
    </Box>
  );
};
export default Table;
