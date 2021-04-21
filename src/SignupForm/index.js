import './SignupForm.scss';

import { Col, Input, Row } from 'antd';

import NoticeButton from '../NoticeButton';

export default function SignupForm() {
  return (
    <Row justify="center" align="middle">
      <Col span={24}>
        <Row justify="center">
          <h1>Sign up</h1>
        </Row>
      </Col>
      <Col span={24}>
        <div className="SignupForm-input">
          <Input size="large" type="email" placeholder="Email" />
        </div>
      </Col>
      <Col span={24}>
        <div className="SignupForm-input">
          <Input size="large" type="password" placeholder="Password" />
        </div>
      </Col>

      <Col span={24}>
        <Row className="SignupModal-cta" justify="center">
          <NoticeButton text="Continue" type="default" />
        </Row>
      </Col>
    </Row>
  );
}
