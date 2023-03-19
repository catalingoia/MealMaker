import Recipe from "./Recipe";
import {
  List,
  Box,
  CardContent,
  Card,
  Typography,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";
import { getPastDoneRecipe } from "../api";
import axios from "axios";

const History = () => {
  const [meals, setMeals] = useState<any>([]);

  const getRecipes = (indexes: number[]) => {
    indexes.forEach((index: number) => {
      axios({
        url: `https://www.themealdb.com/api/json/v2/9973533/lookup.php?i=${index}`,
        method: "get",
      }).then(
        (response) => {
          if (response != null) {
            setMeals([...meals, response.data.meals[0]]);
          }
        },
        (error) => console.log(error)
      );
    });
  };

  useEffect(() => {
    getPastDoneRecipe().then((data) => {
      console.log(data);
      getRecipes(data);
    });
  }, []);

  return (
    <Box sx={{ display: "flex", justifyContent: "center", marginTop: "32px" }}>
      <Card
        sx={{
          backgroundColor: "#303747",
          maxWidth: "90vw",
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
          <List sx={{ maxHeight: "280px", overflowY: "scroll" }}>
            {meals.map((meal: any) => (
              <Recipe {...meal} />
            ))}
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};
export default History;
