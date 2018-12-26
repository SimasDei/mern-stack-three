import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Icon } from 'semantic-ui-react';

const AddBookCall = () => (
  <Card centered>
    <Card.Content textAlign="center">
      <Card.Header>Add a new Book</Card.Header>
      <Link to="/books/new">
        <Icon name="plus circle" size="massive" />
      </Link>
    </Card.Content>
  </Card>
);

export default AddBookCall;
