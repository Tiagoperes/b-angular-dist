import { BeagleView } from 'beagle-web';
import { ViewContainerRef } from '@angular/core';
import { BeagleContext } from './types';
export declare function getContext(viewRef: ViewContainerRef): BeagleContext;
export declare function registerView(viewId: any, view: BeagleView): void;
export declare function unregisterView(viewId: any): void;
