//Response
export type SignUpResponse = {
	email: string;
	password: string;
};

export type LogoutResponse = {};

//Request

export type SignUpRequest = {
	email: string;
	password: string;
};

export type LogoutRequest = {};
