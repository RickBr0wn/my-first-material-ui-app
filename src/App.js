import React from 'react'

import AppBar from './components/AppBar'
// import heroImage from './images/mainBanner.jpg'
// import Title from './components/Title'
// import Card from './components/Card'
import ButtonContainer from './components/ButtonContainer'
// import List from './components/List'
// import HeaderIcon from './components/HeaderIcon'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import blue from 'material-ui/colors/blue'
import PaperSheet from './components/PaperSheet'

const styles = {
	// color: '#fff',
	// backgroundImage: `url(${heroImage})`,
	// backgroundRepeat: 'no-repeat',
	// backgroundSize: 'cover',
	// height: '100vh'
}

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

const App = () => {
	return (
		<div style={styles}>
			<MuiThemeProvider theme={theme}>
			<AppBar />
			<PaperSheet />
			{/* <HeaderIcon /> */}
			{/* <Title /> */}
			{/* <Card name={"RICK"} age={44}/> */}
			{/* <List /> */}
			<ButtonContainer />
			</MuiThemeProvider>
		</div>
	)
}

export default App;
