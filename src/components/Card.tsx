import React , {FC} from 'react';

export enum CardVariant {
    outlined = 'outlined',
    primary = 'primary'

}
interface CardProps {
    width?: string;
    height?: string;
    variant: CardVariant ;
    children?:   React.ReactNode | React.ReactChild ;

}

 const Card:  FC<CardProps> = 
({
    width,
    height,
    variant,
    children 
}) => {
  return (
    <div style={{width, height, border: variant === CardVariant.outlined ? 'solid 4px grey' : 'none',
    background: variant ===CardVariant.primary ? 'lightgrey': ''
    }}>
        Card
        {children}
        </div>
  )
}
export default Card;
