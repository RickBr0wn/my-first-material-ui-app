import React from 'react'
import Button from "material-ui/Button"

const style = {
	// width: '50%',
	// justifyContent: 'center',
	// alignItems: 'center'
}

const ButtonContainer = () => {
	return(
		<div className="text-center">
			<Button variant="raised" color="primary">Submit</Button>
		</div>
	)
}

export default ButtonContainer