import './Header.scss';

import { Col, PageHeader, Row } from 'antd';
import { Link } from 'react-router-dom';

import SignupButton from '../SignupButton';
import SignupModal from '../SignupModal';

export default function Header() {
  return (
    <PageHeader
      title={
        <Link to="/home">
          <h3 className="Header-title">LearnStart</h3>
        </Link>
      }
      extra={[
        <Row align="middle">
          <Col sm={{ span: 24 }} md={{ span: 0 }}>
            <Link to="/signup">
              <SignupButton />
            </Link>
          </Col>
          <Col xs={{ span: 0 }} sm={{ span: 0 }} md={{ span: 24 }}>
            <SignupModal text="Sign up" />
          </Col>
        </Row>,
      ]}
    />
  );
}
