import logo from './Images/logo.svg'


function App() {
  return (
    <div className = "page">
        <header className="header">
          <img className="header__logo" src={logo} alt="Around the US logo" />
        </header>
        <main className="main-content">
          <section className="profile">
            <img className="profile__image" src="#" alt="profile pic" />
            <div className="profile__overlay">
              <button className="profile__overlay_button" aria-label="change avatar" />
            </div>
            <div className="profile__description">
              <div className="profile__name">
                <h1 className="profile__text">Jacques Cousteau</h1>
                <button className="profile__edit" aria-label="Edit profile" />
              </div>
              <p className="profile__occupation">Explorer</p>
            </div>
            <button className="profile__add" aria-label="Add image" />
          </section>
          <section className="images">
            <ul className="images__list">
            </ul>
          </section>
        </main>
        <footer>
          <p className="footer__copyright">
            © 2020. Veronika Bowersock
          </p>
        </footer>
        <template id="images__card" />
        <div className="popup popup_form-edit popup_hidden">
          <div className="popup__content">
            <form className="popup__form popup__form_edit" noValidate>
              <button name="close_button" className="popup__close popup__close_form-edit" type="reset" aria-label="Close"> </button>
              <h2 className="popup__title">Edit Profile</h2>
              <input type="text" placeholder="Name" id="name-input" className="popup__field popup__field_name" name="name" required minLength={2} maxLength={40} />
              <span className="popup__input-error" id="name-input-error" />
              <input type="text" placeholder="About" id="about-input" className="popup__field popup__field_about" name="about" required minLength={2} maxLength={200} />
              <span className="popup__input-error" id="about-input-error" /> 
              <input type="submit" className="popup__save" aria-label="Save" defaultValue="Save" />
            </form>
          </div>
        </div>
        <div className="popup popup_form-add popup_hidden">
          <div className="popup__content">
            <form className="popup__form popup__form_add" noValidate>
              <button name="close_button" className="popup__close popup__close_form-add" type="reset" aria-label="Close popup"> </button>
              <h2 className="popup__title">New Place</h2>
              <input type="text" placeholder="Title" id="title-input" required minLength={1} maxLength={30} name="name" className="popup__field popup__field_title" />
              <span className="popup__input-error" id="title-input-error" />
              <input type="url" placeholder="Image Link" id="link-input" name="link" required className="popup__field popup__field_link" />
              <span className="popup__input-error" id="link-input-error" />
              <input type="submit" className="popup__save" aria-label="Save" defaultValue="Save" />
            </form>
          </div>
        </div>
        <div className="popup popup_confirm-delete popup_hidden">
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
              <input type="url" placeholder="Avatar Link" id="link-input" name="link" required className="popup__field popup__field_link" />
              <span className="popup__input-error" id="link-input-error" />
              <input type="submit" className="popup__save" aria-label="Save" defaultValue="Save" />
            </form>
          </div>
        </div>
        <div className="popup popup_image popup_hidden">
          <div className="popup__content popup__content_fullscreen">
            <button name="close_button" className="popup__close popup__close_image" aria-label="Close popup"> </button>  
            <img className="images__picture images__picture_fullscreen" src="#" alt="" />
            <p className="images__text images__text_fullscreen" />
          </div>
        </div>
      </div>
  );
}

export default App;
