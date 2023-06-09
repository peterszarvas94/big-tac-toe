import { useContext } from "react";
import { AppContext } from "@/utils/AppContext";
import Game from "@/components/Game";
import Options from "@/components/Options";

export default function App() {

  const { game } = useContext(AppContext);

  if (game.status === "options") {
    return <Options />
  }

  return <Game />
}
