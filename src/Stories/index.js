import './Stories.scss';

import { Col, Row } from 'antd';

import Header from '../Header';
import stories from '../stories.json';
import StoriesList from './StoriesList';

export default function Stories() {
  return (
    <>
      <Header />
      <div className="bg-one Stories-header">
        <Row style={{ height: '100%' }} justify="center" align="middle">
          <Col span={24}>
            <Row justify="center">
              <h1 className="color-four">Stories</h1>
            </Row>
          </Col>
        </Row>
      </div>
      <div className="Stories-lane">
        <div>
          <h3>Latest</h3>
        </div>
        <div>
          <StoriesList stories={stories} />
        </div>
      </div>
      <div className="Stories-lane">
        <div>
          <h3>Editor's Picks</h3>{' '}
        </div>
        <div>
          <StoriesList stories={stories} />
        </div>
      </div>
    </>
  );
}
