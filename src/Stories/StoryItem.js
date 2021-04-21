import './StoryItem.scss';

import { UserOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';

export default function StoryItem({ story }) {
  const { title, author } = story || {};
  return (
    <Card
      className="StoryItem-card"
      hoverable
      cover={<div className="bg-two" style={{ height: '200px' }}></div>}
    >
      <Meta
        title={<div className="StoryItem-description">{title}</div>}
        description={
          <div className="StoryItem-description">
            <UserOutlined /> {author}
          </div>
        }
      />
    </Card>
  );
}
