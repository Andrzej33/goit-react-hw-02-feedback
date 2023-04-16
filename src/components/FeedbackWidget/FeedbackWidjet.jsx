import React, { Component } from 'react';
import { FeedBackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';
import { Section } from './Section';
import { Notification } from './Notification';

class FeedbackWidget extends Component {
  // static defaultProps = {
  //   initialValue: 0,
  // };

  //     static PropTypes = {

  //   };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onGoodClick = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
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

  countTotalFeedback = () => {
    return this.state.good + this.state.bad + this.state.neutral;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  };

  render() {
    const { good, neutral, bad } = this.state;
    // const total = good + neutral + bad;
    // const positivePercentage = Math.round((good * 100) / total);

    return (
      <>
        <Section title={'Please Leave feedback'}>
          <FeedBackOptions
            onGood={this.onGoodClick}
            onNeutral={this.onNeutralClick}
            onBad={this.onBadClick}
          />
        </Section>

        <Section title={'Statistics'}>
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification text="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}

export default FeedbackWidget;
