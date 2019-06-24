import { RSPState } from "../util/types";
export interface RSPProviderAPI {
    registerRSPProvider(rsp: RSPState): Promise<void>;
    deregisterRSPProvider(id: string): Promise<void>;
}
