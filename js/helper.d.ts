import { Extension, API } from '.';
import { RSPProviderAPI } from './api/rspProviderAPI';
export declare class ExtensionHelper implements Extension {
    private readonly apiBroker;
    getCore(): Promise<API<any>>;
    get<T>(): Promise<API<T>>;
    readonly RSPProvider: Readonly<{
        api: Promise<API<RSPProviderAPI>>;
    }>;
}
