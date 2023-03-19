import {
  Box,
  CardContent,
  Card,
  Typography,
  Button,
  CardMedia,
  List,
} from "@mui/material";
///
const Recipe = (props: any) => {
  return (
    <Box
      onClick={props.onClick}
      sx={{
        display: "flex",
        cursor: "pointer",
        backgroundColor: "#303747",
        marginBottom: "24px",
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: "64px", borderRadius: "20px", marginRight: "12px" }}
        image={props.strMealThumb}
        alt="Live from space album cover"
      />
      <Box>
        <Box sx={{ display: "flex", flexDirection: "column-reverse" }}>
          <Typography
            sx={{
              color: "white",
              fontSize: "16px",
              fontFamily: "Open Sans",
              fontWeight: "600",
              maxWidth: "70%",
            }}
          >
            {props.strMeal}
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontSize: "12px",
              fontFamily: "Open Sans",
            }}
          >
            {props.timestamp}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Recipe;
