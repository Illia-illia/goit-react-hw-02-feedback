import { Component } from 'react';
import { Wrap, Title, Button, Text } from './Feedback.styled';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = e => {
    console.log(e.target.name);
    this.setState(prevState => {
      return { [e.target.name]: prevState[e.target.name] + 1 };
    });
  };

  render() {
    return (
      <Wrap>
        <Title>Please leave feedback</Title>
        <Button
          name="good"
          style={{ backgroundColor: '#b8e356' }}
          type="button"
          onClick={this.handleIncrement}
        >
          Good
        </Button>
        <Button
          name="neutral"
          style={{ backgroundColor: '#008eff' }}
          type="button"
          onClick={this.handleIncrement}
        >
          Neutral
        </Button>
        <Button
          name="bad"
          style={{ backgroundColor: '#ff6500' }}
          type="button"
          onClick={this.handleIncrement}
        >
          Bad
        </Button>
        <Text>Statistics</Text>
        <Text>Good: {this.state.good}</Text>
        <Text>Neutral: {this.state.neutral}</Text>
        <Text>Bad: {this.state.bad} </Text>
      </Wrap>
    );
  }
}

export default Feedback;
