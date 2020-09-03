import React from 'react';
import './Card.css';
const Card = (props) => {
  return props.emp.map((x, i) => (
    <div className="card" key={i}>
      <img alt={x.name.first} src={x.picture.large} />
      <div className="card-container">
        <h2>
          {x.name.first} {x.name.last}
        </h2>
        <small>AGE : {x.dob.age}</small>
        <p>{x.email}</p>
      </div>
    </div>
  ));
};

export default Card;
