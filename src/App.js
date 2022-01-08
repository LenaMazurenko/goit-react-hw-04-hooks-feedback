import { useState, useEffect } from 'react';
import Section from './components/Section';
import Feedbackoptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Notification from './components/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [totalFeedback, setTotalFeedback] = useState(0);
  const [positiveFeedbackPercentage, setPositiveFeedbackPercentage] =
    useState(0);

  const handleIncrement = type => {
    switch (type) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  useEffect(() => {
    const total = good + neutral + bad;
    const positiv = Math.round((good * 100) / total);
    setTotalFeedback(total);
    setPositiveFeedbackPercentage(positiv);
  }, [good, neutral, bad]);

  return (
    <>
      <Section title="Please leave feedback">
        <Feedbackoptions onLeaveFeedback={handleIncrement} />
      </Section>
      <Section title="Statistic">
        {totalFeedback === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positiveFeedbackPercentage}
          />
        )}
      </Section>
    </>
  );
}
