import { RSPServer } from "../util/types";

export interface RSPProviderAPI {
    registerRSPProvider(rsp: RSPServer): Promise<void>;
    deregisterRSPProvider(id: string): Promise<void>;
}