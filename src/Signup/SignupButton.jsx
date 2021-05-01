import { Button } from 'antd';
import PropTypes from 'prop-types';

/**
 * Draws a button that's used in a few places for the signup cta
 * TODO merge this w/ the notice button?
 * 
 * @param {*} param0 
 * @returns 
 */
export default function SignupButton({ onClick }) {
  return (
    <Button
      size="large"
      className="color-notice"
      type="link"
      onClick={() => (typeof onClick === 'function' ? onClick() : void 0)}
    >
      Sign Up
    </Button>
  );
}

SignupButton.propTypes = {
  onClick: PropTypes.func,
};
