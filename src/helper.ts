import { API } from '.';
import { SERVER_CONNECTOR_EXTENSION_ID } from './constants';
import * as vscode from 'vscode';

async function activateExtension(): Promise<API | undefined>  {
    const extension = vscode.extensions.getExtension<API>(SERVER_CONNECTOR_EXTENSION_ID);
    if (!extension) {
        return undefined;
    }
    const api = await extension.activate();
    return api;
}

export async function getAPI(): Promise<API> {
    const api = await activateExtension();
    if (!api) {
        return {
            available: false,
            reason: 'extension-not-available'
        };
    }
    return api;
}
