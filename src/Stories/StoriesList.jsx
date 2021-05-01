import './StoriesList.scss';

import { List } from 'antd';

import StoryItem from './StoryItem';
import PropTypes from 'prop-types';

/**
 * Draws a list of stories, is reused by both swimlanes
 * Behold! Scrolling!
 * @param {*} param0 
 * @returns 
 */
export default function StoriesList({
  stories,
  isLoggedIn,
  showFeatureCTA,
  onFeatureStory,
  onDeleteStory,
}) {
  const handleOnFeatureStory = (story) => {
    if (typeof onFeatureStory === 'function') {
      onFeatureStory(story);
    }
  };

  const handleOnDeleteStory = (story) => {
    if (typeof onDeleteStory === 'function') {
      onDeleteStory(story);
    }
  };
  return (
    <div className="StoriesList-list">
      {stories.map((item, index) => (
        <List.Item key={index} className="StoriesList-item">
          <StoryItem
            story={item}
            isLoggedIn={isLoggedIn}
            showFeatureCTA={showFeatureCTA}
            onFeatureStory={handleOnFeatureStory}
            onDeleteStory={handleOnDeleteStory}
          />
        </List.Item>
      ))}
    </div>
  );
}

StoriesList.propTypes = {
  stories: PropTypes.array.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  showFeatureCTA: PropTypes.bool,
  onFeatureStory: PropTypes.func,
  onDeleteStory: PropTypes.func.isRequired,
};
