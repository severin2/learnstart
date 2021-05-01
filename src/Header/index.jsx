import './Header.scss';

import { Button, Col, PageHeader, Row } from 'antd';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import SignupButton from '../Signup/SignupButton';
import SignupModal from '../Signup/SignupModal';

export default function Header({ user, onLogin, onLogout }) {
  let userSection = '';
  if (user) {
    userSection = (
      <Row align="middle">
        <Col span={24}>
          <span>Hi {user.name}</span>
          <Button type="link" onClick={onLogout}>
            Log Out
          </Button>
        </Col>
      </Row>
    );
  } else {
    userSection = (
      <Row align="middle">
        <Col sm={{ span: 24 }} md={{ span: 0 }}>
          <Link to="/signup">
            <SignupButton/>
          </Link>
        </Col>
        <Col xs={{ span: 0 }} sm={{ span: 0 }} md={{ span: 24 }}>
          <SignupModal onLogin={onLogin} />
        </Col>
      </Row>
    );
  }

  return (
    <PageHeader
      title={
        <Link to="/home">
          <h3 className="Header-title">LearnStart</h3>
        </Link>
      }
      extra={[userSection]}
    />
  );
}

Header.propTypes = {
  user: PropTypes.object,
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
};
