import {
	IAuthenticateGeneric,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class KagiApi implements ICredentialType {
	name = 'kagiApi';
	displayName = 'Kagi API';
	documentationUrl = 'https://github.com/that-one-tom/n8n-nodes-fastgpt/blob/master/README.md';
	properties: INodeProperties[] = [
		{
			displayName: 'API Token',
			name: 'apiToken',
			type: 'string',
			default: '',
		},
	];
	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				'Authorization': '=Bot {{$credentials.apiToken}}'
			}
		},
	};
}