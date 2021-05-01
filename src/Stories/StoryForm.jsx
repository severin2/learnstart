import './StoryForm.scss';

import { Col, Form, Input, Row } from 'antd';
import PropTypes from 'prop-types';

import NoticeButton from '../NoticeButton';

/**
 * Renders the form to add a story
 * is used by both the add storm page and the modal
 * 
 * Uses Antd forms, which are actually great
 * @param {*} param0
 * @returns
 */
export default function StoryForm({ onAddStory, onCancel }) {
  /**
   * 
   * @param {{title: string, story: string}} values 
   */
  const handleOnFinish = (values) => {
    if (typeof onAddStory === 'function') {
      onAddStory(values);
    }
  };

  const handleOnFinishFailed = (errorInfo) => {
    console.error('Failed to submit form', errorInfo);
  };

  const handleOnCancel = () => {
    if (typeof onCancel === 'function') {
      onCancel();
    }
  };

  return (
    <Form onFinish={handleOnFinish} onFinishFailed={handleOnFinishFailed}>
      <Row justify="center" align="middle">
        <Col span={24}>
          <Row justify="center">
            <h1>Add Story</h1>
          </Row>
        </Col>
        <Col span={24}>
          <div className="StoryForm-input">
            <Form.Item
              name="title"
              rules={[{ required: true, message: 'This story needs a title.' }]}
            >
              <Input.TextArea rows={2} placeholder="Title" />
            </Form.Item>
          </div>
        </Col>
        <Col span={24}>
          <div className="StoryForm-input">
            <Form.Item
              name="story"
              rules={[
                { required: true, message: 'Please tell us your story.' },
              ]}
            >
              <Input.TextArea rows={4} placeholder="Story" />
            </Form.Item>
          </div>
        </Col>

        <Col span={24}>
          <Row className="StoryForm-cta" justify="space-between">
            <Col span={11}>
              <NoticeButton text="Add" htmlType="submit" />
            </Col>
            <Col span={11}>
              <NoticeButton
                text="Cancel"
                invertColor={true}
                onClick={handleOnCancel}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Form>
  );
}

StoryForm.propTypes = {
  onAddStory: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};
