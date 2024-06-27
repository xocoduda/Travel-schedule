import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function WishItem({
  id, done, texto, onDoneChange, bandera,
}) {
  const [age, setAge] = useState(0);
  useEffect(() => {
    let ageInterval;
    if (done) {
      setAge(0);
    } else {
      ageInterval = setInterval(() => {
        if (done) {
          clearInterval(ageInterval);
        }
        setAge((nuevo) => nuevo + 1);
      }, 1000);
    }
    return () => clearInterval(ageInterval);
  }, [done]);

  return (
    <li className={classNames(
      'wish-list__item',
      {
        'wish-list__item--done': done,
        'wish-list__item--warning': age > 2.628e+6 && age < 7.884e+6,
        'wish-list__item--danger': age > 7.884e+6,
      },
    )}
    >
      <input
        type="checkbox"
        checked={done}
        id={`control-${id}`}
        onChange={(nuevo) => onDoneChange(nuevo.target.checked)}
      />
      <label htmlFor={`control-${id}`}>{texto.charAt(0).toUpperCase() + texto.slice(1)}</label>
      <span className="wish-list__item-flag-separator"> - </span>
      <img
        className="wish-list__item-flag"
        src={bandera}
        alt={`${texto} flag`}
      />
    </li>

  );
}

WishItem.propTypes = {
  id: PropTypes.number.isRequired,
  done: PropTypes.bool,
  texto: PropTypes.string,
  onDoneChange: PropTypes.func,
  bandera: PropTypes.string,
};

WishItem.defaultProps = {
  done: false,
  texto: '',
  onDoneChange: () => {},
  bandera: '',
};

export default WishItem;
