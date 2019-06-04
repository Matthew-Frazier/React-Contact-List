import React from 'react';
import Contacts from "./Contacts";
import ContactForm from "./ContactForm";
import { Container, Header, Icon, Segment, Button, } from "semantic-ui-react";

class App extends React.Component {
  // THIS IS THE LONG WAY
  // constructor(props) {
  //   super(props);
  // this.state = {}

  // THIS IS THE SHORT WAY
    state = {
      contacts: [
        { id: 1, name: "Jerry", phone: "801-121-5656", },
        { id: 2, name: "George", phone: "801-122-5657", },
        { id: 3, name: "Cosmo", phone: "801-999-8187", },
      ],
      showForm: true,
    };
  // };

  getId = () => {
    // NOTE We are just using this as a helper function for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 10000);
  };

  addContact = (contactData) => {
    let contact = { id: this.getId(), ...contactData, }
    this.setState({ contacts: [...this.state.contacts, contact] })
  } 

  removeContact = (id) => {
    const contacts = this.state.contacts.filter( contact => {
      if (contact.id !== id)
        return contact;
    })
    this.setState({ contacts, });
  }

  toggleForm = () => this.setState({ showForm: !this.state.showForm, });

  render () {
    return (
      <Container style={{ paddingTop: "25px", }} textAlign="center">
        <Icon as="i" size="huge" color="blue" circular  name="address book outline"></Icon>
        <Header as="h1" color="blue" textAlign="center">React Contact List</Header>
        <hr/>
        <br/>
          <Button icon color="blue" onClick={this.toggleForm}>
            <Icon name={this.state.showForm ? "angle double up" : "angle double down"} />
          </Button>
        <Segment basic>
          { this.state.showForm ? <ContactForm add={this.addContact} /> : null }
        </Segment>
        <br/>
        <hr/>
        <Contacts contactList={this.state.contacts} remove={this.removeContact} />
      </Container>
    );
  };
};

export default App;
