import React, {FC, useState} from 'react';

export enum CardVariant {
    outlined = 'outlined',
    primary = 'primary'

}
interface CardProps {
    width?: string;
    height?: string;
    variant: CardVariant ;
    children?:   React.ReactNode | React.ReactChild ;
    onclick: (num: number) => void;

}

 const Card:  FC<CardProps> = 
({
    width,
    height,
    variant,
    children ,
    onclick,
}) => {
    const[state, setState] = useState(0)
  return (
    <div style={{width, height, border: variant === CardVariant.outlined ? 'solid 4px grey' : 'none',
    background: variant ===CardVariant.primary ? 'lightgrey': ''
    }}
    onClick={() => {
        setState(state+1)
        onclick(state)
    }}
    >
        Card
        {children}
        </div>
  )
}
export default Card;
