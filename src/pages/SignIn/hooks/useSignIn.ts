import { useAppDispatch } from 'data/global/hooks';
import { TUserSignIn } from 'models/userModels';
import {
	GetPublicKeyAsync,
	signInUserAsync,
} from 'data/global/features/AuthSlice/authSlice';

const useSignIn = () => {
	const dispatch = useAppDispatch();

	const signIn = (user: TUserSignIn): void => {
		dispatch(GetPublicKeyAsync({}));
		const cypherID = localStorage.getItem('rsaPublicKey') ?? '';
		// dispatch(signInUserAsync({ ...user, cypherID }));
		console.log(user, cypherID);
	};

	return signIn;
};

export default useSignIn;
