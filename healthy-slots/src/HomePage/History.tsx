import Recipe from "./Recipe";
import { Box, CardContent, Card, Typography, Button } from "@mui/material";
import { useEffect } from "react";
import { getPastDoneRecipe } from "../api";

const History = () => {
  const object = {
    image: "/logo192.png",
    title: "Prima reteta",
    date: "21/09/2024",
    description: "e buna buna buna buna buna buna de tot",
  };

  useEffect(() => {
    getPastDoneRecipe().then((data) => {
      console.log(data);
    });
  }, []);

  return (
    <Box sx={{ display: "flex", justifyContent: "center", marginTop: "32px" }}>
      <Card
        sx={{
          backgroundColor: "#303747",
          maxWidth: "90vw",
          minWidth: "90vw",
          borderRadius: "20px",
        }}
      >
        <CardContent>
          <Typography
            sx={{
              color: "white",
              fontFamily: "Open Sans",
              fontSize: "18px",
              fontWeight: "600",
              position: "sticky",
              paddingBottom: "24px",
            }}
          >
            History
          </Typography>
          <Box sx={{ maxHeight: "280px", overflowY: "scroll" }}>
            <Recipe {...object}></Recipe>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};
export default History;
