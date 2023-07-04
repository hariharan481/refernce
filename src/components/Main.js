import {
  Box,
  Button,
  Container,
  IconButton,
  Link,
  Stack,
  Tab,
  Typography,
} from "@mui/material";
import React from "react";
import Table from "./Table";
import { Star } from "@mui/icons-material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import VerticalTabs from "./Vertical";
import TabPanel from "./openTab";
import { Tablecontent } from "./Tablecontent";

export const Main = () => {
  return (
    <div>
      <Stack direction={"row"} gap={"10px"} spacing={5} marginBottom={3}>
        <Box
          classname="indexpage"
          sx={{
            height: "590px",
            width: "700px",
            display: "flex",
            border: "0.5px solid black",
            marginLeft: "10px",
          }}
        >
          <Box
            sx={{
              height: "20px",
              width: "700px",

              mt: "20px",
            }}
          >
            <Typography
              variant="subtitle1"
              fontFamily={"sans-serif"}
              color={"blue"}
              sx={{
                backgroundColor: "#ccc6ed",
                width: "100%",
              }}
            >
              Index Search
            </Typography>
          </Box>
        </Box>

        <Box
          classname="Tabularsearch"
          sx={{
            height: "590px",
            width: "800px",
            display: "flex",
            backgroundColor: "white",
            border: "0.5px solid black",
          }}
        >
          <Box
            sx={{
              height: "20px",
              width: "200px",

              mt: "20px",
            }}
          >
            <Typography
              sx={{
                backgroundColor: "#ccc6ed",
                width: "800px",
              }}
              variant="subtitle1"
              fontFamily={"sans-serif"}
              color={"black"}
            >
              Tabular Search
            </Typography>
          </Box>
          <Stack direction={"column"} mt={9} ml={-25}>
            {/*   <Typography
                variant="subtitle1"
                fontFamily={"sans-serif"}
                color={"blueviolet"}
                fontWeight={600}
                ml={-25}
                sx={{
                  borderBottom: "0.3px solid grey",
                  width: "1000px",
                }}
              >
                Code details
              </Typography>
            */}
            <TabPanel />
            <Box
              sx={{
                height: "35px",
                width: "800px",
                backgroundColor: "#c8e2dd",
                color: "black",
                fontFamily: "sans-serif",
                fontSize: "13px",

                mt: "20px",
              }}
            >
              <Stack direction={"row"} gap={"70px"} ml={5}>
                <Link
                  sx={{
                    cursor: "pointer",
                  }}
                  variant="subtitle1"
                  fontWeight={"700"}
                >
                  Code notes
                </Link>

                <Link
                  sx={{
                    cursor: "pointer",
                  }}
                  variant="subtitle1"
                  fontWeight={"700"}
                >
                  Section notes
                </Link>
                <Link
                  sx={{
                    cursor: "pointer",
                  }}
                  variant="subtitle1"
                  fontWeight={"700"}
                >
                  Chapter Notes
                </Link>
                <Link
                  sx={{
                    cursor: "pointer",
                  }}
                  variant="subtitle1"
                  fontWeight={"700"}
                >
                  Chapter guidlines
                </Link>
              </Stack>

              <Tablecontent />
            </Box>
          </Stack>
        </Box>
      </Stack>
    </div>
  );
};
