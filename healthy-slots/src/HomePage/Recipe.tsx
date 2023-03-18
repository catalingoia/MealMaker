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
    <List>
      <Box
        sx={{
          display: "flex",
          backgroundColor: "#303747",
          marginBottom: "24px",
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: "64px", borderRadius: "20px", marginRight: "12px" }}
          image={props.image}
          alt="Live from space album cover"
        />
        <Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              sx={{
                color: "white",
                fontSize: "16px",
                fontFamily: "Open Sans",
                fontWeight: "600",
              }}
            >
              {props.title}
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontSize: "12px",
                fontFamily: "Open Sans",
              }}
            >
              {props.date}
            </Typography>
          </Box>
          <Typography
            sx={{
              color: "white",
              fontSize: "16px",
              fontFamily: "Open Sans",
              fontWeight: "600",
            }}
          >
            {props.description}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", backgroundColor: "#303747" }}>
        <CardMedia
          component="img"
          sx={{ width: "64px", borderRadius: "20px", marginRight: "12px" }}
          image={props.image}
          alt="Live from space album cover"
        />
        <Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              sx={{
                color: "white",
                fontSize: "18px",
                fontFamily: "Open Sans",
                fontWeight: "600",
              }}
            >
              {props.title}
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontSize: "12px",
                fontFamily: "Open Sans",
              }}
            >
              {props.date}
            </Typography>
          </Box>
          <Typography
            sx={{
              color: "white",
              fontSize: "16px",
              fontFamily: "Open Sans",
              fontWeight: "600",
            }}
          >
            {props.description}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{ display: "flex", backgroundColor: "#303747", marginTop: "24px" }}
      >
        <CardMedia
          component="img"
          sx={{ width: "64px", borderRadius: "20px", marginRight: "12px" }}
          image={props.image}
          alt="Live from space album cover"
        />
        <Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              sx={{
                color: "white",
                fontSize: "18px",
                fontFamily: "Open Sans",
                fontWeight: "600",
              }}
            >
              {props.title}
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontSize: "12px",
                fontFamily: "Open Sans",
              }}
            >
              {props.date}
            </Typography>
          </Box>
          <Typography
            sx={{
              color: "white",
              fontSize: "16px",
              fontFamily: "Open Sans",
              fontWeight: "600",
            }}
          >
            {props.description}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{ display: "flex", backgroundColor: "#303747", marginTop: "24px" }}
      >
        <CardMedia
          component="img"
          sx={{ width: "64px", borderRadius: "20px", marginRight: "12px" }}
          image={props.image}
          alt="Live from space album cover"
        />
        <Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              sx={{
                color: "white",
                fontSize: "18px",
                fontFamily: "Open Sans",
                fontWeight: "600",
              }}
            >
              {props.title}
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontSize: "12px",
                fontFamily: "Open Sans",
              }}
            >
              {props.date}
            </Typography>
          </Box>
          <Typography
            sx={{
              color: "white",
              fontSize: "16px",
              fontFamily: "Open Sans",
              fontWeight: "600",
            }}
          >
            {props.description}
          </Typography>
        </Box>
      </Box>
    </List>
  );
};

export default Recipe;
