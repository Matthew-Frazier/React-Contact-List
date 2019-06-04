import React from "react";
import { Button, Table, Icon, } from "semantic-ui-react";

const Contact = ({ id, name, phone, remove, }) => (
  <Table.Row>
    <Table.Cell>{name}</Table.Cell>
    <Table.Cell>{phone}</Table.Cell>
    <Table.Cell>
      <Button color="red" onClick={() => remove(id)}>
        <Icon name="trash"></Icon>
        Delete
      </Button>
    </Table.Cell>
  </Table.Row>
)

//                               () => stops the function from automatically being activated

export default Contact;