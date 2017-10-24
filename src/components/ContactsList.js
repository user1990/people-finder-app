import React from 'react';
// Material-UI
import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider'

const ContactsList = ({ contacts, filterText }) => {
  const filteredContacts = contacts.filter(contact => contact.name.indexOf(filterText) !== -1);

  return(
    <ul>
      {filteredContacts.map(
        (contact) =>
          <li key={contact.email}>
            <div className="contactsData">
              <Card>
                <CardHeader
                  title={contact.name}
                  subtitle={contact.email}
                  avatar={contact.thumbnail}
                  className="header"
                />
                <Divider />
                <CardTitle title="Location" />
                <CardText className='location-text'>
                  <strong>City:</strong> {contact.location.city} <br />
                  <strong>Street:</strong> {contact.location.street} <br />
                  <strong>State:</strong> {contact.location.state} <br />
              </CardText>
              </Card>
            </div>
          </li>
      )}
    </ul>
  )
}

export default ContactsList;
