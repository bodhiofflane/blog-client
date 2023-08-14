import {ReactNode} from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

type NavigateButtonProps = {
  children: ReactNode;
  direction: 'back' | 'forward'
};

const NavigateButton = ({children, direction}: NavigateButtonProps) => {
  const navigate = useNavigate();

  const goToHandler = () => {
    const to = direction === 'back' ? -1 : 1;
    navigate(to);
  }

  return (
    <Button
      onClick={goToHandler}
      style="second"
    >
      {children}
    </Button>
  );
}
 
export default NavigateButton;