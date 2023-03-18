import { Slots } from "./Slots";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { useState } from "react";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import Avatar from "../shared/Avatar";

export default function Game() {
  const [lives, setLives] = useState(3);

  const handleSpin = () => {
    setLives((prev) => prev - 1);
  };

  const livesElements = [];
  for (let i = 0; i < lives; i++) {
    livesElements.push(
      <LunchDiningIcon sx={{ bac: "green", paddingRight: "5px" }} />
    );
  }
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          paddingLeft: "24px",
        }}
      >
        <Box
          sx={{ display: "flex", flexDirection: "column", paddingTop: "124px" }}
        >
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Koulen",
              fontSize: "36px",
              color: "#6FDB8E",
              width: "500px",
            }}
          >
            TRY YOUR LUCK!
          </Typography>
          <Typography sx={{ paddingTop: "3px" }}>
            Press SPIN and let the faith decide your next recipe
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              paddingTop: "5px",
            }}
          >
            <Typography
              fontWeight={"bold"}
              sx={{ paddingRight: "8px", right: 0 }}
            >
              Lives:{" "}
            </Typography>
            <div>{livesElements}</div>
          </Box>
        </Box>

        <Slots
          gameFinish={(matches: any) => console.log(matches)}
          lives={lives}
          handleSpin={handleSpin}
        />
      </Box>
    </>
  );
}
