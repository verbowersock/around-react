import React from 'react'
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import PopupWithImage from './PopupWithImage';
import { api } from "../utils/api.js";
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddNewCardPopup from './AddNewCardPopup';



function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState(null);
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((result) => {
        setCards(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.addLike(card._id, isLiked)
    .then((newCard) => {
      const newCards = cards.map((c) => c._id === card._id ? newCard: c);
      setCards(newCards);
    })
    .catch ((error) => {
      console.log(error)
    })
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
    .then(() => {
      const newCards = cards.filter((c) => c._id !== card._id);
      setCards(newCards);
  })
  .catch ((error) => {
    console.log(error)
  })
}



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
  setSelectedCard(null)
}

function handleCardClick(card) {
  setSelectedCard(card)
}

function handleUpdateUser({name, about}) {
  api.updateUserInfo({name, about})
  .then((data)=> {
    setCurrentUser(data);
  })
  .catch ((error) => {
    console.log(error)
  })
  closeAllPopups();
}

function handleUpdateAvatar({avatar}) {
  api.updateAvatar(avatar.current.value)
  .then((data) => {
  setCurrentUser(data);
})
  .catch ((error) => {
  console.log(error)
})
  closeAllPopups();  
}

function handleAddPlaceSubmit({title, url}) {
  api.postNewCard({title, url}).then((data) => {
    setCards([data, ...cards])
  })
  .catch ((error) => {
    console.log(error)
  })
  closeAllPopups();
}

React.useEffect(() => {
  api
    .getUserInfo()
    .then((result) => {
      setCurrentUser(result);
    })
    .catch((err) => {
      console.log(err);
    });
}, []);

  return (
    <CurrentUserContext.Provider value = {currentUser}>
    <div className = "page">
      <Header />
      <Main 
        onEditProfile = {handleEditProfileClick}
        onAddPlace = {handleAddPlaceClick}
        onEditAvatar = {handleEditAvatarClick}
        onCardClick = {handleCardClick}
        cards={cards}
        onCardDelete = {handleCardDelete}
        onCardLike={handleCardLike}
      />
      <EditProfilePopup
        isOpen={isEditProfilePopupOpen} 
        onClose={closeAllPopups}
        onUpdateUser={handleUpdateUser}
      /> 
      <AddNewCardPopup
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        onAddCard={handleAddPlaceSubmit}
      />
      <EditAvatarPopup 
        isOpen = {isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        onUpdateAvatar={handleUpdateAvatar}
        />
      <PopupWithImage 
        onClose = {closeAllPopups}
        card = {selectedCard}/>          
      <Footer />
    </div> 
    </CurrentUserContext.Provider>  
  );
}

export default App;
