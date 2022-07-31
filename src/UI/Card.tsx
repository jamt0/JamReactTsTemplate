import { FunctionComponent } from 'react';
import { Card as CardPrime, CardProps } from 'primereact/card';

type Props = {
    header?:any
    title?:any
    style?:object
    className?:string
} & CardProps;

 

export const Card: FunctionComponent<Props> = ({ 
	...props
}) => (
	<CardPrime title={props.title} style={props.style}
	 {...props}
	 >
		{props.children}
	</CardPrime>
);