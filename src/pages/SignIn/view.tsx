import { FunctionComponent } from 'react';
import { TUserSignIn } from 'models/userModels';
import { Card, Avatar, InputText, Button } from 'UI';
import { ControlProps, FormProps } from 'models/form';

type Props = {
	formProps: FormProps;
	controlProps: Omit<ControlProps, 'name'>;
	signIn: (user: TUserSignIn) => void;
};

export const ViewSignIn: FunctionComponent<Props> = (props) => (
	<div style={{ display: 'flex', justifyContent: 'center' }}>
		<Card
			title='SignIn'
			style={{
				width: '40rem',
				marginBottom: '2em',
				marginTop: '4em',
				height: '80vh',
				textAlign: 'center',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
			}}
		>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					marginTop: '4em',
				}}
			>
				<Avatar
					label='V'
					style={{ backgroundColor: '#9c27b0', color: '#ffffff' }}
					shape='circle'
				></Avatar>
				<InputText
					controllerProps={{
						control: props.controlProps.control,
						defaultValue: props.controlProps.defaultValue.email,
						name: 'email',
					}}
					errors={props.formProps.errors}
					style={{ marginBottom: '2em', marginTop: '2em' }}
					type='text'
				></InputText>
				<InputText
					controllerProps={{
						control: props.controlProps.control,
						defaultValue: props.controlProps.defaultValue.email,
						name: 'password',
					}}
					errors={props.formProps.errors}
					style={{ marginBottom: '2em', marginTop: '2em' }}
					type='text'
				></InputText>
				<Button
					label='Sing In'
					className='p-button-lg'
					onClick={props.formProps.handleSubmit(props.signIn)}
				></Button>
			</div>
		</Card>
	</div>
);
