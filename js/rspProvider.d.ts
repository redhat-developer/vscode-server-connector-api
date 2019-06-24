export interface RSPProvider {
    registerRSPProvider(id: string, visibleName: string): void;
    removeRSPProvider(id: string): void;
}
