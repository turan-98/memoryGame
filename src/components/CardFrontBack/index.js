import CardGame from "../CardGame";
import "./style.css"

/** namespace */
window.CardFrontBack = {}

window.CardFrontBack.handleClick  = (e) => {
  const $origin = e.target;
  const $cardFrontBack = $origin.closest('.card-front-back')
  
  $cardFrontBack.classList.toggle('-active')

}

const CardFrontBack = () => {

  return `
    
    <article class="card-front-back" onClick="CardFrontBack.handleClick(event)">
      <div class="card -front">
          ${CardGame()}
      </div>
      <div class="card -back">
          ${CardGame("logo","logo do js")}
      </div>
    </article>

  `;
}

export default CardFrontBack;
