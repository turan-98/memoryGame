import CardGame from "../../CardGame";
import "./style.css"

const BoardGame = (amountCards) => {
    
    const $htmlCardGame = CardGame();
    const $htmlContent = $htmlCardGame.repeat(amountCards)
    
    return `
        <section class="board-game">
            ${$htmlContent}
        </section>
    `;

}

export default BoardGame;