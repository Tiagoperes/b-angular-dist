import { Type, ModuleWithProviders } from '@angular/core';
import { BeagleConfig, BeagleUIService, DefaultSchema, LoadParams, BeagleUIElement, BeagleView } from 'beagle-web';
export interface BeagleAngularConfig<Schema> extends BeagleConfig<Schema> {
    components: {
        error: Type<{}>;
        loading: Type<{}>;
    } & {
        [K in keyof Schema]: Type<Schema[K]>;
    };
    module?: Type<any> | ModuleWithProviders<{}> | any[];
}
export interface BeagleAngularUIService<Schema = DefaultSchema> extends BeagleUIService<Schema> {
    getConfig: () => BeagleAngularConfig<Schema>;
}
export interface BeagleContext {
    replace: (params: LoadParams) => Promise<void>;
    append: (params: LoadParams) => Promise<void>;
    prepend: (params: LoadParams) => Promise<void>;
    getElementId: () => string;
    getElement: () => BeagleUIElement<any> | null;
    getView: () => BeagleView;
}
