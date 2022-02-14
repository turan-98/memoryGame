import "./src/style/settings/colors.css";
import "./src/style/generic/reset.css";
import "./src/style/elements/base.css";


import CardGame from "./src/components/CardGame";
import PlayerScore from "./src/components/playerScore";

const $htmlCardGame = CardGame();
const $htmlPlayerScore = PlayerScore();
const $root = document.querySelector("#root");

$root.insertAdjacentHTML("beforeend",$htmlCardGame);
$root.insertAdjacentHTML("beforeend", $htmlPlayerScore);