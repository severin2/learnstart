import { Button } from 'antd';
import './index.scss';

export default function NoticeButton({ text, onClick, htmlType }) {
  const handleOnClick = () => {
    if (typeof onClick === 'function') {
      onClick();
    }
  };
 
  return (
    <Button
      className="NoticeButton"
      onClick={handleOnClick}
      htmlType={htmlType}
    >
      <p className="NoticeButton-text">{text}</p>
    </Button>
  );
}
