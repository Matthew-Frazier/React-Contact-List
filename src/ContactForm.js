import React from 'react';
import { Form, } from "semantic-ui-react";

class Contact extends React.Component {
  state = { name: "", phone: "", };

  handleChange = (event) => {
    // The NAME("name", "phone") of the state needs to match the name of Form.Input name=("name", "phone")
    this.setState({ [event.target.name]: event.target.value, });
    // switch(event.target.name) {
    //   case "name":
    //   this.setState({ name: event.target.value});
    //   break;
    //   case "phone":
    //   this.setState({ phone: event.target.value});
    //   break;
    // }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Call a function to add a contact to state
    this.props.add(this.state);
    this.setState({ name: "", phone: "", });
  }

  render () {
    // OBJECT DESTRUCTURING
    // const { name, phone,} = this.state

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Field inline fluid>
            <label>Name</label>
            <input 
              placeholder="Name" 
              name="name"
              value={this.state.name}
              onChange={this.handleChange}/>
          </Form.Field> 
          <Form.Field inline fluid>
            <label>Phone</label>
            <input 
              placeholder="Phone" 
              name="phone"
              value={this.state.phone}
              onChange={this.handleChange}/>
          </Form.Field> 
          <Form.Button color="green">Submit</Form.Button>
        </Form.Group>
      </Form>
    )
  }
}

export default Contact;