import { INodeType, INodeTypeDescription } from 'n8n-workflow';

export class FastGpt implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'FastGPT',
        name: 'FastGpt',
        icon: 'file:kagi.svg',
        group: [],
        version: 0.1,
        subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
        description: 'Query FastGPT by Kagi',
        defaults: {
            name: 'FastGPT',
        },
        inputs: ['main'],
        outputs: ['main'],
        credentials: [
            {
                name: 'kagiApi',
                required: true,
            },
        ],
        requestDefaults: {
            baseURL: 'https://kagi.com/api/v0/fastgpt',
            headers: {
                'Content-Type': 'application/json',
            },
        },
		properties: [
            {
                displayName: 'Resource',
                name: 'resource',
                type: 'options',
                noDataExpression: true,
                options: [
                    {
                        name: 'Answer',
                        value: 'answer',
                    },
                ],
                default: 'answer',
            },
            {
                displayName: 'Operation',
                name: 'operation',
                type: 'options',
                noDataExpression: true,
                displayOptions: {
                    show: {
                        resource: [
                            'answer',
                        ],
                    },
                },
                options: [
                    {
                        name: 'Get',
                        value: 'get',
                        action: 'Get answer',
                        description: 'Get an answer to a query using the Kagi web search',
                        routing: {
                            request: {
                                method: 'POST',
                            },
                        },
                    },
                ],
                default: 'get',
            },
            {
                displayName: 'Query',
                description: 'The query to answer',
                required: true,
                name: 'query',
                type: 'string',
                default: 'When was n8n launched?',
                displayOptions: {
                    show: {
                        resource: [
                            'answer',
                        ],
                        operation: ['get'],
                    },
                },
                routing: {
                    request: {
                        body: {
                            query: '={{$value}}',
                        }
                    },
                    
                },
            },
        ]
	};
}