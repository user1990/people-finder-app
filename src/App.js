import React, { Component } from 'react';
// Components
import Contacts from './components/Contacts';
// Material-UI
import AppBar from 'material-ui/AppBar';
// Style
import './styles/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [],
      checked: false
    };
  }

  componentDidMount() {
    fetch('https://api.randomuser.me/?nat=us,gb&results=50')
    .then(response => response.json())
    .then(parsedContacts => parsedContacts.results.map(user => (
      {
        name: `${user.name.first} ${user.name.last}`,
        email: user.email,
        thumbnail: user.picture.thumbnail,
        location: {
          street: user.location.street,
          city: user.location.city,
          state: user.location.state
        },
        gender: user.gender
      }
    )))
    .then(contacts => this.setState({contacts}))
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="App">
        <AppBar
          title="People Finder"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <Contacts contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
