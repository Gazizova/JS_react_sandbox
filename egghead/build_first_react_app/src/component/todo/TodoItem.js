import React from 'react'
import {TodoList} from "./TodoList";
import PropTypes from "prop-types";


export const TodoItem = (props) => {
    return (
                <li ><input
                    defaultChecked={props.isComplete}
                    type="checkbox"/>{props.name}</li>
            )
   }

TodoItem.propTypes = {
    isComplete: PropTypes.bool.isRequuired,
    name: PropTypes.string,
    id: PropTypes.number
}