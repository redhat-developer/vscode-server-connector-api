import { RSPProviderAPI } from './rspProviderAPI';
import { API } from '..';

export interface RSPProviderAPIWrapper {
    /**
     * Provides access to Server Connector extension's RSP Provider API.
     */
    readonly api: Promise<API<RSPProviderAPI>>;
}