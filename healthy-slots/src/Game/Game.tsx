import { Slots } from "./Slots";
import Box from "@mui/material/Box";

export default function Game() {
  return (
    <>
      <Slots gameFinish={(matches: any) => console.log(matches)} />
    </>
  );
}
