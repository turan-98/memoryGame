import "./src/style/settings/colors.css";
import "./src/style/generic/reset.css";
import "./src/style/elements/base.css";

import PlayerScore from "./src/components/PlayerScore";
import PlayerName from "./src/components/PlayerName";
import BoardGame from "./src/components/objects/BoardGame";
import ScoreBoard from "./src/components/objects/ScoreBoard";


const $htmlPlayerScore = PlayerScore();


const $root = document.querySelector("#root");

$root.insertAdjacentHTML(
    "beforebegin", 
        `
            ${ScoreBoard()}
            ${BoardGame(6)}
        `
    );

