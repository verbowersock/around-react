function Card(props) {
    function handleClick() {
      props.onCardClick(props.card);
      console.log(props.card);
      console.log("card clicked");
    }
  
    return (
      <li className="images__card">
        <div
          className="images__picture"
          style={{ backgroundImage: `url(${props.card.link})` }}
          onClick={handleClick}
        >
          <button class="images__delete" aria-label="Delete image"></button>
        </div>
        <div className="images__caption">
          <p className="images__text">{props.card.name}</p>
          <div className="images__like">
            <button
              className="images__like-button"
              aria-label="Like image"
            ></button>
            <span className="images__like-count">{props.card.likes.length}</span>
          </div>
        </div>
      </li>
    );
  }
  export default Card;