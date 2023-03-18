import AddIngredients from "./AddIngredients";
import StartGame from "./StartGame";
import History from "./History";
import Avatar from "../shared/Avatar";

export default function HomePage() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Avatar></Avatar>
      <AddIngredients></AddIngredients>
      <StartGame></StartGame>
      <History></History>
    </div>
  );
}
