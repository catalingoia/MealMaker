import { Slots } from "./Slots";
import Box from "@mui/material/Box";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import { ChangeEvent, useRef, useState } from "react";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import Avatar from "../shared/Avatar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { addUserPoints } from "../api";

export default function Game() {
  const [lives, setLives] = useState(3);
  const [spinResults, setResults] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const navigate = useNavigate();

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleFileInput = useRef<any>(null);

  const handleImageUpload = () => {
    if (handleFileInput.current) handleFileInput.current.click();
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      handleSendImage(event.target.files[0]);
    }
  };

  const handleAddPoints = () => {};

  const handleSendImage = (image: any) => {
    axios({
      method: "post",
      url: "http://192.168.0.157:3001/detect-objects",
      headers: {
        "Content-Type": "image/jpeg",
      },
      data: image,
    }).then(
      (response) => {
        console.log(response);
        console.log(spinResults);
        const responseArray: string[] = Array.from(response.data.ingredients);
        console.log(responseArray);
        const containsAll = responseArray.every((element) => {
          return spinResults.includes(element as never);
        });
        console.log(containsAll);
        if (containsAll) {
          addUserPoints().then(() => {
            navigate(
              `/recipe?ingredients=${response.data.ingredients.join(",")}`
            );
          });
        } else {
          setOpenDialog((prev) => !prev);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const handleGo = () => {
    handleImageUpload();
  };

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
          sx={{ display: "flex", flexDirection: "column", paddingTop: "64px" }}
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
          gameFinish={(matches: any) => setResults(matches)}
          lives={lives}
          handleSpin={handleSpin}
          handleGo={handleGo}
        />
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
        <Dialog
          open={openDialog}
          onClose={handleCloseDialog}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Ingredients do not match"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Try another photo
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} autoFocus>
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </>
  );
}
