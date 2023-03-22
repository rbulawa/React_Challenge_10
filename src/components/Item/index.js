import React from 'react';

class Item extends React.Component {
  state = {
    inputValue: '',
    inputToggled: false
  };
  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const newValue = this.state.inputValue;

    if (newValue === '') {
      return;
    }

    this.props.handleValueChange(this.props.item, newValue);
    this.setState({ inputValue: '' });
    this.setState({ inputToggled: false });
  };

  handleToggle = (e) => {
    this.state.inputToggled
      ? this.setState({ inputToggled: false })
      : this.setState({ inputToggled: true });
  };

  onBlur = (e) => {
    this.setState({ inputToggled: false });
    this.handleSubmit(e);
  };

  render() {
    const item = this.props.item;
    const {
      hendleDecrementPriority,
      hendleIncrementPriority,
      handleToggle,
      handleRemove
    } = this.props;
    return (
      <li className={`task ${item.completed ? 'item-completed' : ''}`}>
        {this.state.inputToggled ? (
          <form onSubmit={this.handleSubmit}>
            <input
              className="task-input"
              defaultValue={item.value}
              onChange={this.handleChange}
              onBlur={(e) => this.onBlur(e)}></input>
          </form>
        ) : (
          <p className="task-text" onClick={this.handleToggle}>
            {item.value}
          </p>
        )}

        <div className="priority">
          <span>Pr: {item.priority}</span>
          <div className="priority-buttons">
            <button
              onClick={() => hendleDecrementPriority(item)}
              className="priority-btn">
              -
            </button>
            <button
              onClick={() => hendleIncrementPriority(item)}
              className="priority-btn">
              +
            </button>
          </div>
        </div>
        <div className="buttons">
          <button onClick={() => handleToggle(item)} className="btn toggle-btn">
            {!item.completed ? 'Complete' : 'Uncomplete'}
          </button>
          <button onClick={() => handleRemove(item)} className="btn remove-btn">
            Remove
          </button>
        </div>
      </li>
    );
  }
}

export default Item;
