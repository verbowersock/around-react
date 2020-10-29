function Card (props) {

    function handleClick() {
        props.onCardClick(props.card)
        console.log(props.card)
        console.log("card clicked")
    }
    
    return(
        <li className = "images__card" onClick = {handleClick}>
        <div className = "images__picture" style={{backgroundImage: `url(${props.link})`}}>
          <button class = "images__delete" aria-label="Delete image"></button>
        </div>
        <div className = "images__caption">
          <p className = "images__text">{props.name}</p>
          <div className = "images__like">
          <button className = "images__like-button" aria-label="Like image"></button>
          <span className = "images__like-count">{props.likes.length}</span>
        </div>
        </div>
      </li>
    )
}
export default Card