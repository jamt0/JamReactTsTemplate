import React, { Fragment } from 'react';
import { ViewSignIn } from './view';
import { useForm } from 'react-hook-form';
import { useSignIn } from './hooks';
import { rulesEmail, rulesPassword } from 'utils/validationRules';
import { useTranslation } from 'react-i18next';

export const SignIn: React.FC = () => {
	const signIn = useSignIn();

	const { t } = useTranslation();

	const {
		control,
		handleSubmit,
		formState: { errors, isSubmitting, isValid },
	} = useForm({ mode: 'onChange' });

	const defaultValue = { email: '', password: '' };

	const rules = {
		rulesEmail: rulesEmail(t),
		rulesPassword: rulesPassword(t),
	};
	return (
		<Fragment>
			<ViewSignIn
				signIn={signIn}
				formProps={{ handleSubmit, errors, isSubmitting, isValid }}
				controlProps={{ control, defaultValue, rules }}
			/>
		</Fragment>
	);
};
