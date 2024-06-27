import React, { useState } from 'react';
import './App.css';
import WishInput from './WishInput';
import WishList from './WishList';
import WishFooter from './WishFooter';

function App() {
  const [wishes, setWishes] = useState([]);
  return (
    <div className="conjunto">
      <div className="app">
        <h1>Países a visitar en 2024</h1>
        <WishInput onNewWish={(wish) => setWishes([...wishes, wish])} />
        <WishList wishes={wishes} onWishesChange={setWishes} />
        <button className="wish-clear" type="button" onClick={() => setWishes(wishes.filter((wish) => !wish.done))}>
          Visitado
        </button>
      </div>
      <div className="footer">
        <WishFooter />
      </div>
    </div>
  );
}

export default App;
