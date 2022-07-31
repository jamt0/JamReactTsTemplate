import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import config from 'config';
import { BaseResponse } from 'data/types';

interface CommonHeaderProperties extends AxiosRequestConfig {
	authorization: string;
}

function getConfigHeader(secure: boolean): AxiosRequestConfig {
	const configHeader = { headers: {} } as CommonHeaderProperties;
	if (secure) {
		const rsaPublicKey = localStorage.getItem('rsaPublicKey');
		configHeader.headers['authorization'] = rsaPublicKey;
	}
	return configHeader;
}

export async function post<Request, Response>({
	url,
	request,
	secure = true,
}: {
	url: string;
	request: Request;
	secure?: boolean;
}): Promise<BaseResponse<Response>> {
	try {
		const response: AxiosResponse<BaseResponse<Response>> = await axios.post(
			config.baseURL + url,
			request,
			getConfigHeader(secure)
		);
		return response.data;
	} catch (error) {
		//TODO: Manejar que tipo de error es
		return {
			error: true,
		};
	}
}

export async function get<Request, Response>({
	url,
	secure = true,
	request,
}: {
	url: string;
	secure?: boolean;
	request?: Request;
}): Promise<BaseResponse<Response>> {
	//TODO: Request como query
	try {
		const response: AxiosResponse<BaseResponse<Response>> = await axios.post(
			config.baseURL + url,
			getConfigHeader(secure)
		);
		return response.data;
	} catch (error) {
		//TODO: Manejar que tipo de error es
		return {
			error: true,
		};
	}
}

export async function put<Request, Response>({
	url,
	secure = true,
	request,
}: {
	url: string;
	secure: boolean;
	request?: Request;
}): Promise<BaseResponse<Response>> {
	try {
		const response: AxiosResponse<BaseResponse<Response>> = await axios.put(
			config.baseURL + url,
			request,
			getConfigHeader(secure)
		);
		return response.data;
	} catch (error) {
		//TODO: Manejar que tipo de error es
		return {
			error: true,
		};
	}
}

export async function deleteApi<Request, Response>({
	url,
	secure = true,
	request,
}: {
	url: string;
	secure: boolean;
	request?: Request;
}): Promise<BaseResponse<Response>> {
	try {
		const response: AxiosResponse<BaseResponse<Response>> = await axios.delete(
			config.baseURL + url,
			getConfigHeader(secure)
		);
		return response.data;
	} catch (error) {
		//TODO: Manejar que tipo de error es
		return {
			error: true,
		};
	}
}
