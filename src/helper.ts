import { SERVER_CONNECTOR_EXTENSION_ID } from './constants';
import * as vscode from 'vscode';
import { API } from './util/types';

async function activateExtension(): Promise<API | undefined>  {
    const extension = vscode.extensions.getExtension<API>(SERVER_CONNECTOR_EXTENSION_ID);
    if (!extension) {
        return undefined;
    }
    const api = await extension.activate();
    return api;
}

export async function retrieveUIExtension(): Promise<API> {
    const api = await activateExtension();
    if (!api) {
        return {
            available: false,
            reason: 'extension-not-available'
        };
    }
    return api;
}
