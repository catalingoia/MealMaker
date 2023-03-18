import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FolderIcon from "@mui/icons-material/Folder";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HomeIcon from "@mui/icons-material/Home";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import CasinoIcon from "@mui/icons-material/Casino";
import StarIcon from "@mui/icons-material/Star";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Box } from "@mui/system";
import { useNavigate } from "react-router";

export default function NavBar() {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const navigate = useNavigate();

  return (
    <>
      <BottomNavigation
        sx={{
          width: "100%",
          bottom: 0,
          position: "absolute",
          backgroundColor: "#0C1426",
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
    </>
  );
}
