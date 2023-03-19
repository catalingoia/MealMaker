import { Box, Typography } from "@mui/material";

interface AchievementProps {
  icon: any;
  title: string;
  subtitle: string;
  objective: number;
  currentStatus: number;
}

export default function Achievement(props: AchievementProps) {
  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor:
          props.currentStatus % props.objective === 0 ? "#8EE3A6" : "#CDCDCD",
        borderRadius: "20px",
        width: "90%",
        height: "78px",
        alignItems: "center",
        justifyContent: "flex-start",
        marginBottom: "16px",
      }}
    >
      <Box sx={{ paddingX: "10px" }}>{props.icon}</Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography fontWeight={"bold"} fontFamily={"Open Sans"}>
          {props.title}
        </Typography>
        <Box sx={{ display: "flex" }}>
          <Typography fontFamily={"Open Sans"}>{props.subtitle}</Typography>
        </Box>
      </Box>
    </Box>
  );
}
