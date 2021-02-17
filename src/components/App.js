import React, { useState } from 'react';
import '../index.css';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState('');

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard('');
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  return (
    <>
      <div className="page">
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} />
      <Footer />

      <PopupWithForm title="Редактировать профиль" name="edit" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <fieldset className="popup-container__input-container">
          <label className="popup-container__field">
            <input type="text" name="name" id="name" defaultValue="" minLength="2" maxLength="40"
              className="popup-container__form-item popup-container__form-item_el_name" placeholder="Введите своё имя"
              required />
            <span id="name-error" className="popup-container__form-item-error"></span>
          </label>
          <label className="popup-container__field">
            <input type="text" name="text" id="text" defaultValue="" minLength="2" maxLength="200"
              className="popup-container__form-item popup-container__form-item_el_text" placeholder="Введите описание"
              required />
            <span id="text-error" className="popup-container__form-item-error"></span>
          </label>
        </fieldset>
        <button type="submit" className="popup-container__submit-button" name="edit-submit-button">Сохранить</button>
      </PopupWithForm>

      <PopupWithForm title="Новое место" name="add" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
       <fieldset className="popup-container__input-container">
          <label className="popup-container__field">
            <input type="text" name="heading" id="heading" defaultValue="" minLength="2" maxLength="30"
              className="popup-container__form-item popup-container__form-item_el_heading" placeholder="Название"
              required />
            <span id="heading-error" className="popup-container__form-item-error"></span>
          </label>
          <label className="popup-container__field">
            <input type="url" name="link" id="link" defaultValue=""
              className="popup-container__form-item popup-container__form-item_el_link" placeholder="Ссылка на картинку"
              required />
              <span id="link-error" className="popup-container__form-item-error"></span>
          </label>
        </fieldset>
        <button type="submit" className="popup-container__submit-button popup-container__submit-button_inactive" name="add-submit-button">Создать</button>
      </PopupWithForm>

      <PopupWithForm title="Обновить аватар" name="edit-avatar" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <fieldset className="popup-container__input-container">
          <label className="popup-container__field">
            <input type="url" name="link" id="avatar-link" defaultValue=""
              className="popup-container__form-item popup-container__form-item_el_link" placeholder="Ссылка"
              required />
              <span id="avatar-link-error" className="popup-container__form-item-error"></span>
          </label>
        </fieldset>
        <button type="submit" className="popup-container__submit-button" name="edit-submit-button">Сохранить</button>
      </PopupWithForm>

      <PopupWithForm title="Вы уверены?" name="delete">
        <button type="submit" className="popup-container__submit-button" name="delete-submit-button">Да</button>
      </PopupWithForm>

      <ImagePopup card={selectedCard} onCLose={closeAllPopups}/>
      </div>
      <template id="card-template">
        <article className="card">
          <img className="card__image" src="//:0" alt="null" />
          <div className="card__content">
            <h2 className="card__heading"></h2>
            <div className="card__like-section">
              <button className="card__like" type="button" name="like-button"></button>
              <p className="card__like-counter">0</p>
            </div>
          </div>
          <button className="card__delete" type="button" name="delete-button"></button>
        </article>
      </template>
  
    </>
  );
};

export default App;
