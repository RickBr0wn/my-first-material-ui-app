import React from 'react'
import Avatar from 'material-ui/Avatar'

class List extends React.Component{
	constructor(props){
			super(props)
			this.state = {
		buyItems: ['milk', 'bread', 'fruit']
	}
	}
	
	render(){
		const {buyItems} = this.state
		// const style = {
		// 	marginTop: '2.25rem',
		// 	marginBottom: '2.5rem'
		// }
		// const cardStyle = {
		// 	maxWidth: '75%',
		// 	backgroundColor: 'rgba(255, 255, 255, 0.2)',
		// 	borderRadius: '10px',
		// 	justifyContent: 'center'
		// }

		return(
			<div className="table">
			<caption>List of users</caption>
				<thead>
					<tr>
						<th>#</th>
						<th>Item</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{
						buyItems.map((item, index) => {
							return (
								<tr key={index}>
									<th scope="row">1</th>
									<td>{item}</td>
									<td>Button</td>
								</tr>
							)
						})
					} 
				</tbody>
			</div>
		)
	}
}

export default List