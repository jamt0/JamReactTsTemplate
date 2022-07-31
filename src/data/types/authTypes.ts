//Request
export type GetPublicKeyRequest = {};

export type SignInRequest = {
	cypherID: string;
	email: string;
	password: string;
};

//Response
export type GetPublicKeyResponse = {
	id: string;
	rsaPublicKey: string;
};

export type SignInResponse = {
	jwt: string;
};
