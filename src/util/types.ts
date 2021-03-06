import { RSPModel } from '../api/rspModel';

export interface ServerInfo {
    host: string;
    port: number;
    spawned?: boolean;
}

export interface RSPType {
    id: string;
    visibilename: string;
}

export interface RSPServer {
    type: RSPType;
    state: number;
}

/**
 * The result of unsuccessfully requesting the API from the Server Connector extension.
 */
export interface APIUnavailable {
    /**
     * Contains the boolean value false, indicating that the requested API was unavailable.
     */
    readonly available: false;
    /**
     * The reason the API was unavailable.
     * 'extension-not-available': Visual Studio Code could not activate the Server Connector extension,
     *   for example because it was not installed. Your extension should declare the Server Connector
     *   extension as a dependency; you can also prompt the user to install the Server Connector extension.
     */
    readonly reason: 'extension-not-available';  // extension does not appear to be installed

}

/**
 * The result of successfully requesting the API from the Server Connector extension.
 */
export interface APIAvailable {
    /**
     * Contains the boolean value true, indicating that the requested API was available.
     */
    readonly available: true;
    /**
     * The API interface from the Server Connector extension.
     */
    readonly api: RSPModel;
}

/**
 * The result of requesting the API from the Server Connector extension - either the API object,
 * or an indication of why the API is not available. Use the 'available' property to
 * distinguish the two cases.
 */
export type API = APIAvailable | APIUnavailable;