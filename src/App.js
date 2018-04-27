import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import HeroImage from './components/HeroImage'
import Button from "material-ui/Button"
import AppBar from './components/AppBar'
import heroImage from './images/mainBanner.jpg'

const AppStyles = {
	color: '#fff',
	backgroundImage: `url(${heroImage})`,
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover',
	height: '100vh'
}

class App extends Component {
	render() {
		return (
			<div style={AppStyles}>
				<AppBar />
				<Button variant="raised" color="primary">Welcome</Button>
			</div>
		);
	}
}

export default App;
