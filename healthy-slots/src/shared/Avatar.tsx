import { Box, Typography } from "@mui/material";
import { addPastDoneRecipe } from "../api";
import avatar from "../assets/avatar.png";
export default function Avatar() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          paddingTop: "10px",
          paddingLeft: "25px",
          paddingBottom: "10px",
        }}
        onClick={() => {
          addPastDoneRecipe("52773");
        }}
      >
        <img src={avatar} style={{ height: "40px", width: "40px" }} />
        <Typography
          sx={{
            fontSize: "16px",
            fontFamily: "Open Sans",
            paddingLeft: "10px",
          }}
        >
          Hello, Username!
        </Typography>
      </Box>
    </>
  );
}
