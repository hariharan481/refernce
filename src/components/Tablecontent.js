import { Box, Typography } from "@mui/material";
import React from "react";

export const Tablecontent = () => {
  return (
    <div>
      <Box
        sx={{
          height: "100%",
          width: "100%",
          mt: "20px",
        }}
      >
        <Typography variant="body2" color="grey">
          {" "}
          InclusionTerms
        </Typography>
        <Typography variant="body2" color="grey">
          {" "}
          Classical Cholera
        </Typography>
      </Box>

      <Box
        sx={{
          height: "100%",
          width: "100%",
          mt: "90px",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="body2" color="grey">
          {" "}
          Back refernce
        </Typography>
        <Typography variant="body2" color="grey">
          {" "}
          Alert
        </Typography>
        <Typography variant="body2" color="grey">
          {" "}
          Clinical definition
        </Typography>
        <Typography variant="body2" color="grey">
          {" "}
          Code history
        </Typography>
        <Typography variant="body2" color="grey">
          {" "}
          InclusionTerms
        </Typography>
        <Typography variant="body2" color="grey">
          {" "}
          Classical Cholera
        </Typography>
      </Box>
    </div>
  );
};
