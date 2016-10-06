import React, { Component } from 'react';
import ReactBootstrap from 'react-bootstrap';
import $ from 'jquery';
import './App.css';
import './catSelected';
import { ThumbnailImage } from './thumbnailImage';
import { ActiveImage } from './activeImage';
import './deselectCat';

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
      <div className='container'>
				{ this.state.activeImage !== null ?
					<ActiveImage 
						image={this.state.images[this.state.activeImage]}
						onClose={ this.deselectCat }/> : null
				}

				<div className='thumbnails'>
					{ this.state.images.map((image, i) => {
						var component = this;
							return (
								<ThumbnailImage 
									key={ i } 
									image={ image }
									onSelect={ component.onCatSelect.bind(component, i) } 
								/>
							)
					})}
				</div>
			</div>
    )
  }

	onCatSelect(i) {
		this.props.catSelected(i);
	}
	
}

export default App;