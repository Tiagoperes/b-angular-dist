export interface StaticPromise<T> {
    resolve: (value: any) => void;
    reject: (error: any) => void;
    promise: Promise<T>;
}
export declare function createStaticPromise<T = any>(): StaticPromise<T>;
