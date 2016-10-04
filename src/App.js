import React, {
	Component
}
from 'react';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this._handleClick = this._handleClick.bind(this);
		this.state = this.state = {
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
		var component = this;

		return <div className = 'container' > {
			this.state.activeImage !== null ?
				< ActiveImage image = {
					this.state.images[this.state.activeImage]
				}
			onClose = {
				this.deselectCat
			}
			/> :
			null
		}

		< div className = 'thumbnails' > {
			this.state.images.map(function (image, i) {
				return <ThumbnailImage key = {
					i
				}
				image = {
					image
				}
				onSelect = {
					component.catSelected.bind(component, i)
				}
				/>
			})
		} < /div> < /div>;
	}

	catSelected(i) {
		console.log("cat selected!", i);
		this.setState({
			activeImage: i
		});
	}

	deselectCat() {
		this.setState({
			activeImage: null
		});
	}
}




export default App;