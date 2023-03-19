import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getUserPoints } from "../api";
import kaufland from "../assets/kaufland.png";
import lidl from "../assets/lidl.png";
import mega from "../assets/mega.png";

export default function Rewards() {
  const [userPoints, setUserPoints] = useState(null);

  const fetchData = () => {
    return getUserPoints().then((response) => {
      setUserPoints(response);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  getUserPoints().then((result) => {
    const userPoints = result;
  });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        paddingLeft: "24px",
        paddingRight: "24px",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontFamily: "Koulen",
          fontSize: "36px",
          color: "#6FDB8E",
          width: "500px",
          paddingTop: "30px",
        }}
      >
        REWARDS
      </Typography>
      <Box sx={{ display: "flex", alignItems: "baseline" }}>
        <Typography
          sx={{ fontFamily: "Open Sans", fontSize: "40px", fontWeight: "800" }}
        >
          {userPoints}
        </Typography>
        <Typography sx={{ fontFamily: "Open Sans", fontSize: "14px" }}>
          POINTS
        </Typography>
      </Box>
      <Typography
        sx={{ fontFamily: "Open Sans", fontSize: "14px", fontWeight: "700" }}
      >
        Partners
      </Typography>
      <Box
        sx={{
          backgroundColor: "#303747",
          maxWidth: "90vh",
          height: "148px",
          borderRadius: "20px",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <img src={kaufland} style={{ width: "100px", height: "100px" }} />
        <img src={mega} style={{ width: "100px", height: "100px" }} />
        <img src={lidl} style={{ width: "100px", height: "100px" }} />
      </Box>
      <Typography
        sx={{ fontFamily: "Open Sans", fontSize: "14px", fontWeight: "600" }}
      >
        Get your discount QR code
      </Typography>
      <Box
        sx={{
          marginTop: "5px",
          backgroundColor: "#303747",
          maxWidth: "90vh",
          height: "97px",
          borderRadius: "20px",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            height: "64px",
            width: "64px",
            backgroundColor: "#8EE3A6",
            borderRadius: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ color: "white", fontSize: "20", fontWeight: "600" }}
          >
            5%
          </Typography>
        </Box>
        <Box
          sx={{
            height: "64px",
            width: "64px",
            backgroundColor: "#8EE3A6",
            borderRadius: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ color: "white", fontSize: "20", fontWeight: "600" }}
          >
            10%
          </Typography>
        </Box>
        <Box
          sx={{
            height: "64px",
            width: "64px",
            backgroundColor: "#8EE3A6",
            borderRadius: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ color: "white", fontSize: "20", fontWeight: "600" }}
          >
            15%
          </Typography>
        </Box>
        <Box
          sx={{
            height: "64px",
            width: "64px",
            backgroundColor: "#8EE3A6",
            borderRadius: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ color: "white", fontSize: "20", fontWeight: "600" }}
          >
            20%
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
