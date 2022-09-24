import React from 'react';
import { ButtonProps, ButtonType } from './interface';
import classNames from 'classnames';

const prefixCls = 'hiller-button';
const disabledCls = `${prefixCls}-disabled`;


const defaultType: ButtonType = 'default';

const TypeClsMap: Record<ButtonType, string> = {
  default: '',
  primary: `${prefixCls}-primary`
};

const Button: React.FC<ButtonProps> = ({
  type = defaultType,
  block = false,
  onClick,
  children,
  style = {},
  disabled = false
}) => {

  const cls = classNames(prefixCls, TypeClsMap[type], disabled ? disabledCls : '');

  const handleClick: React.MouseEventHandler<HTMLElement> = (e) => {
    onClick && onClick(e);
  };

  const display = block ? 'block' : 'inline';

  return (
    <div className={cls} onClick={handleClick} style={{ display, ...style }}>
      {children}
    </div>
  );
};

export default Button;