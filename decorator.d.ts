import { Type } from '@angular/core';
import { DefaultSchema } from '@zup-it/beagle-web';
import 'reflect-metadata';
import { BeagleAngularConfig } from './types';
export declare function BeagleModule<Schema = DefaultSchema>(config: BeagleAngularConfig<Schema>): (target: Type<any>) => void;
export declare function getBeagleConfigMetadata(beagleModuleClass: Type<any>): any;
