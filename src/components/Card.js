function Card(props) {
  function handleClick (event) {
    //this is the only way i could make this work. event.preventDefault doesn't work here and I don't know why. If you have any better suggestion, I'm all ears but I spent hours scouring google and stackoverflow and this is the only solution that stopped the event from firing)
    if (event.target.localName !== "button"){
      props.onCardClick(props.card);
    }
  }
    return (
      <li className="images__card">
        <div
          className="images__picture"
          style={{ backgroundImage: `url(${props.card.link})` }}
          onClick={handleClick}>
          <button className="images__delete" aria-label="Delete image"></button>
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