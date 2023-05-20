import React, { Children } from 'react'

interface Props {
    children: string;
    color?: 'primary' | 'secondary' |'danger' | 'success';
    onClick: () => void;
}

const Button = ({children, onClick, color = 'primary'}:Props) => {
  return (
    <button className={'btn btn-' + color} onClick={onClick}>{children}Button</button>
  )
}

export default Button