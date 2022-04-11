import PlayerName from "../../PlayerName";
import "./style.css"

const ScoreBoard = () =>{
    return `
        <header class="score-board">
            ${PlayerName('Player1')}
            ${PlayerName('Player2')}
        </header>
    `;
}

export default ScoreBoard;