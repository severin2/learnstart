import { Button } from 'antd';

export default function SignupButton({ onClick }) {
  return (
    <Button size="large" className="color-notice" type="link" onClick={() => typeof onClick === 'function' ? onClick() : void 0}>
      Sign up
    </Button>
  );
}
