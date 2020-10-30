import react from "react";
import { api } from "../utils/api.js";
import Card from "./Card";

function Main(props) {
  const [userName, setUserName] = react.useState();
  const [userDescription, setUserDescription] = react.useState();
  const [userAvatar, setUserAvatar] = react.useState();
  const [cards, setCards] = react.useState([]);

  react.useEffect(() => {
    api
      .getUserInfo()
      .then((result) => {
        setUserName(result.name);
        setUserDescription(result.about);
        setUserAvatar(result.avatar);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  react.useEffect(() => {
    api
      .getInitialCards()
      .then((result) => {
        setCards(result);
        console.log(cards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="main-content">
      <section className="profile">
        <img className="profile__image" src={userAvatar} alt="profile pic" />
        <div className="profile__overlay">
          <button
            className="profile__overlay_button"
            aria-label="change avatar"
            onClick={props.onEditAvatar}
          />
        </div>
        <div className="profile__description">
          <div className="profile__name">
            <h1 className="profile__text">{userName}</h1>
            <button
              className="profile__edit"
              aria-label="Edit profile"
              onClick={props.onEditProfile}
            />
          </div>
          <p className="profile__occupation">{userDescription}</p>
        </div>
        <button
          className="profile__add"
          aria-label="Add image"
          onClick={props.onAddPlace}
        />
      </section>
      <section className="images">
        <ul className="images__list">
          {cards.map((card) => (
            <Card key={card._id} card={card} onCardClick={props.onCardClick} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
