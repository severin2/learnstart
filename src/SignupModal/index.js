import './SignupModal.scss';

import { Modal } from 'antd';
import { useState } from 'react';

import SignupButton from '../SignupButton';
import SignupForm from '../SignupForm';

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
    setIsModalVisible(false);
  }

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
