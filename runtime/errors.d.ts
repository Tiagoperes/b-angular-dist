import BeagleError from '../errors';
export default class BeagleRuntimeError extends BeagleError {
    constructor(message: string);
}
