import { Box, Typography } from "@mui/material";

export default function Rewards() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography
        variant="h5"
        sx={{
          fontFamily: "Koulen",
          fontSize: "36px",
          color: "#6FDB8E",
          width: "500px",
          paddingTop: "64px",
          paddingLeft: "24px",
        }}
      >
        REWARDS
      </Typography>
    </Box>
  );
}
