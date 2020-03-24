import { BeagleView } from 'beagle-web';
import { BeagleContext } from '../../types';
export declare function getContext(viewId: string, elementId: string): BeagleContext<Record<string, Record<string, any>>>;
export declare function registerView(viewId: any, view: BeagleView): void;
export declare function unregisterView(viewId: any): void;
