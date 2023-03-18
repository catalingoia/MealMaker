import { useState, useRef, ChangeEvent } from "react";
import axios from "axios";
import { Box, CardContent, Card, Typography, Button } from "@mui/material";
import { Casino } from "@mui/icons-material";
const StartGame = () => {
  const [imageObject, setImageObject] = useState<any>(null);
  const handleFileInput = useRef<any>(null);

  const handleImageUpload = () => {
    if (handleFileInput.current) handleFileInput.current.click();
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setImageObject({
        imagePreview: URL.createObjectURL(event.target.files[0]),
        imageFile: event.target.files[0],
      });
      handleSendImage();
    }
  };

  const handleSendImage = () => {
    axios({
      method: "post",
      url: "http://192.168.0.157:3001/detect-objects",
      headers: {
        "Content-Type": "image/jpeg",
      },
      data: imageObject.imageFile,
    }).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
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
          onClick={handleImageUpload}
        >
          <Casino sx={{ marginRight: "7px" }}></Casino>
          Start
        </Button>
        <label>
          <input
            style={{ display: "none" }}
            type="file"
            accept="image/*"
            capture="environment"
            ref={handleFileInput}
            onChange={handleImageChange}
          />
        </label>
      </Card>
    </Box>
  );
};

export default StartGame;
