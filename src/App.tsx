import React from 'react';
import { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';

export const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App: React.FC = () => {
  const [goods, setGoods] = useState([...goodsFromServer]);
  const [visable, setVisable] = useState(false);
  const [sortType, setSortType] = useState('NONE');
  const [isReversed, setReverse] = useState(false);

  const infoBtn = classNames({
    button: true,
    'is-info': true,
    'is-light': sortType !== 'ALPH',
  });

  const succBtn = classNames({
    button: true,
    'is-succes': true,
    'is-light': sortType !== 'LENG',
  });

  const warnBtn = classNames({
    button: true,
    'is-warning': true,
    'is-light': !isReversed,
  });

  const finnalGoods = [...goods];

  const resetBtn = visable || isReversed;

  if (isReversed) {
    finnalGoods.reverse();
  }

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className={infoBtn} //"button is-info is-light"
          onClick={() => {
            setGoods(goods.sort((a, b) => a.localeCompare(b)));
            setVisable(true);
            setSortType('ALPH');
          }}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className={succBtn} //"button is-success is-light"
          onClick={() => {
            setGoods(goods.sort((a, b) => a.length - b.length));
            setVisable(true);
            setSortType('LENG');
          }}
        >
          Sort by length
        </button>

        <button
          type="button"
          className={warnBtn} //"button is-warning is-light"
          onClick={() => {
            // setGoods(goods.reverse());
            setVisable(!visable);
            setReverse(!isReversed);
          }}
        >
          Reverse
        </button>

        {resetBtn && (
          <button
            type="button"
            className="button is-danger is-light"
            onClick={() => {
              setGoods([...goodsFromServer]);
              setVisable(false);
              setSortType('NONE');
              setReverse(false);
            }}
          >
            Reset
          </button>
        )}
      </div>

      <ul>
        <ul>
          {finnalGoods.map(good => (
            <li data-cy="Good" key={good}>
              {good}
            </li>
          ))}
        </ul>
      </ul>
    </div>
  );
};
