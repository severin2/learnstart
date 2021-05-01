import './SignupPage.scss';

import { Row } from 'antd';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';

import SignupForm from './SignupForm';

/**
 * Renders the full-page signup form
 * @param {*} param0
 * @returns
 */
export default function SignupPage({ onLogin }) {
  const history = useHistory();

  const handleOnLogin = (values) => {
    if (typeof onLogin === 'function') {
      onLogin(values);
    }
    history.push('/home');
  };
  return (
    <div className="SignupPage-container">
      <Row justify="center" align="middle">
        <SignupForm onLogin={handleOnLogin} />
      </Row>
    </div>
  );
}

SignupPage.propTypes = {
  onLogin: PropTypes.func.isRequired,
};
