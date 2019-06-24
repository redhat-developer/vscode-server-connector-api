interface ServerType {
	id: string;
	visibleName: string;
	description: string;
}

interface ServerHandle {
	id: string;
	type: ServerType;
}

interface DeployableReference {
	label: string;
	path: string;
	options?: {
		[index: string]: any;
	};
}

export interface DeployableStateNode {
    rsp: string;
    server: ServerHandle;
    reference: DeployableReference;
    state: number;
    publishState: number;
}

export interface ServerStateNode {
    rsp: string;
    server: ServerHandle;
    state: number;
    publishState: number;
    runMode: string;
    deployableStates: DeployableStateNode[];
}

export interface RSPType {
    id: string;
    visibilename: string;
}

export interface RSPState {
    type: RSPType;
    state: number;
    serverStates: ServerStateNode[];
}

export interface ServerInfo {
    host: string;
    port: number;
}