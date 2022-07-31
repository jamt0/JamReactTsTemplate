import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'data/global/store';
import AuthApi from 'data/api/authApi';
import { ErrorStatus, StatusRequest } from 'data/types';
import {
	GetPublicKeyRequest,
	GetPublicKeyResponse,
	SignInRequest,
	SignInResponse,
} from 'data/types/authTypes';
import { Either, isRight, unwrapEither } from 'models/either';

type TAuthSlice = {
	getPublicKeyStatusRequest: StatusRequest;
	getPublicKeyStatusError?: ErrorStatus;
	signInStatusRequest: StatusRequest;
	signInStatusError?: ErrorStatus;
};

const initialState: TAuthSlice = {
	getPublicKeyStatusRequest: StatusRequest.initial,
	getPublicKeyStatusError: undefined,
	signInStatusRequest: StatusRequest.initial,
	signInStatusError: undefined,
};

export const GetPublicKeyAsync = createAsyncThunk<
	GetPublicKeyResponse,
	GetPublicKeyRequest,
	{ rejectValue: ErrorStatus }
>('auth/GetPublicKeyAsync', async (request: GetPublicKeyRequest, thunkAPI) => {
	try {
		const eitherResponse: Either<Error, GetPublicKeyResponse> =
			await AuthApi.getPublicKey();
		if (isRight(eitherResponse)) {
			const response = unwrapEither(eitherResponse);
			// ver TODO
			const { rsaPublicKey } = response;
			localStorage.setItem(rsaPublicKey, 'rsaPublicKey');
			return response;
		}
		//TODO mejorar manejo error
		const response = unwrapEither(eitherResponse);
		const error: ErrorStatus = {
			error: true,
			message: response.message,
		};
		return thunkAPI.rejectWithValue(error);
	} catch (e) {
		//TODO manejar error
		const error: ErrorStatus = {
			error: true,
			message: 'Error',
		};
		return thunkAPI.rejectWithValue(error);
	}
});
export const signInUserAsync = createAsyncThunk<
	SignInResponse,
	SignInRequest,
	{ rejectValue: ErrorStatus }
>('user/signInUserAsync', async (request: SignInRequest, thunkAPI) => {
	console.log('signInUserAsync');
	try {
		const eitherResponse: Either<Error, SignInResponse> =
			await AuthApi.signIn(request);
		if (isRight(eitherResponse)) {
			const response = unwrapEither(eitherResponse);
			const { jwt } = response;
			localStorage.setItem(jwt, 'jwt');
			return response;
		}
		//TODO mejorar manejo error
		const response = unwrapEither(eitherResponse);
		const error: ErrorStatus = {
			error: true,
			message: response.message,
		};
		return thunkAPI.rejectWithValue(error);
	} catch (e) {
		//TODO manejar error
		const error: ErrorStatus = {
			error: true,
			message: 'Error',
		};
		return thunkAPI.rejectWithValue(error);
	}
});

export const AuthSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(GetPublicKeyAsync.pending, (state) => {
			state.getPublicKeyStatusRequest = StatusRequest.pending;
		});
		builder.addCase(GetPublicKeyAsync.fulfilled, (state, action) => {
			state.getPublicKeyStatusRequest = StatusRequest.fulfilled;
			// state.user = action.payload;
		});
		builder.addCase(GetPublicKeyAsync.rejected, (state, action) => {
			state.getPublicKeyStatusRequest = StatusRequest.rejected;
			state.getPublicKeyStatusError = action.payload;
		});
		builder.addCase(signInUserAsync.pending, (state) => {
			state.signInStatusRequest = StatusRequest.pending;
		});
		builder.addCase(signInUserAsync.fulfilled, (state, action) => {
			state.signInStatusRequest = StatusRequest.fulfilled;
		});
		builder.addCase(signInUserAsync.rejected, (state, action) => {
			state.signInStatusRequest = StatusRequest.rejected;
			state.signInStatusError = action.payload;
		});
	},
});

export const selectAuth = (state: RootState) => state.auth;
export const {} = AuthSlice.actions;
export default AuthSlice.reducer;
