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
    good: 0,
    neutral: 0,
    bad: 0,
    // value: this.props.initialValue,

    // valueIdx: 0,
    // visible: false,
  };

  // show = () => {
  //   this.setState(prevState => ({}));
  // };

  // hide = () => {
  //   this.setState({ visible: false });
  // };

  onGoodClick = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
    // console.log(this.state.good + 1);
  };
  onNeutralClick = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };
  onBadClick = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };
  // countTotalFeedback()
  // countPositiveFeedbackPercentage()

  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const positivePercentage = Math.round((good * 100) / total);

    return (
      <section>
        <h1>Please leave feedback</h1>
        <FeedBackOptions
          onGood={this.onGoodClick}
          onNeutral={this.onNeutralClick}
          onBad={this.onBadClick}
        />

        <h2>Statistics</h2>
        {total > 0 && (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        )}
      </section>
    );
  }
}

export default FeedbackWidget;
