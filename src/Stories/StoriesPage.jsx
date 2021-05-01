import './Stories.scss';

import { Col, Row } from 'antd';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import NoticeButton from '../NoticeButton';
import AddStoryModal from './AddStoryModal';
import StoriesList from './StoriesList';

/**
 * Renders the stories page, has a header, include lists and add button
 * @param {*} param0
 * @returns
 */
export default function StoriesPage({
  header,
  user,
  latestStories,
  onAddLatestStory,
  onRemoveLatestStory,
  featuredStories,
  onAddFeaturedStory,
  onRemoveFeaturedStory,
}) {
  const handleOnAddNewStory = (values) => {
    if (typeof onAddLatestStory === 'function' && !!user) {
      onAddLatestStory({
        ...values,
        author: user.name,
      });
    }
  };

  return (
    <>
      {header}
      <div className="bg-one Stories-header">
        <Row style={{ height: '100%' }} justify="center" align="middle">
          <Col span={24}>
            <Row justify="center">
              <h1 className="color-four">Stories</h1>
            </Row>
          </Col>
        </Row>
      </div>
      {!!user && (
        <Row justify="center" align="middle">
          <Col sm={{ span: 12 }} md={{ span: 0 }}>
            <Link to="/add-story">
              <NoticeButton text="Add Story" />
            </Link>
          </Col>
          <Col xs={{ span: 0 }} sm={{ span: 0 }} md={{ span: 12 }}>
            <AddStoryModal onAddStory={handleOnAddNewStory} />
          </Col>
        </Row>
      )}
      <div className="Stories-lane">
        <div>
          <h3>Editor's Picks</h3>
        </div>
        <div>
          <StoriesList
            stories={featuredStories}
            isLoggedIn={!!user}
            showFeatureCTA={false}
            onDeleteStory={onRemoveFeaturedStory}
          />
        </div>
      </div>
      <div className="Stories-lane">
        <div>
          <h3>Latest</h3>
        </div>
        <div>
          <StoriesList
            stories={latestStories}
            isLoggedIn={!!user}
            showFeatureCTA={true}
            onFeatureStory={onAddFeaturedStory}
            onDeleteStory={onRemoveLatestStory}
          />
        </div>
      </div>
    </>
  );
}

StoriesPage.propTypes = {
  header: PropTypes.node.isRequired,
  user: PropTypes.object,
  latestStories: PropTypes.array.isRequired,
  onAddLatestStory: PropTypes.func.isRequired,
  onRemoveLatestStory: PropTypes.func.isRequired,
  featuredStories: PropTypes.array.isRequired,
  onAddFeaturedStory: PropTypes.func.isRequired,
  onRemoveFeaturedStory: PropTypes.func.isRequired,
};
