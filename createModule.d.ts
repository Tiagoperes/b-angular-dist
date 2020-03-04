import { BeagleAngularConfig } from './types';
import { DefaultSchema } from 'beagle-web';
declare function createBeagleModule<Schema = DefaultSchema>(config: BeagleAngularConfig<Schema>): void;
export default createBeagleModule;
