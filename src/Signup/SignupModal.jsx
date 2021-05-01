import './SignupModal.scss';

import { Modal } from 'antd';
import PropTypes from 'prop-types';
import { useState } from 'react';

import SignupButton from './SignupButton';
import SignupForm from './SignupForm';

/**
 * Draws the button to open the modal and the modal, tracks the state of it being opened/closed
 * @param {*} param0 
 * @returns 
 */
export default function SignupModal({ onLogin }) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleOnLogin = (values) => {
    if (typeof onLogin === 'function') {
      onLogin(values);
    }
    // modal closes even if no function was passed
    setIsModalVisible(false);
  };

  return (
    <>
      <SignupButton onClick={showModal} />
      <Modal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <SignupForm onLogin={handleOnLogin} />
      </Modal>
    </>
  );
}

SignupModal.propTypes = {
  onLogin: PropTypes.func.isRequired,
};
