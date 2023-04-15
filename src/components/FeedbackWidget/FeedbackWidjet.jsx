import React from 'react';
import FeedBackOptions from './FeedbackOptions';
import Statistics from './Statistics';

class FeedbackWidget extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  //     static PropTypes = {

  //   };

  state = {
    value: this.props.initialValue,
  };

  onGoodClick = () => {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };
  onNeutralClick = () => {
    console.log(this);
  };
  onBadClick = () => {
    console.log(this);
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
        <Statistics value={this.state.value} />
      </section>
    );
  }
}

export default FeedbackWidget;
