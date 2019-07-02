export interface ServerInfo {
    host: string;
    port: number;
}

export interface RSPType {
    id: string;
    visibilename: string;
}

export interface RSPServer {
    type: RSPType;
    state: number;
}