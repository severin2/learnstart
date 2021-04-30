import './SignupPage.scss';

import { Row } from 'antd';

import SignupForm from '../SignupForm';
import { useHistory } from 'react-router';

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
