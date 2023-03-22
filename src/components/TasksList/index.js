import React from 'react';
import Item from '../Item';

const TasksList = (props) => (
  <>
    <ul>
      {props.list.map((item) => (
        <Item
          key={item.id}
          item={item}
          handleToggle={props.handleToggle}
          handleRemove={props.handleRemove}
          hendleDecrementPriority={props.hendleDecrementPriority}
          hendleIncrementPriority={props.hendleIncrementPriority}
          handleSubmit={props.handleSubmit}
          handleValueChange={props.handleValueChange}
        />
      ))}
    </ul>
  </>
);

export default TasksList;
