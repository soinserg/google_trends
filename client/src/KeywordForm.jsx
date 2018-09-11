import React from 'react';
import { Button, Form, Input } from 'reactstrap';

class KeywordForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    const { value } = e.target;

    this.setState({
      query: value,
    });
  }

  onSubmit(e) {
    const { query } = this.state;
    e.preventDefault();

    this.props.onSubmit(query);
  }

  render() {
    const { query } = this.state;

    return (
      <Form
        className="my-4 justify-content-center"
        inline
        onSubmit={this.onSubmit}
      >
        <Input
          className="mr-2 w-50"
          placeholder="Keywords"
          value={query}
          onChange={this.onChange}
        />
        <Button>Search</Button>
      </Form>

    );
  }
}

export default KeywordForm;
