import React, { Component } from 'react';
import ReactBootstrap from 'react-bootstrap';
import $ from 'jquery';
import './App.css';

class App extends Component {
	
	constructor(props){
		super(props);
		this.state = {
			images: [
				"images/cat1.jpg",
				"images/cat2.jpg",
				"images/cat3.jpg",
				"images/cat4.jpg",
				"images/cat5.jpg",
				"images/cat6.jpg",
				"images/cat7.jpg",
				"images/cat8.jpg",
				"images/cat9.jpg",
				"images/cat10.jpg"
			],
			activeImage: null
		}
	}
	
  render() {
    return (
      <div className="App">
        
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;