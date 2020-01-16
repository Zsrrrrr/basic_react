import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class List extends Component {
    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.todos.map((todo, index) => 
                            <li key={index}>{todo}</li>)
                    }
                </ul>
            </div>
        )
    }
}

List.propTypes = {
    todos : PropTypes.array.isRequired
}