import clsx from 'clsx';
import { styled } from '@mui/system';
import { useSwitch } from '@mui/base/SwitchUnstyled';

const BasicSwitchRoot = styled('span')`
  font-size: 0;
  position: relative;
  display: inline-block;
  width: 32px;
  height: 15px;
  background: #F9F9F9;
  border-radius: 10px;
  margin: 10px;
  margin-right: 2px;
  cursor: pointer;
  box-shadow: 0 0 0.5px 0.5px #3B755F;

  &.Switch-disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  &.Switch-checked {
    background: #3B755F;
  }

`;

const BasicSwitchInput = styled('input')`
  cursor: inherit;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: 1;
  margin: 0;
  
`;

const BasicSwitchThumb = styled('span')`
  display: block;
  width: 14px;
  height: 15px;
  border-radius: 16px;
  background-color: #fff;
  position: relative;
  transition: all 200ms ease; 
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.25);
  &:hover: {
    background-color: pink;
  }

  &.Switch-focusVisible {
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0 0 1px 8px rgba(0, 0, 0, 0.25);
  }

  &.Switch-checked {
    left: 14px;
    background-color: #fff;
    &:hover {
        background-color: pink
      }
  }
`;

function BasicSwitch(props) {
    const { getInputProps, checked, disabled, focusVisible } = useSwitch(props);
  
    const stateClasses = {
      'Switch-checked': checked,
      'Switch-disabled': disabled,
      'Switch-focusVisible': focusVisible,
    };
  
    return (
      <BasicSwitchRoot className={clsx(stateClasses)}>
        <BasicSwitchThumb className={clsx(stateClasses)} />
        <BasicSwitchInput {...getInputProps()} aria-label="Demo switch" />
      </BasicSwitchRoot>
    );
  }
  

const UseSwitch = () => {

    return (
        <>
            <BasicSwitch />
        </>
    )
}

export default UseSwitch;