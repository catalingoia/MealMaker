import { Button, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useSearchParams } from "react-router-dom";
import NavBar from "../shared/NavBar";
import { AddAPhoto, ArrowForwardIos } from "@mui/icons-material";

export default function Recipe() {
  const [recipes, setRecipes] = useState<any>([]);
  const [specificRecipe, setSpecificRecipe] = useState<any>([]);
  const [params] = useSearchParams();
  const ingredients = params.get("ingredients");

  const [index, setIndex] = useState<any>(0);
  const handleFileInput = useRef<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (recipes[index]) {
      console.log("17-18");
      axios
        .get(
          `https://www.themealdb.com/api/json/v2/9973533/lookup.php?i=${recipes[index]?.idMeal}`
        )
        .then((response: any) => {
          setSpecificRecipe(response.data.meals);
          console.log("FOR SPECIFIC RECIPE", response.data.meals);
        });
    }
  }, [index, recipes.length]);

  useEffect(() => {
    if (ingredients) {
      axios
        .get(
          `https://www.themealdb.com/api/json/v2/9973533/filter.php?i=${params.get(
            "ingredients"
          )}`
        )
        .then((response: any) => {
          setRecipes(response.data.meals);
        });
    }
  }, [ingredients]);

  const handleImageUpload = () => {
    if (handleFileInput.current) handleFileInput.current.click();
  };

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
        navigate(`/recipe?ingredients=${response.data.ingredients.join(",")}`);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      handleSendImage(event.target.files[0]);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flex: "1",
        overflow: "auto",
        margin: "25px",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          width: "100%",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: "#8ee3a6",
            fontFamily: "Koulen",
            fontSize: "36px",
            marginBottom: " 10px",
          }}
        >
          RECIPES
        </Typography>
      </div>
      {ingredients ? (
        <>
          <Typography
            variant="h2"
            sx={{
              marginBottom: "10px",
              color: "black",
              fontFamily: "Open Sans",
              fontSize: "18px",
            }}
          >
            Here is the recipe for the following ingredients of your choice:
            {ingredients}
          </Typography>

          <img
            style={{ borderRadius: "8px", marginBottom: "2px" }}
            src={recipes[index]?.strMealThumb}
          ></img>

          <Typography
            variant="h4"
            sx={{
              marginBottom: "8px",
              color: "black",
              fontFamily: "Open Sans",
              fontSize: "18px",
              margin: "10px 0px 20px 0px",
            }}
          >
            {specificRecipe[0]?.strInstructions}
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              flexDirection: "row",
              marginBottom: "60px",
            }}
          >
            <Button
              sx={{
                width: "146px",
                backgroundColor: "#6fdb8e",
                borderRadius: "20px",
                color: "white",
                marginLeft: "19%",
                "&:focus": {
                  backgroundColor: "#6fdb8e",
                },
              }}
            >
              Accept
            </Button>
            {recipes.length > 1 ? (
              <IconButton
                onClick={() => {
                  if (index + 1 > recipes.length) {
                    setIndex(0);
                  } else {
                    setIndex(index + 1);
                  }
                  console.log("CLICKED ");
                }}
              >
                <ArrowForwardIos />
              </IconButton>
            ) : (
              <></>
            )}
          </div>
        </>
      ) : (
        <Button
          disableElevation
          sx={{
            backgroundColor: "#7fc899",
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
          <AddAPhoto sx={{ marginRight: "7px" }}></AddAPhoto>
          Add ingredients
        </Button>
      )}

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
    </Box>
  );
}
