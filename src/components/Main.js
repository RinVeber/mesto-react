import React from 'react';
import {api} from '../utils/api.js';
import Card from '../components/Card.js';

function Main(props) {

  const [userName, setUserName] = React.useState('');
  const [userAbout , setUserAbout] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getProfile(), api.getInitialCards()])
      .then(([userData, card]) => {
        setUserName(userData.name);
        setUserAbout(userData.about);
        setUserAvatar(userData.avatar);

        setCards(card.map(item => ({
          image: item.link,
          alt: item.name,
          likes: item.likes,
          id: item._id,
        })));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [])

  return (
    <div className="content">
      <section className="profile">
          <div className="profile__avatar-overlay" onClick={props.onEditAvatar}></div>
          <img
            src={userAvatar}
            alt="Подождите, загружается..."
            className="profile__avatar"
          />
        
        <div className="profile__info">
        <h1 className="profile__name">{userName}</h1>
          <button className="profile__edit" onClick={props.onEditProfile} type="button"></button>
          <p className="profile__description">{userAbout}</p>
        </div>
        <button className="profile__add" onClick={props.onAddPlace} type="button"></button>
      </section>
        
      <section className="elements">
       
        <ul className="elements__list">
        {cards.map((item) => (
        <Card 
        key = {item.id} 
        card = {item} 
        onCardClick = {props.onCardClick} 
        />))
        }
        </ul>
      </section>
    </div>
  );
}

export default Main;