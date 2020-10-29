function PopupWithForm (props) {
    const isOpen = props.isOpen? "" : "popup_hidden"
    return (
<div className={`popup popup_form-${props.name} ${isOpen}`}>
<div className="popup__content">
  <form className={`popup__form popup__form_${props.name}`} noValidate>
    <button name="close_button" className={`popup__close popup__close_form-${props.name}`} type="reset" aria-label="Close" onClick = {props.onClose}> </button>
    <h2 className="popup__title">{props.title}</h2>
    {props.children}
    <input type="submit" className="popup__save" aria-label="Save" defaultValue="Save" />
  </form>
</div>
</div>
    )
{/*
</div>
<div className="popup popup_form-add popup_hidden">
<div className="popup__content">
  <form className="popup__form popup__form_add" noValidate>
    <button name="close_button" className="popup__close popup__close_form-add" type="reset" aria-label="Close popup"> </button>
    <h2 className="popup__title">New Place</h2>
    
  </form>
</div>
</div>
<div className="popup popup_form-delete popup_hidden">
<div className="popup__content">
  <form className="popup__form popup__form_delete">
    <button name="close_button" className="popup__close popup__close_form-delete" type="reset" aria-label="Close"> </button>
    <h2 className="popup__title">Are you sure?</h2>  
    <input type="submit" className="popup__save" aria-label="Yes" defaultValue="Yes" />
  </form>
</div>
</div>
<div className="popup popup_form-avatar popup_hidden">
<div className="popup__content">
  <form className="popup__form popup__form_avatar" noValidate>
    <button name="close_button" className="popup__close popup__close_form-edit" type="reset" aria-label="Close"> </button>
    <h2 className="popup__title">Change profile picture</h2>
    
  </form>
</div>
</div>


        </div>
    )
*/}
    
}
export default PopupWithForm

