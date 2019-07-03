import { SERVER_CONNECTOR_EXTENSION_ID } from './constants';
import * as vscode from 'vscode';
import { API } from './util/types';
import { RSPModel } from './api/rspModel';

async function activateExtension(): Promise<RSPModel | undefined>  {
    const extension = vscode.extensions.getExtension<RSPModel>(SERVER_CONNECTOR_EXTENSION_ID);
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
    return {
        available: true,
        api: api
    };
}
