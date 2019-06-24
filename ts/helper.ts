import { Extension, APIBroker, API } from '.';
import { SERVER_CONNECTOR_EXTENSION_ID } from './constants';
import * as vscode from 'vscode';
import { RSPProviderAPI } from './api/rspProviderAPI';


class Lazy<T> {
    private value: T | undefined = undefined;
    constructor(private readonly fn: () => T) {}
    get(): T {
        if (this.value === undefined) {
            this.value = this.fn();
        }
        return this.value;
    }
}

export class ExtensionHelper implements Extension {
    private readonly apiBroker = new Lazy<Promise<APIBroker | undefined>>(() => getBroker());
    async getCore(): Promise<API<any>> {
        const apiBroker = await this.apiBroker.get();
        if (!apiBroker) {
            return { available: false, reason: "extension-not-available" };
        }
        return apiBroker.get();
    }
    async get<T>(): Promise<API<T>> {
        const api = await this.getCore();
        return api as API<T>;
    }
    readonly RSPProvider = readonlify({
        api: this.get<RSPProviderAPI>()
    });
}

function readonlify<T>(t: T): Readonly<T> {
    return t;
}

async function getBroker(): Promise<APIBroker | undefined> {
    const extension = vscode.extensions.getExtension<APIBroker>(SERVER_CONNECTOR_EXTENSION_ID);
    console.log('extension inside npm' + (extension === undefined).toString());
    if (!extension) {
        return undefined;
    }
    const apiBroker = await extension.activate();
    console.log('apiBroker inside npm' + (apiBroker === undefined).toString());
    return apiBroker;
}