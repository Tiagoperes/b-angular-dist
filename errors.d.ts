export declare class BeagleError extends Error {
    name: string;
    constructor(message: string);
}
export declare class BeagleMetadataError extends BeagleError {
    name: string;
}
