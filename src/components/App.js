import react from 'react'
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import PopupWithForm from './PopupWithForm';
import PopupWithImage from './PopupWithImage';


function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = react.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = react.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = react.useState(false);
  const [selectedCard, setSelectedCard] = react.useState();


function handleEditAvatarClick () {
    setEditAvatarPopupOpen(true);
}

function handleEditProfileClick () {
  setEditProfilePopupOpen(true);
}

function handleAddPlaceClick () {
  setAddPlacePopupOpen(true);
}

function closeAllPopups () {
  setEditAvatarPopupOpen(false);
  setEditProfilePopupOpen(false);
  setAddPlacePopupOpen(false);
  setSelectedCard()
}

function handleCardClick(card_id) {
  setSelectedCard(card_id)
}
  return (
    <div className = "page">
        <Header />
        <Main 
                      onEditProfile = {handleEditProfileClick}
                      onAddPlace = {handleAddPlaceClick}
                      onEditAvatar = {handleEditAvatarClick}
                      onCardClick = {handleCardClick}
                      />  
        <PopupWithForm 
                      onClose = {closeAllPopups}
                      name="edit" 
                      title = "Edit Profile" 
                      isOpen = {isEditProfilePopupOpen}
                      >
                      <input type="text" placeholder="Name" id="name-input" className="popup__field popup__field_name" name="name" required minLength={2} maxLength={40} />
                      <span className="popup__input-error" id="name-input-error" />
                      <input type="text" placeholder="About" id="about-input" className="popup__field popup__field_about" name="about" required minLength={2} maxLength={200} />
                      <span className="popup__input-error" id="about-input-error" /> 
        </PopupWithForm>
        <PopupWithForm
                      onClose = {closeAllPopups}
                      name="add" 
                      title = "New Place" 
                      isOpen = {isAddPlacePopupOpen}
                      >
                      <input type="text" placeholder="Title" id="title-input" required minLength={1} maxLength={30} name="name" className="popup__field popup__field_title" />
                      <span className="popup__input-error" id="title-input-error" />
                      <input type="url" placeholder="Image Link" id="link-input" name="link" required className="popup__field popup__field_link" />
                      <span className="popup__input-error" id="link-input-error" />
        </PopupWithForm>
        <PopupWithForm
                      onClose = {closeAllPopups}
                      name="avatar" 
                      title = "Change profile picture" 
                      isOpen = {isEditAvatarPopupOpen}
                      > 
                      <input type="url" placeholder="Avatar Link" id="link-input" name="link" required className="popup__field popup__field_link" />
                      <span className="popup__input-error" id="link-input-error" />
        </PopupWithForm>
        
        <PopupWithImage 
                      onClose = {closeAllPopups}
                      card = {selectedCard}
        />
                    
        <Footer />
        <template id="images__card" />
    </div>   
  );
}

export default App;
