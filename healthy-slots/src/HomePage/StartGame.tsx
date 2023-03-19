import { useState, useRef, ChangeEvent } from "react";
import axios from "axios";
import { Box, CardContent, Card, Typography, Button } from "@mui/material";
import { Casino } from "@mui/icons-material";
import { useNavigate } from "react-router";
const StartGame = () => {
  const [imageObject, setImageObject] = useState<any>(null);
  const handleFileInput = useRef<any>(null);

  const navigate = useNavigate();

  const startGame = () => {
    navigate(`/game`);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", marginTop: "16px" }}>
      <Card
        sx={{
          backgroundColor: "#7fc899",
          maxWidth: "90vw",
          borderRadius: "20px",
        }}
      >
        <CardContent>
          <Typography
            variant="h5"
            sx={{ fontFamily: "Koulen", fontSize: "28px", color: "white" }}
          >
            DO YOU FEEL LUCKY? PLAY THE FOOD SLOTS MACHINE!
          </Typography>
        </CardContent>
        <Button
          disableElevation
          sx={{
            backgroundColor: "#8ee3a6",
            fontFamily: "Open Sans",
            fontSize: "20px",
            marginBottom: "17px",
            marginLeft: "17px",
            textTransform: "none",
            borderRadius: "10px",
            "&:hover": {
              backgroundColor: "#72b589",
            },
          }}
          variant="contained"
          onClick={startGame}
        >
          <Casino sx={{ marginRight: "7px" }}></Casino>
          Start
        </Button>
      </Card>
    </Box>
  );
};

export default StartGame;
