import React from 'react';

import './cards.css';

class Cards extends React.Component {
  render () {
    const {mashups} = this.props;
    const cardsComponents = mashups.map(mashup => {
      return (
        <div className="col-sm-6 col-md-4 cardAnimal" key={mashup.id}>
          <div className="thumbnail">
            <img src={mashup.imgUrl} alt="..."/>
            <div className="caption">
              <h3>{mashup.name}</h3>
              <p>{mashup.description}</p>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className='Listings'>
        <h1>Animals</h1>
        <div className="row">
          {cardsComponents}
        </div>
      </div>
    );
  }
}

export default Cards;