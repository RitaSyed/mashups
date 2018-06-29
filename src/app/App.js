import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import initFirebase from '../firebaseRequests/connection.js';
import Cards from '../components/Cards/cards';
import FormCard from '../components/Form/form';
import cardsRequests from '../firebaseRequests/cards';
class App extends Component {
  state = {
    cards: [],
  }
  componentDidMount() {
    initFirebase();
    cardsRequests.getRequest()
    .then(cards => {
      this.setState({cards});
    })
    .catch(err => {
      console.error('Error getting cards', err);
    });
  }
  render() {
    return (
      <div className='App'>
        <div className="col-sm-6">
          <Cards mashups={this.state.cards}/>
        </div>
        <div className="col-sm-6">
          <FormCard />
        </div>
      </div>
    );
  }
}

export default App;
