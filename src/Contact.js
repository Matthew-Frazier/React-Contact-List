import React from "react";
import { Button, Table, Icon, } from "semantic-ui-react";

const Contact = ({ id, name, phone, remove, }) => (
  <Table.Row>
    <Table.Cell>{name}</Table.Cell>
    <Table.Cell>{phone}</Table.Cell>
    <Table.Cell>
      <Button.Group fluid>
        <Button color="red" onClick={() => remove(id)}>
          <Icon name="trash"></Icon>
          Delete
        </Button>
        <Button color="yellow">
          <Icon name="wrench"></Icon>
          Edit
        </Button>
      </Button.Group>
    </Table.Cell>
  </Table.Row>
)

//                               () => stops the function from automatically being activated

export default Contact;