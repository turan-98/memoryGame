import "./style.css"
const CardGame = (icon = 'javascript', alt = 'Logo marca') => {
    return `
    
    <article class="card-game">
      <img src="img/${icon}.png" alt="${alt}"/>
    </article>
    ` ;
    
}

export default CardGame;
