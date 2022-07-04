import React from 'react';
import '../pages/index.css';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';



function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  function handleOverlayClose(evt) {
    const evtTarget = evt.target;
    if (evtTarget.classList.contains('popup')) {
      closeAllPopups();
    }
  }

  return (
    <div className="body">
      <div className="page">

        <Header />

        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <Footer />

        <PopupWithForm
          isOpen={isEditAvatarPopupOpen}
          title={'Обновить аватар'}
          name={'Сменить аватар'}
          form={'placeData'}
          buttonText={'Сохранить'}
          handleClickClose={handleOverlayClose}
          onClose={closeAllPopups}>

          <div className="popup__form popup__form_type_avatar">
            <input className="popup__input"
              id="url-input"
              type="url"
              placeholder="Ссылка на аватарку"
              name="avatar"
              required />
            <span className="popup__error url-input-error"></span>
          </div>
        </PopupWithForm>

        <PopupWithForm
          isOpen={isEditProfilePopupOpen}
          title={'Редактировать профиль'}
          name={'Редактировать профиль'}
          form={'profileData'}
          buttonText={'Сохранить'}
          handleClickClose={handleOverlayClose}
          onClose={closeAllPopups}>

          <div className="popup__form popup__form_type-edit">
            <input className="popup__input popup__input_type_name"
              id="name-input"
              type="text"
              placeholder="Имя"
              name="name"
              minLength="2"
              maxLength="40"
              required />
            <span className="popup__input-error name-input-error"></span>

            <input className="popup__input popup__input_type_about"
              id="about-input"
              type="text"
              placeholder="О себе"
              name="about"
              minLength="2"
              maxLength="200"
              required />
            <span className="popup__input-error about-input-error"></span>
          </div>
        </PopupWithForm>

        <PopupWithForm
          isOpen={isAddPlacePopupOpen}
          title={'Новое место'}
          name={'Добавить карточку'}
          form={'placeData'}
          buttonText={'Создать'}
          handleClickClose={handleOverlayClose}
          onClose={closeAllPopups}>

          <div className="popup__form popup__form_type_card">
            <input className="popup__input popup__input_type_name"
              id="place-input"
              type="text"
              placeholder="Название"
              name="name"
              minLength="2"
              maxLength="30"
              required />
            <span className="popup__input-error place-input-error"></span>

            <input className="popup__input popup__input_type_link"
              id="link-input"
              type="url"
              placeholder="Ссылка на картинку"
              name="link"
              required />
            <span className="popup__input-error link-input-error"></span>
          </div>
        </PopupWithForm>

        <PopupWithForm
          title={'Вы уверены?'}
          name="delete"
          buttonText={'Да'} />

        <ImagePopup
          card={selectedCard}
          handleClickClose={handleOverlayClose}
          onClose={closeAllPopups}
        />

      </div>

    </div>
  )
}

export default App;