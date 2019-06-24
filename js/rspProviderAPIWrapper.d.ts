import { RSPProviderAPI } from "./rspProviderAPI";
import { API } from ".";
export interface RSPProviderAPIWrapper {
    /**
     * Provides access to v1 of the Kubernetes extension's Explorer Tree API.
     */
    readonly api: Promise<API<RSPProviderAPI>>;
}
