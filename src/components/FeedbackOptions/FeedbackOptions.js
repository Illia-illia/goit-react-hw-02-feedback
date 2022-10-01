import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => {
        return (
          <Button
            key={option}
            name={option}
            onClick={onLeaveFeedback}
            type="button"
          >
            {option}
          </Button>
        );
      })}
    </div>
  );
};
