import './Home.scss';

import { Col, Row } from 'antd';
import { Link } from 'react-router-dom';

import Header from '../Header';
import NoticeButton from '../NoticeButton';

const TEXT = [
  {
    title: 'Only the hottest startups.',
    description:
      'We hand-select only the hottest startups and our expert copywriters interview and produce every story.',
  },
  {
    title: 'Easiest way to read.',
    description:
      'Learn from your phone or from your computer, and continue where you left off anytime.',
  },
  {
    title: 'Free. Forever.',
    description:
      "We're a non-profit project supported by Silicon Valley's top VCs and startup incubators. You won't have to pay a cent.",
  },
];

export default function Home({ header }) {
  const spacerForLarge = (
    <Col span={12}>
      <div className="bg-two Home-height-full Home-container"></div>
    </Col>
  );
  const spacerForSmall = (
    <>
      <Col span={24}>
        <div className="bg-two Home-height-full"></div>
      </Col>
    </>
  );

  const contentSections = TEXT.map(({ title, description }, index) => (
    <Row key={index}>
      {/* medium and above breakpoints */}
      <Col xs={{ span: 0 }} sm={{ span: 0 }} md={{ span: 24 }}>
        <Row>
          {index % 2 === 1 ? spacerForLarge : ''}
          <Col span={12}>
            <div className="bg-four Home-height-full Home-container">
              <div className="Home-content">
                <Row justify="center" align="middle">
                  <h1 className="color-one">{title}</h1>
                  <p className="color-two">{description}</p>
                </Row>
              </div>
            </div>
          </Col>
          {index % 2 === 0 ? spacerForLarge : ''}
        </Row>
      </Col>

      {/* small and under breakpoints */}
      <Col sm={{ span: 24 }} md={{ span: 0 }}>
        <Row>
          {spacerForSmall}
          <Col span={24}>
            <div className="bg-four Home-height-half">
              <div className="Home-content">
                <Row justify="center" align="middle">
                  <h1 className="color-one">{title}</h1>
                  <p className="color-two">{description}</p>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  ));

  return (
    <>
      {header}
      <div className="bg-four">
        <div className="bg-one Home-height-full">
          <div className="Home-content">
            <Row justify="center" align="middle">
              <Col span={24}>
                <Row justify="center">
                  <h1 className="color-four">Stay hungry. Stay foolish.</h1>
                </Row>
              </Col>

              <Col span={24}>
                <Row justify="center">
                  <p className="color-three">
                    Learn from the hottest startups in the world.
                  </p>
                </Row>
              </Col>

              <Col span={4}>
                <Row justify="center">
                  <Link to="/stories">
                    <NoticeButton text="Read Now" />
                  </Link>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
        <Row>
          {/* medium and larger */}
          <Col xs={{ span: 0 }} sm={{ span: 0 }} md={{ span: 24 }}>
            <div className="bg-three Home-height-half">
              <div className="Home-content">
                <Row justify="center" align="middle">
                  <h1 className="color-one">Smart tools for founders.</h1>
                </Row>
                <Row justify="center" align="middle">
                  <p className="color-two">
                    LearnStart is the simplest way for startup founders to
                    discover inspiring stories from startup founders from all
                    over the world, all in one place.
                  </p>
                </Row>
              </div>
            </div>
          </Col>
          {/* small and smaller, lighter background */}
          <Col sm={{ span: 24 }} md={{ span: 0 }}>
            <div className="bg-four Home-height-half">
              <div className="Home-content">
                <Row justify="center" align="middle">
                  <h1 className="color-one">Smart tools for founders.</h1>
                </Row>
                <Row justify="center" align="middle">
                  <p className="color-two">
                    LearnStart is the simplest way for startup founders to
                    discover inspiring stories from startup founders from all
                    over the world, all in one place.
                  </p>
                </Row>
              </div>
            </div>
          </Col>
        </Row>

        {contentSections}
        <div className="bg-three Home-height-half Home-last-container">
          <div className="Home-last-content">
            <Row justify="center" align="middle">
              <Col span={24}>
                <Row justify="center">
                  <h1 className="color-one">Let's get started.</h1>
                </Row>
              </Col>
              <Col span={4}>
                <Row justify="center">
                  <Link to="/stories">
                    <NoticeButton text="Read Now" />
                  </Link>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}
