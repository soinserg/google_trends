import axios from 'axios';
import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Loader from './Loader';
import Chart from "./Chart";
import Error from "./Error";
import KeywordForm from "./KeywordForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(query) {
    this.setState({
      isLoading: true,
      isError: false,
    });

    axios.get(`/trends/?q=${query}`)
      .then(response => this.setState({
        title: query,
        data: this.parseData(response.data),
        isLoading: false,
        query: '',
      }))
      .catch(() => this.setState({
        isLoading: false,
        isError: true,
      }));
  }

  parseData(data) {
    const labels = Object.keys(data)
      .map(val => new Date(Number(val)).toLocaleDateString());
    const values = Object.values(data);

    data = {
      labels: labels,
      datasets: [
        {
          fillColor: "rgba(220,220,220,0.2)",
          strokeColor: "rgba(220,220,220,1)",
          pointColor: "rgba(220,220,220,1)",
          data: values
        },
      ]
    };

    return data;
  }

  render() {
    const { title, data, isLoading, isError } = this.state;

    return (
      <Container>
        <Row>
          <Col>
            <KeywordForm onSubmit={this.onSubmit}/>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            {isLoading && <Loader/>}
            {isError && <Error/>}
            {data && !isLoading && !isError && <Chart title={title} data={data}/>}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
