import React, { Component } from 'react';
// Components
import SearchBar from './SearchBar';
import ContactsList from './ContactsList';
import Loader from './Loader/Loading';
// Styles
import '../styles/Contacts.css';

@Loader('contacts')
class Contacts extends Component {
  state = {
    filterText: ''
  };

  handleUserInput = (searchTerm) => {
    this.setState({filterText: searchTerm})
  }

  render() {
    const { loadingTime } = this.props;

    return (
      <div className="contacts">
        <SearchBar
        filterText={this.state.filterText}
        onUserInput={this.handleUserInput}
        />
        <p>Loading time {loadingTime} seconds</p>
        <ContactsList
          contacts={this.props.contacts}
          filterText={this.state.filterText}
        />
      </div>
    );
  }
}

export default Contacts;
