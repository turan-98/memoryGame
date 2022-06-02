import CardFrontBack from "../../CardFrontBack";
import "./style.css"

const BoardGame = (amountCards) => {
    
    const $htmlCardFrontBack = CardFrontBack();
    const $htmlContent = $htmlCardFrontBack.repeat(amountCards)
    
    return `
        <section class="board-game centered">
            ${$htmlContent}
        </section>
    `;
}

export default BoardGame;