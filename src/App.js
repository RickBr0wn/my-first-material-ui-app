import React, { Component } from 'react';

import Button from "material-ui/Button"
import AppBar from './components/AppBar'
import heroImage from './images/mainBanner.jpg'
import Avatar from 'material-ui/Avatar'

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
				<Avatar src="https://randomuser.me/api/portraits/men/83.jpg" size={30} />
				<Button variant="raised" color="primary">Welcome</Button>
			</div>
		);
	}
}

export default App;
