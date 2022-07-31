import { FunctionComponent } from 'react';
import { Button as ButtonPrime, ButtonProps } from 'primereact/button';

type Props = {
	label?:string
	icon?:any
	className?:string
} & ButtonProps;

export const Button: FunctionComponent<Props> = ({
	...props
}) => (
	<ButtonPrime label={props.label} className={props.className} {...props}>
		{props.children}
	</ButtonPrime>
);