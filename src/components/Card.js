import React from 'react'
import PropTypes from 'prop-types'

import Avatar from 'material-ui/Avatar'

const style = {

}

const Card = (props) => {
    const {name, age} = props
    return(
        <div style={style}>
            <div>
                <Avatar src="https://randomuser.me/api/portraits/men/83.jpg" size={30} />
                <h3>name: {name}</h3>
                <h3>age: {age}</h3>
            </div>
        </div>
    )
}

Card.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired
}

export default Card

