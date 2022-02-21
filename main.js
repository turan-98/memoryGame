import "./src/style/settings/colors.css";
import "./src/style/generic/reset.css";
import "./src/style/elements/base.css";

import PlayerScore from "./src/components/PlayerScore";
import PlayerName from "./src/components/PlayerName";
import BoardGame from "./src/components/objects/BoardGame";

const $htmlBoardGame = BoardGame(6);
const $htmlPlayerScore = PlayerScore();
const $htmlPlayerName = PlayerName();

const $root = document.querySelector("#root");


$root.insertAdjacentHTML("beforeend", $htmlBoardGame);
$root.insertAdjacentHTML("beforeend", $htmlPlayerScore);
$root.insertAdjacentHTML("beforebegin", $htmlPlayerName);

