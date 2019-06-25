export interface RSPType {
    id: string;
    visibilename: string;
}
export interface RSPServer {
    type: RSPType;
    state: number;
}
export interface ServerInfo {
    host: string;
    port: number;
}
