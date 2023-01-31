import React from 'react'

interface CardProps {
    width?: string;
    height?: string;
    children?:   React.ReactNode | React.ReactChild ;

}

export const Card: React.FC<CardProps> = ({width, height, children }: CardProps) => {
  return (
    <div style={{width, height, border: 'solid 4px grey'}}>
        Card
        {children}
        </div>
  )
}
