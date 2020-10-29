function PopupWithImage(props) {
   const isOpen = "popup_hidden";
    if (typeof props.card !== "undefined"){
        isOpen = ""
    }
    console.log(props)
   
    return (
        <div className={`popup popup_image ${isOpen}`}>
        <div className="popup__content popup__content_fullscreen">
        <button name="close_button" className="popup__close popup__close_image" aria-label="Close popup" onClick={props.onClose}> </button>  
        <img className="images__picture images__picture_fullscreen" src={props.card} alt="" />
        <p className="images__text images__text_fullscreen" />
        </div>
        </div>
    )
}
export default PopupWithImage