import React from 'react'

import AppBar from './components/AppBar'
import heroImage from './images/mainBanner.jpg'
import Title from './components/Title'
import Card from './components/Card'
import ButtonContainer from './components/ButtonContainer'
import List from './components/List'
import HeaderIcon from './components/HeaderIcon'

const styles = {
	color: '#fff',
	backgroundImage: `url(${heroImage})`,
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover',
	height: '100vh'
}

const App = () => {
	return (
		<div style={styles}>
			<AppBar />
			<HeaderIcon />
			<Title />
			{/* <Card name={"RICK"} age={44}/> */}
			<List />
			<ButtonContainer />
		</div>
	)
}

export default App;
