import { RSPServer } from '../util/types';

export interface RSPModel {
    registerRSPProvider(rsp: RSPServer): Promise<void>;
    deregisterRSPProvider(id: string): Promise<void>;
}