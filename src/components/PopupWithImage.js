function PopupWithImage(props) {
    console.log(props);
  
    const isOpen = props.card != "" ? "" : "popup_hidden";
  
    return (
      <div className={`popup popup_image ${isOpen}`}>
        <div className="popup__content popup__content_fullscreen">
          <button
            name="close_button"
            className="popup__close popup__close_image"
            aria-label="Close popup"
            onClick={props.onClose}
          >
          </button>
          <img
            className="images__picture images__picture_fullscreen"
            src={props.card.link}
            alt={props.card.name}
          />
          <p className="images__text images__text_fullscreen">
            {props.card.name}
          </p>
        </div>
      </div>
    );
  }
  export default PopupWithImage;