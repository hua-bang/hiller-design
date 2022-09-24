import { CSSProperties } from 'react';

export type ButtonType = 'primary' | 'default';
export type KindMap = Record<ButtonType, string>;

export interface ButtonProps {
  
  type?: ButtonType;

  style?: CSSProperties;

  block?: boolean;

  disabled?: boolean;

  loading?: boolean;

  onClick?: React.MouseEventHandler<HTMLElement>;
}