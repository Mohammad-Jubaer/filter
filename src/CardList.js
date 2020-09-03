import React from 'react';

import Card from './Card';

import './CardList.css';

const CardList = (props) => {
  return (
    <div className="card-list">
      <Card emp={props.emp} />
    </div>
  );
};

export default CardList;
