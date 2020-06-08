import React, { Component } from 'react';
import uuid from 'react-uuid';
import './App.css';
import {Pets} from './Pets';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
	  loading: true
    }
  }

  componentDidMount() {
    fetch('http://agl-developer-test.azurewebsites.net/people.json')
      .then((response) => response.json())
      .then(peopleList => {
        this.setState({ people: peopleList, loading: false });
      })
	  .catch(error=>{
		  console.error('There was an error fetching the data',error);
	  });
  }

  getPeople() {
    const peopleData = this.state.people;
    
      return !!peopleData.length && peopleData.map(peopleList => {
        return (
          <div key={uuid()}>
            <h2>{peopleList.gender}</h2>
            <Pets  pets={peopleList.pets} />
          </div>);
      }
      );
    }

  render() {
    return (
      <div>
        {!this.state.loading ? this.getPeople() : <p>Loading...</p>}
      </div>
    );
  }
}
export default App;
