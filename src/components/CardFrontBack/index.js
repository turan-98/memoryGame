import CardGame from "../CardGame";

const CardFrontBack = () => {
  return `
    
    <article class="card-front-back">
        ${CardGame()}
        ${CardGame("logo","logo do js")}
    </article>

  `;
}

export default CardFrontBack;
