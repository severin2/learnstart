import './SignupPage.scss';

import { Row } from 'antd';

import SignupForm from '../SignupForm';

export default function SignupPage() {
  return (
    <div className="SignupPage-container">
      <Row justify="center" align="middle">
        <SignupForm />
      </Row>
    </div>
  );
}
