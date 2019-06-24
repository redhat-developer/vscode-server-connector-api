export interface RSPProviderAPI {
    registerRSPProvider(id: string, visibleName: string): void;
    deregisterRSPProvider(id: string): void;
}
