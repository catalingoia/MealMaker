import { Box, Typography } from "@mui/material";
import avatar from "../assets/avatar.png";
export default function Avatar() {
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <img src={avatar} style={{ height: "30px", width: "30px" }} />
        <Typography
          sx={{
            fontFamily: "Open Sans",
            paddingTop: "30px",
            paddingLeft: "15px",
          }}
        >
          Hello, Username!
        </Typography>
      </Box>
    </>
  );
}
