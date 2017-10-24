import React, { Component } from 'react';
// Components
import SearchBar from './SearchBar';
import ContactsList from './ContactsList';
import Loader from './Loader/Loading';
import Checkbox from 'material-ui/Checkbox';
// Styles
import '../styles/Contacts.css';

const styles = {
  checkbox: {
    marginBottom: 16,
  }
};

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
        <h4>Filter by genre:</h4>
        <div className='checkbox'>
          <Checkbox
            label="Male"
            style={styles.checkbox}
          />
          <Checkbox
            label="Female"
            style={styles.checkbox}
          />
        </div>
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
