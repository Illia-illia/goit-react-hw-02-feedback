import { Button } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

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

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.exact({
      option: PropTypes.number.isRequired,
    })
  ),
};
