import { Button } from 'antd';
import './index.scss';

export default function NoticeButton({ text, onClick }) {
  const handleOnClick = () => {
    if (typeof onClick === 'function') {
      onClick();
    }
  };
 
  return (
    <Button
      className="NoticeButton"
      onClick={handleOnClick}
    >
      <p className="NoticeButton-text">{text}</p>
    </Button>
  );
}
