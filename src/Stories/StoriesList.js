import './StoriesList.scss';

import { List } from 'antd';

import StoryItem from './StoryItem';

export default function StoriesList({ stories }) {
  return (
    <div className="StoriesList-list">
      <List
        grid={{ gutter: 16 }}
        dataSource={stories}
        renderItem={(item) => (
          <List.Item className="StoriesList-item">
            <StoryItem story={item} />
          </List.Item>
        )}
      />
    </div>
  );
}
