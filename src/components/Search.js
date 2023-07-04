import {
  Autocomplete,
  Box,
  Icon,
  Input,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "../App.css";

const Search = () => {
  const [result, setResult] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [first, setfirst] = useState("");
  const [word, setword] = useState("");
  function handlechange(e) {
    setword(e.target.value);
  }
  console.log(word);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(`/codes/${word}/matches`);
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
  }, [word]);
  console.log("our result is", result);
  console.log(first);
  global.values = first;
  console.log(global.values.code);
  return (
    <>
      <Box
        sx={{
          height: "80px",

          position: "static",
        }}
      >
        <Stack
          sx={{ margin: "auto", color: "black", mt: "20px" }}
          direction={"row"}
          gap={5}
        >
          <Fragment>
            <Autocomplete
              className="App-body"
              id="users"
              defaultValue={null}
              getOptionLabel={(result) =>
                `${result.id} ${result.shortDescription}`
              }
              options={result}
              sx={{
                width: "1000px",

                backgroundColor: "white",
                height: "25px",
                ml: "400px",
              }}
              isoptionEqualToValue={(option, value) =>
                option.Description === value.Description
              }
              noOptionsText={"PLEASE ENTER VALID CODES"}
              open={open}
              onInputChange={(_, value) => {
                if (value.length === 0) {
                  if (open) setOpen(false);
                } else {
                  if (!open) setOpen(true);
                }
              }}
              onClose={() => setOpen(false)}
              popupIcon={<SearchIcon />}
              onChange={(event, newValue) => {
                setfirst(newValue);
              }}
              autoSelect
              renderOption={(props, result) => (
                <Box {...props} key={result.id}>
                  {result.id} {result.shortDescription}
                </Box>
              )}
              renderInput={(parms) => (
                <TextField
                  {...parms}
                  onChange={handlechange}
                  label="Search for code"
                />
              )}
              PaperProps={{
                style: {
                  maxHeight: 300, // Set the desired maximum height
                },
              }}
            />
          </Fragment>
        </Stack>
      </Box>
    </>
  );
};
export default Search;
