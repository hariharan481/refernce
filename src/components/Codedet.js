import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { Star } from "@mui/icons-material";

import React, { useEffect, useState } from "react";

const Codedet = () => {
  const [result, setResult] = useState("");
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(`/codes/${global.values.code}/details`);
        if (response.ok) {
          const data = await response.json();
          setResult(data);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchBooks();
  }, [global.values.code]);
  console.log("our result is", result);
  return (
    <div>
      <table>
        <thead>
          <tr></tr>
        </thead>
        <tbody>
          {result && (
            <tr key={result.code}>
              <td>{result.code}</td>
              <td>{result.longDescription}</td>
              <td>
                {result.billable === true ? (
                  <Button
                    disableElevation
                    disableFocusRipple
                    sx={{
                      width: "150px",
                      height: "15px",
                      color: "white",
                      fontFamily: "sans-serif",
                      ml: "20px",
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
                ) : (
                  <Button
                    disableElevation
                    disableFocusRipple
                    sx={{
                      width: "150px",
                      height: "15px",
                      color: "white",
                      fontFamily: "sans-serif",
                      ml: "170px",
                      backgroundColor: "red",
                      textTransform: "lowercase",
                      fontWeight: "700px",
                      textAlign: "center",
                    }}
                  >
                    non Billable Codes{" "}
                  </Button>
                )}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
export default Codedet;
