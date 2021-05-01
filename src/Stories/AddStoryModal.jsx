import './AddStoryModal.scss';

import { Modal } from 'antd';
import PropTypes from 'prop-types';
import { useState } from 'react';

import NoticeButton from '../NoticeButton';
import StoryForm from './StoryForm';

/**
 * Draws the button that opens the modal, the modal (when open), and tracks the modal state
 * @param {*} param0
 * @returns
 */
export default function AddStoryModal({ onAddStory }) {
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

  const handleOnAddStory = (values) => {
    if (typeof onAddStory === 'function') {
      onAddStory(values);
    }
    setIsModalVisible(false);
  };

  return (
    <>
      <NoticeButton text="Add Story" onClick={showModal} />
      <Modal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <StoryForm onAddStory={handleOnAddStory} onCancel={handleCancel} />
      </Modal>
    </>
  );
}

AddStoryModal.propTypes = {
  onAddStory: PropTypes.func.isRequired,
};
