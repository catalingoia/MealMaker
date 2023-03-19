import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import CasinoIcon from "@mui/icons-material/Casino";
import StarIcon from "@mui/icons-material/Star";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { useLocation, useNavigate } from "react-router";
import { useEffect } from "react";

export default function NavBar() {
  const [value, setValue] = React.useState("home");

  const location = useLocation();
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const navigate = useNavigate();

  useEffect(() => {
    const currentRoute = location.pathname;
    console.log(currentRoute);
  });
  return (
    <BottomNavigation
      sx={{
        left: 0,
        bottom: 0,
        position: "absolute",
        backgroundColor: "#0C1426",
        width: "100%",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
        label="Home"
        value="home"
        icon={<HomeIcon />}
        onClick={() => {
          navigate("/");
        }}
        sx={{ color: "white" }}
      />
      <BottomNavigationAction
        sx={{ color: "white" }}
        label="Recipes"
        value="recipes"
        onClick={() => {
          navigate("/recipe");
        }}
        icon={<AutoStoriesIcon />}
      />
      <BottomNavigationAction
        label="Game"
        value="game"
        onClick={() => {
          navigate("/game");
        }}
        sx={{ color: "white" }}
        icon={<CasinoIcon />}
      />
      <BottomNavigationAction
        // onClick={()}
        label="Achievements"
        value="achievements"
        onClick={() => {
          navigate("/achievements");
        }}
        sx={{ color: "white" }}
        icon={<StarIcon />}
      />
      <BottomNavigationAction
        label="Rewards"
        value="rewards"
        onClick={() => {
          navigate("/rewards");
        }}
        sx={{ color: "white" }}
        icon={<ShoppingBagIcon />}
      />
    </BottomNavigation>
  );
}
