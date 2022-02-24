import "./style.css"
const CardGame = () => {
    return `
    
    <article type="button" class="card-game" onclick="flipCard()">
      <div class="flipper">
         <div class="front">
            <img src="src/components/img/logo.png" alt="logo fox"/>
         </div>
         <div class="back">
            <img src="src/components/img/log.png" alt="logo fox"/>
         </div>
      </div>
    </article>
    ` 
    
}


export default CardGame;
