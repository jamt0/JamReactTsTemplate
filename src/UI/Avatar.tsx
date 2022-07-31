import { FunctionComponent } from 'react';
import { Avatar as AvatarPrime, AvatarProps } from 'primereact/avatar';

type Props = {
	label?:string, 
	size?:string, 
	shape?:string,
	style?:object,
} & AvatarProps;

 

export const Avatar: FunctionComponent<Props> = ({
	size="large",  
	...props
}) => (
	<AvatarPrime shape={props.shape} label={props.label} size={size} style= {props.style}
	 {...props}
	 >
		{props.children}
	</AvatarPrime>
);