import {
	FunctionComponent,
	Fragment,
	HTMLInputTypeAttribute,
	CSSProperties,
} from 'react';
import { Controller } from 'react-hook-form';
import {
	InputText as InputTextPrime,
	InputTextProps,
} from 'primereact/inputtext';
import { ErrorMessage } from '@hookform/error-message';
import ErrorText from './ErrorText';
import { ControlProps } from 'models/form';

type Props = {
	style?: CSSProperties;
	errors?: any;
	type?: HTMLInputTypeAttribute;
	controllerProps: ControlProps;
} & InputTextProps;

export const InputText: FunctionComponent<Props> = ({ ...props }) => (
	<Fragment>
		<Controller
			render={({ field: { onChange, onBlur, value, ref } }) => (
				<InputTextPrime
					type={props.type}
					onChange={onChange}
					onBlur={onBlur}
					value={value}
					style={props.style}
				></InputTextPrime>
			)}
			control={props.controllerProps.control}
			defaultValue={props.controllerProps.defaultValue}
			name={props.controllerProps.name}
			rules={props.controllerProps.rules}
		/>

		<ErrorMessage
			errors={props.errors}
			name='singleErrorInput'
			render={({ message }) => <p>{message}</p>}
		/>

		{/* <ErrorMessage
			errors={props.errors}
			name={props.controllerProps.name}
			as={<ErrorText />}
		/> */}
	</Fragment>
);
