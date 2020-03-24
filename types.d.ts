import { Type } from '@angular/core';
import { BeagleConfig, BeagleUIService, DefaultSchema, LoadParams, IdentifiableBeagleUIElement, BeagleView } from 'beagle-web';
import { UpdateWithTreeParams } from 'beagle-web/dist/types';
export interface BeagleAngularConfig<Schema> extends BeagleConfig<Schema> {
    components: {
        error: Type<{}>;
        loading: Type<{}>;
    } & {
        [K in keyof Schema]: Type<Schema[K]>;
    };
    module: {
        path: string;
        name: string;
    };
}
export interface BeagleAngularUIService<Schema = DefaultSchema> extends BeagleUIService<Schema> {
    getConfig: () => BeagleAngularConfig<Schema>;
}
export interface BeagleContext<T = any> {
    replace: (params: LoadParams<T>) => Promise<void>;
    append: (params: LoadParams<T>) => Promise<void>;
    prepend: (params: LoadParams<T>) => Promise<void>;
    updateWithTree: (params: Omit<UpdateWithTreeParams<T>, 'elementId'>) => void;
    getElementId: () => string;
    getElement: () => IdentifiableBeagleUIElement<T> | null;
    getView: () => BeagleView<T>;
}
