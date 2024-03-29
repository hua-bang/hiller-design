import React from 'react';
import { AlertProps, KindMap, Kind } from './interface';

const prefixCls = 'hiller-alert';
const defaultKind: Kind = 'info';
const defaultText = 'alert';

const kindsColorMap: KindMap = {
  info: '#5352ED',
  positive: '#2ED573',
  negative: '#FF4757',
  warning: '#FFA502'
};

const Alert: React.FC<AlertProps> = props => {
  const {
    style = {},
    kind = defaultKind,
    children = defaultText,
    ...rest
  } = props;
  
  return (
    <div
      className={prefixCls}
      style={{
        background: kindsColorMap[kind as Kind],
        ...style
      }}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Alert;