import CardGame from "../../CardGame";
import "../../CardGame/style.css"

const BoardGame = (amountCards) => {
    
    const $htmlCardGame = CardGame();
    const $htmlBoardGame = $htmlCardGame.repeat(amountCards)
    
    return $htmlBoardGame;

}

export default BoardGame;