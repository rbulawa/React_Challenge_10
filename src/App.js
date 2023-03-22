import React from 'react';
import Form from './components/Form';
import TasksList from './components/TasksList';
import SortButtons from './components/SortButtons';
import SearchInput from './components/SearchInput';
import './styles.css';

console.clear();

class App extends React.Component {
  state = {
    list: [
      {
        value: 'hardcoded',
        completed: false,
        id: new Date().valueOf(),
        priority: 0
      }
    ],
    value: '',
    searchInput: '',
    sort: null
  };

  handleValueChange = (element, newValue) => {
    const newList = this.state.list.filter((item) => {
      if (element.id === item.id) {
        item.value = newValue;
      }
      return item;
    });
    this.setState({ list: newList });
  };

  handleSubmit = (value) => {
    if (value === '') {
      return;
    }
    const item = {
      value,
      completed: false,
      id: new Date().valueOf(),
      priority: 0
    };
    const newList = [...this.state.list, item];
    this.setState({ list: newList });
  };

  handleToggle = (item) => {
    const newList = this.state.list.map((element) => {
      if (element.id === item.id) {
        element.completed = !element.completed;
      }
      return element;
    });
    this.setState({ list: newList });
  };

  handleRemove = (item) => {
    const newList = this.state.list.filter((element) => {
      return element.id === item.id ? false : true;
    });
    this.setState({ list: newList });
  };

  handleSearch = (e) => {
    this.setState({ searchInput: e.target.value });
  };

  handleDecrementPriority = (item) => {
    const newList = this.state.list.map((element) => {
      if (element.id === item.id) {
        item.priority > 0 ? item.priority-- : (item.priority = 0);
      }
      return element;
    });
    this.setState({ list: newList });
  };
  handleIncrementPriority = (item) => {
    const newList = this.state.list.map((element) => {
      if (element.id === item.id) {
        item.priority < 5 ? item.priority++ : (item.priority = 5);
      }
      return element;
    });
    this.setState({ list: newList });
  };

  handleSort = (e) => {
    const option = e.target.value;
    if (option.toLowerCase().includes('original')) {
      this.setState({ sort: null });
    }
    if (option.toLowerCase().includes('ascending')) {
      this.setState({ sort: true });
    }
    if (option.toLowerCase().includes('descending')) {
      this.setState({ sort: false });
    }
  };

  render() {
    const { list, sort, searchInput } = this.state;

    const listItems = list.filter((item) =>
      item.value.toLowerCase().includes(searchInput)
    );

    if (sort === true) {
      listItems.sort((a, b) => {
        return a.priority - b.priority;
      });
    }
    if (sort === false) {
      listItems.sort((a, b) => {
        return b.priority - a.priority;
      });
    }

    return (
      <div className="App">
        <Form handleSubmit={this.handleSubmit} />
        <SearchInput handleSearch={this.handleSearch} />
        <SortButtons handleSort={this.handleSort} />

        <TasksList
          list={listItems}
          handleToggle={this.handleToggle}
          handleRemove={this.handleRemove}
          hendleDecrementPriority={this.handleDecrementPriority}
          hendleIncrementPriority={this.handleIncrementPriority}
          handleSubmit={this.handleSubmit}
          handleValueChange={this.handleValueChange}
        />
      </div>
    );
  }
}

export default App;
