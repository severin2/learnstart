import './StoryFormPage.scss';

import { Row } from 'antd';

import PropTypes from 'prop-types';
import StoryForm from './StoryForm';
import { useHistory } from 'react-router';

/**
 * Draws a full-page add story form, redirects to the stories page on add
 * @param {*} param0 
 * @returns 
 */
export default function StoryFormPage({ user, onAddStory }) {
  const history = useHistory();

  /**
   * 
   * @param {{ title: string, story: string}} values 
   */
  const handleOnAddStory = (values) => {
    if (typeof onAddStory === 'function') {
      onAddStory({
        ...values,
        author: user.name,
      });
    }
    history.push('/stories');
  };
  return (
    <div className="SignupPage-container">
      <Row justify="center" align="middle">
        <StoryForm onAddStory={handleOnAddStory} />
      </Row>
    </div>
  );
}

StoryFormPage.propTypes = {
  user: PropTypes.object,
  onAddStory: PropTypes.func.isRequired
}
