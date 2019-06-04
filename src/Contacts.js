import React from 'react';
import Contact from "./Contact";
import { Table, TableHeader} from "semantic-ui-react";

const Contacts = ({ contactList, remove, }) => (
  <Table celled padded>
    <TableHeader>
      <Table.Row>
        <Table.HeaderCell>First Name</Table.HeaderCell>
        <Table.HeaderCell>Phone</Table.HeaderCell>
        <Table.HeaderCell>Options</Table.HeaderCell>
      </Table.Row>
    </TableHeader>

    <Table.Body>
      {
        contactList.map( contact => (
          <Contact key={contact.id} {...contact} remove={remove} />
        ))
      }
    </Table.Body>
  </Table>
);

export default Contacts;