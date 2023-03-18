import { Box, Typography } from "@mui/material";
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
      >
        <img src={avatar} style={{ height: "30px", width: "30px" }} />
        <Typography
          sx={{
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
