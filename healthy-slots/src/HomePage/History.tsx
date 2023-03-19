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
import { getPastDoneRecipe, addPastDoneRecipe } from "../api";
import axios from "axios";
import { useNavigate } from "react-router";

const History = () => {
  const navigate = useNavigate();

  const [meals, setMeals] = useState<any>([]);

  const getRecipes = (entries: any) => {
    Promise.all(
      Object.keys(entries).map((entry: string) =>
        axios({
          url: `https://www.themealdb.com/api/json/v2/9973533/lookup.php?i=${entries[entry]}`,
          method: "get",
        })
      )
    ).then((results) => {
      const processedResults = results.map(({ data: { meals } }: any) => {
        const timestamp = Object.keys(entries).find(
          (key) => entries[key] === meals[0].idMeal
        ) as string;
        console.log(meals);

        let dateFormat = new Date(+timestamp);
        let date =
          dateFormat.getDate() +
          "/" +
          (dateFormat.getMonth() + 1) +
          "/" +
          dateFormat.getFullYear();

        return { ...meals[0], timestamp: date };
      });
      setMeals(processedResults);
    });
  };

  useEffect(() => {
    getPastDoneRecipe().then((data) => {
      console.log(data);
      getRecipes(data);
    });
  }, []);

  return (
    <Box sx={{ display: "flex", justifyContent: "center", marginTop: "18px" }}>
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
              paddingBottom: "15px",
            }}
          >
            History
          </Typography>

          <List
            sx={{ maxHeight: "160px", overflowY: "scroll", minHeight: "160px" }}
          >
            {meals.map((meal: any) => (
              <Recipe
                onClick={() =>
                  navigate(`/recipe?ingredients=${meal.strIngredient1}`)
                }
                key={meal}
                {...meal}
              />
            ))}
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};
export default History;
