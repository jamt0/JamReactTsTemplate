import * as BaseApi from 'data/models/baseApi';
import * as BaseRepository from 'data/models/baseRepository';
import {
	GetPublicKeyRequest,
	GetPublicKeyResponse,
	SignInRequest,
	SignInResponse,
} from 'data/types/authTypes';
import { Either } from 'models/either';

export const getPublicKey = async (
): Promise<Either<Error, GetPublicKeyResponse>> => {
	return BaseRepository.toEither(() =>
		BaseApi.get<GetPublicKeyRequest, GetPublicKeyResponse>({
			url: '/api/public/v1/backoffice/auth/pubk',
			secure: false,
		})
	);
};

export const signIn = async (
	request: SignInRequest
): Promise<Either<Error, SignInResponse>> => {
	return BaseRepository.toEither(() =>
		BaseApi.post<SignInRequest,SignInResponse>({
			url: '/api/public/v1/backoffice/auth/session',
			request,
		})
	);
};

const AuthApi = {
	getPublicKey,
	signIn,
};

export default AuthApi;
