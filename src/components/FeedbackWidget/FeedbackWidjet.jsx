import React, { Component } from 'react';
import FeedBackOptions from './FeedbackOptions';
import Statistics from './Statistics';

class FeedbackWidget extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  //     static PropTypes = {

  //   };

  state = {
    value: this.props.initialValue,

    valueIdx: 0,
    visible: false,
  };

  // show = () => {
  //   this.setState(prevState => ({}));
  // };

  // hide = () => {
  //   this.setState({ visible: false });
  // };

  onGoodClick = () => {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };
  onNeutralClick = () => {
    this.setState(prevState => ({
      valueSecond: prevState.value + 1,
    }));
  };
  onBadClick = () => {
    this.setState(prevState => ({
      valueThird: prevState.value + 1,
    }));
  };
  render() {
    return (
      <section>
        <h1>Please leave feedback</h1>
        <FeedBackOptions
          onGood={this.onGoodClick}
          onNeutral={this.onNeutralClick}
          onBad={this.onBadClick}
        />

        <h2>Statistics</h2>
        {this.state.value > 0 && <Statistics value={this.state.value} />}
      </section>
    );
  }
}

export default FeedbackWidget;
