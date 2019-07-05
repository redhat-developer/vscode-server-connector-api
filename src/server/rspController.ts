import { ServerInfo } from '../util/types';
import { Uri } from 'vscode';

export interface RSPController {
    startRSP(stdoutCallback: (data: string) => void, stderrCallback: (data: string) => void ): Promise<ServerInfo>;
    stopRSP(): Promise<void>;
    getImage(serverType: string): Uri;
    getHost(): string;
    getPort(): number;
}