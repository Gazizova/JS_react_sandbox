import React from 'react';
import PropTypes from 'prop-types';
import { partial } from '../../lib/utils';

export const TodoItem = props => {
  /*
    the same e.g.: const handleToggle = () => props.handleToggle(props.id)
    */

  const handleToggle = partial(props.handleToggle, props.id);
  const handleRemove = partial(props.handleRemove, props.id);
  return (
    <li>
      <span className="delete-item">
        <a href="#" onClick={handleRemove}>
          X
        </a>
      </span>
      <input type="checkbox" onChange={handleToggle} checked={props.isComplete} /> {props.name}
    </li>
  );
};

TodoItem.propTypes = {
  isComplete: PropTypes.bool,
  name: PropTypes.string,
  id: PropTypes.number
};

// export class ToDoItem {
//   static propTypes = {
//     handleToggle: PropTypes.func,
//     handleRemove: PropTypes.func,
//     id: PropTypes.number,
//     name: PropTypes.string,
//     isComplete: PropTypes.bool
//   };
//   /*
//     the same e.g.: handleToggle = () => props.handleToggle(props.id)
//     */
//   handleToggle = partial(this.props.handleToggle, this.props.id);
//   handleRemove = partial(this.props.handleRemove, this.props.id);

//   render() {
//     return (
//       <li>
//         <span className="delete-item">
//           <a href="#" onClick={this.handleRemove}>
//             X
//           </a>
//         </span>
//         <input type="checkbox" onChange={this.handleToggle} checked={this.props.isComplete} />{' '}
//         {this.props.name}
//       </li>
//     );
//   }
// }
