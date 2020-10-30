function PopupWithForm(props) {
  const isOpen = props.isOpen ? "" : "popup_hidden";
  return (
    <div className={`popup popup_form-${props.name} ${isOpen}`}>
      <div className="popup__content">
        <form className={`popup__form popup__form_${props.name}`} noValidate>
          <button
            name="close_button"
            className={`popup__close popup__close_form-${props.name}`}
            type="reset"
            aria-label="Close"
            onClick={props.onClose}
          >
          </button>
          <h2 className="popup__title">{props.title}</h2>
          {props.children}
          <input
            type="submit"
            className="popup__save"
            aria-label="Save"
            defaultValue="Save"
          />
        </form>
      </div>
    </div>
  );
}
export default PopupWithForm;


