import { __awaiter, __decorate } from 'tslib';
import { findById } from 'beagle-web/dist/utils/tree-reading';
import { Injectable } from '@angular/core';
import createCoreBeagleUIService from 'beagle-web';

let hasAlreadyCreatedModule = false;
function createBeagleModule(config) {
    // if (hasAlreadyCreatedModule) throw new Error('Beagle: beagle module has already been created!')
    // const beagleService = createCoreBeagleUIService<Schema>(config)
    // // @ts-ignore
    // const beagleComponent = createBeagleComponent(config.components, beagleService)
    // return NgModule({
    //   declarations: [beagleComponent],
    //   exports: [beagleComponent],
    //   imports: [config.module, CommonModule],
    // })(class BeagleModule {})
}

const viewIdAttributeName = '__beagle_view_id';
const selector = 'beagle-remote-view';

const views = {};
function createContext(view, elementId) {
    return {
        replace: (params) => (view.updateWithFetch(params, elementId, 'replace')),
        append: (params) => (view.updateWithFetch(params, elementId, 'append')),
        prepend: (params) => (view.updateWithFetch(params, elementId, 'prepend')),
        getElementId: () => elementId,
        getElement: () => findById(view.getTree(), elementId),
        getView: () => view
    };
}
function getContextByViewIdAndElementId(viewId, elementId) {
    const view = views[viewId];
    if (!viewId)
        throw Error(`Beagle: getContext couldn\'t find view with id ${viewId}`);
    return createContext(view, elementId);
}
function getContext(viewRef) {
    const viewId = viewRef.element.nativeElement.closest(selector).getAttribute(viewIdAttributeName);
    const elementId = viewRef.element.nativeElement.id;
    return getContextByViewIdAndElementId(viewId, elementId);
}
function registerView(viewId, view) {
    views[viewId] = view;
}
function unregisterView(viewId) {
    delete views[viewId];
}

let nextViewId = 1;
class BeagleRemoteView {
    constructor(beagleProvider, ngZone, changeDetector) {
        this.loadParams = { path: '' };
        this.viewId = `${nextViewId++}`;
        this.updateView = (uiTree) => {
            this.ngZone.run(() => {
                this.tree = uiTree;
                this.changeDetector.detectChanges();
            });
        };
        this.ngZone = ngZone;
        this.changeDetector = changeDetector;
        const beagleService = beagleProvider.getBeagleUIService();
        if (!beagleService) {
            throw new Error('Beagle: you need to start the beagle provider before using a remote view.');
        }
        this.view = beagleService.createView();
        this.view.subscribe(this.updateView);
        registerView(`${this.viewId}`, this.view);
    }
    getTemplate(componentName) {
        return this[componentName];
    }
    ngAfterViewInit() {
        this.view.updateWithFetch(this.loadParams);
    }
    ngOnChanges(changes) {
        return __awaiter(this, void 0, void 0, function* () {
            if (changes && changes.loadParams) {
                if (changes.loadParams.previousValue
                    && changes.loadParams.previousValue !== changes.loadParams.currentValue) {
                    this.view.updateWithFetch(this.loadParams);
                }
            }
        });
    }
    ngOnDestroy() {
        unregisterView(this.viewId);
    }
}

let BeagleProvider = class BeagleProvider {
    start(config) {
        if (this.service) {
            console.error('Beagle service has already started!');
            return;
        }
        // @ts-ignore // fixme
        this.service = createCoreBeagleUIService(config);
    }
    getBeagleUIService() {
        return this.service;
    }
};
BeagleProvider = __decorate([
    Injectable()
], BeagleProvider);

const createBeagleModule$1 = createBeagleModule;

/**
 * Generated bundle index. Do not edit.
 */

export { BeagleProvider, BeagleRemoteView, createBeagleModule$1 as createBeagleModule };
//# sourceMappingURL=beagle-angular.js.map
