import { Control, FieldValues } from 'react-hook-form';

export type ControlProps = {
	control?: Control<FieldValues, any>;
	defaultValue?: any;
	name: string;
	rules?: any;
};

export type FormProps = {
	handleSubmit: any;
	errors: any;
	isValid: boolean;
	isSubmitting: boolean;
};
