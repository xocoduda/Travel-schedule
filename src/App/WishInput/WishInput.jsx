import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { determineFlag } from '../img';

function WishInput({ onNewWish }) {
  const [newWishText, setNewWishText] = useState('');
  const [nextId, setNextId] = useState(1);

  const handleNewWish = () => {
    if (newWishText.trim().length) {
      const normalizedText = newWishText.trim().toLowerCase();
      const flag = determineFlag(normalizedText);
      onNewWish({
        id: nextId, done: false, texto: normalizedText, bandera: flag,
      });
      setNextId(nextId + 1);
      setNewWishText('');
    }
  };

  return (
    <fieldset className="wish-input">
      <legend className="wish-input__label">Nuevo país</legend>
      <input
        className="wish-input_field"
        placeholder="Escribe el nuevo país"
        value={newWishText}
        onChange={(nuevo) => setNewWishText(nuevo.target.value)}
        onKeyUp={(nuevo) => {
          if (nuevo.key === 'Enter') {
            handleNewWish();
          }
        }}
      />
    </fieldset>
  );
}

WishInput.propTypes = {
  onNewWish: PropTypes.func,
};

WishInput.defaultProps = {
  onNewWish: () => {},
};

export default WishInput;
