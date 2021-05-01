import './SignupForm.scss';

import { Col, Form, Input, Row } from 'antd';
import PropTypes from 'prop-types';

import NoticeButton from '../NoticeButton';

/**
 * The form that collects name, email, and password. Is used by the modal and the signup page
 * @param {*} param0
 * @returns
 */
export default function SignupForm({ onLogin }) {
  /**
   *
   * @param {{ name: string, email: string, password: string }} values
   */
  const handleOnFinish = (values) => {
    if (typeof onLogin === 'function') {
      onLogin(values);
    }
  };

  const handleOnFinishFailed = (errorInfo) => {
    console.error('Failed to submit form', errorInfo);
  };

  return (
    <Form onFinish={handleOnFinish} onFinishFailed={handleOnFinishFailed}>
      <Row justify="center" align="middle">
        <Col span={24}>
          <Row justify="center">
            <h1>Sign Up</h1>
          </Row>
        </Col>
        <Col span={24}>
          <div className="SignupForm-input">
            <Form.Item
              name="name"
              rules={[{ required: true, message: "What's your name?" }]}
            >
              <Input size="large" type="text" placeholder="Name" />
            </Form.Item>
          </div>
        </Col>
        <Col span={24}>
          <div className="SignupForm-input">
            <Form.Item
              name="email"
              rules={[
                { required: true, message: "What's your email address?" },
              ]}
            >
              <Input size="large" type="email" placeholder="Email" />
            </Form.Item>
          </div>
        </Col>
        <Col span={24}>
          <div className="SignupForm-input">
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'You need a password.' }]}
            >
              <Input size="large" type="password" placeholder="Password" />
            </Form.Item>
          </div>
        </Col>

        <Col span={24}>
          <Row className="SignupForm-cta" justify="center">
            <NoticeButton text="Continue" htmlType="submit" />
          </Row>
        </Col>
      </Row>
    </Form>
  );
}

SignupForm.propTypes = {
  onLogin: PropTypes.func.isRequired,
};
