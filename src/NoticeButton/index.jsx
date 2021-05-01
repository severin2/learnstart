import './index.scss';

import { Button } from 'antd';
import PropTypes from 'prop-types';

/**
 * Draws a button with notice color, configurable to
 * - have a click
 * - have text
 * - be an inverted color (for "cancel" secondary button)
 * - be used as an antd form submit
 * @param {*} param0 
 * @returns 
 */
export default function NoticeButton({ text, invertColor, onClick, htmlType }) {
  const handleOnClick = () => {
    if (typeof onClick === 'function') {
      onClick();
    }
  };

  const className = invertColor ? 'NoticeButton-inverted' : 'NoticeButton';

  return (
    <Button className={className} onClick={handleOnClick} htmlType={htmlType}>
      <p className="NoticeButton-text">{text}</p>
    </Button>
  );
}

NoticeButton.propTypes = {
  text: PropTypes.string,
  invertColor: PropTypes.bool,
  onClick: PropTypes.func,
  htmlType: PropTypes.string,
};
