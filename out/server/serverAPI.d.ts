import { ServerInfo } from "../util/types";
export interface ServerAPI {
    startRSP(stdoutCallback: (data: string) => void, stderrCallback: (data: string) => void): Promise<ServerInfo>;
    stopRSP(): Promise<void>;
    getHost(): string;
    getPort(): number;
}
