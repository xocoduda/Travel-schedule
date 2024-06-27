import React from 'react';
import PropTypes from 'prop-types';
import WishItem from './WishItem';
import banderas from '../img';

function WishList({ wishes, onWishesChange }) {
  return (
    <ul className="wish-list">
      {wishes.map(({
        id, texto, done, bandera,
      }, index) => (
        <WishItem
          id={id}
          texto={texto}
          done={done}
          bandera={banderas[bandera]}
          index={`wishes=${index}`}
            // eslint-disable-next-line react/no-array-index-key
          key={index}
          onDoneChange={(value) => {
            const updatedWishes = [...wishes];
            updatedWishes[index].done = value;
            onWishesChange(updatedWishes);
          }}
        />
      ))}
    </ul>
  );
}

WishList.propTypes = {
  wishes: PropTypes.arrayOf(PropTypes.shape(WishItem.propTypes)),
  onWishesChange: PropTypes.func,
};

WishList.defaultProps = {
  wishes: [],
  onWishesChange: () => {},
};

export default WishList;
