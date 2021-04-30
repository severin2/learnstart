import './SignupForm.scss';

import { Col, Form, Input, Row } from 'antd';

import NoticeButton from '../NoticeButton';

export default function SignupForm({ onLogin }) {
  const handleOnFinish = (values) => {
    if (typeof onLogin === 'function') {
      onLogin(values);
    }
  };

  const handleOnFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form onFinish={handleOnFinish} onFinishFailed={handleOnFinishFailed}>
      <Row justify="center" align="middle">
        <Col span={24}>
          <Row justify="center">
            <h1>Sign up</h1>
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
          <Row className="SignupModal-cta" justify="center">
            <NoticeButton text="Continue" htmlType="submit" />
          </Row>
        </Col>
      </Row>
    </Form>
  );
}
