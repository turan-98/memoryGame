import CardFrontBack from "../../CardFrontBack";
import CardGame from "../../CardGame";
import "./style.css"

const BoardGame = (amountCards) => {
    
    const $htmlCardFrontBack = CardFrontBack();
    const $htmlContent = $htmlCardFrontBack.repeat(amountCards)
    
    return `
        <section class="board-game">
            ${$htmlContent}
        </section>
    `;
}

export default BoardGame;