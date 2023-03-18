import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";
import EggAltOutlinedIcon from "@mui/icons-material/EggAltOutlined";
import Achievement from "./Achievement";
import CakeOutlinedIcon from "@mui/icons-material/CakeOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import RamenDiningIcon from "@mui/icons-material/RamenDining";
export default function Achievements() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography
        variant="h5"
        sx={{
          fontFamily: "Koulen",
          fontSize: "36px",
          color: "#6FDB8E",
          width: "500px",
          paddingTop: "64px",
          paddingLeft: "24px",
        }}
      >
        ACHIEVEMENTS
      </Typography>
      <Box
        sx={{
          paddingTop: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Achievement
          icon={<EggAltOutlinedIcon sx={{ fontSize: "40px" }} />}
          title={"Eggcelent!"}
          subtitle={"You have made 5 recipes with eggs!"}
          objective={5}
          currentStatus={5}
        />
        <Achievement
          icon={<RamenDiningIcon sx={{ fontSize: "40px" }} />}
          title={"Ramen expert!"}
          subtitle={"You have cooked ramen 5 times!"}
          objective={5}
          currentStatus={5}
        />
        <Achievement
          icon={<MenuBookOutlinedIcon sx={{ fontSize: "40px" }} />}
          title={"Master Chef!"}
          subtitle={"You have made 10 recipes!!"}
          objective={5}
          currentStatus={5}
        />
        <Achievement
          icon={<CakeOutlinedIcon sx={{ fontSize: "40px" }} />}
          title={"Cake Boss"}
          subtitle={"Make 3 desserts"}
          objective={3}
          currentStatus={1}
        />
        {/* < */}
        {/* <Card
          sx={{
            backgroundColor: "#8ee3a6",
            borderRadius: "20px",
          }}
        >
          <CardHeader
            avatar={<EggAltOutlinedIcon />}
            title="Eggcelent!"
            sx={{
              "& .MuiCardHeader-title": {
                fontFamily: "Open Sans",
              },
            }}
          ></CardHeader>
          <CardContent>
            <Typography
              sx={{ fontFamily: "Open Sans", fontSize: "16px", color: "white" }}
            >
              You have made 5 recipes with eggs!
            </Typography>
          </CardContent>
        </Card> */}
      </Box>
    </Box>
  );
}
