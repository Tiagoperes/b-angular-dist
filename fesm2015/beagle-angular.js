import { __awaiter, __decorate, __metadata } from 'tslib';
import { findById } from 'beagle-web/dist/utils/tree-reading';
import createCoreBeagleUIService from 'beagle-web';
import { ViewContainerRef, ElementRef, Input, Directive, NgModule } from '@angular/core';
import 'reflect-metadata';

const views = {};
function createContext(view, elementId) {
    return {
        replace: params => view.updateWithFetch(params, elementId, 'replace'),
        append: params => view.updateWithFetch(params, elementId, 'append'),
        prepend: params => view.updateWithFetch(params, elementId, 'prepend'),
        updateWithTree: params => view.updateWithTree(Object.assign(Object.assign({}, params), { elementId })),
        getElementId: () => elementId,
        getElement: () => findById(view.getTree(), elementId),
        getView: () => view
    };
}
function getContext(viewId, elementId) {
    if (!viewId || !elementId)
        throw Error('Beagle: getContext couldn\'t find viewId or elementId');
    const view = views[viewId];
    if (!view)
        throw Error(`Beagle: getContext couldn\'t find view with id ${viewId}`);
    return createContext(view, elementId);
}
function registerView(viewId, view) {
    views[viewId] = view;
}
function unregisterView(viewId) {
    delete views[viewId];
}

function createStaticPromise() {
    const staticPromise = {};
    staticPromise.promise = new Promise((resolve, reject) => {
        staticPromise.resolve = resolve;
        staticPromise.reject = reject;
    });
    return staticPromise;
}

class BeagleError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}

class BeagleRuntimeError extends BeagleError {
    constructor(message) {
        super(`Beagle runtime error: ${message}`);
    }
}

let nextViewId = 1;
class AbstractBeagleRemoteView {
    constructor(beagleProvider, ngZone, changeDetector) {
        this.loadParams = { path: '' };
        this.viewId = `${nextViewId++}`;
        this.viewStaticPromise = createStaticPromise();
        this.updateView = (uiTree) => {
            this.ngZone.run(() => {
                this.tree = uiTree;
                this.changeDetector.detectChanges();
            });
        };
        if (beagleProvider)
            this.beagleProvider = beagleProvider;
        if (ngZone)
            this.ngZone = ngZone;
        if (changeDetector)
            this.changeDetector = changeDetector;
    }
    createBeagleView() {
        const beagleService = this.beagleProvider.getBeagleUIService();
        if (!beagleService) {
            throw new BeagleRuntimeError('you need to start the beagle provider before using a remote view.');
        }
        this.view = beagleService.createView();
        this.view.subscribe(this.updateView);
        this.view.addErrorListener((errorListener) => {
            errorListener.forEach((error) => {
                console.error(error);
            });
        });
        registerView(`${this.viewId}`, this.view);
        this.viewStaticPromise.resolve(this.view);
    }
    getTemplate(componentName) {
        if (!this[componentName]) {
            console.warn(`Beagle: the component ${componentName} was not declared in Beagle's configuration.`);
        }
        return this[componentName];
    }
    elementIdentity(index, element) {
        return element.id;
    }
    getView() {
        return this.viewStaticPromise.promise;
    }
    ngAfterViewInit() {
        if (!this.beagleProvider || !this.ngZone || !this.changeDetector) {
            throw new BeagleRuntimeError(`"beagleProvider", "ngZone" and "changeDetector" must be set before the AfterViewInit runs. Use the constructor or the component instance to set their values.`);
        }
        this.createBeagleView();
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

class AbstractBeagleProvider {
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
}

const viewIdAttributeName = '__beagle_view_id';
const remoteViewSelector = 'beagle-remote-view';
const contextSelector = 'beagle-context';

class BeagleComponent {
}

let BeagleContextDirective = class BeagleContextDirective {
    constructor(viewContainerRef, elementRef) {
        this.viewContainerRef = viewContainerRef;
        this.elementRef = elementRef;
    }
    ngOnInit() {
        var _a, _b;
        let component;
        // @ts-ignore
        if (ng && typeof (ng.getComponent) === 'function') {
            //IVY provides ng.getComponent function whereas other versions don't
            // @ts-ignore
            component = ng.getComponent(this.elementRef.nativeElement);
        }
        else {
            // @ts-ignore
            component = (_b = (_a = this.viewContainerRef._data) === null || _a === void 0 ? void 0 : _a.componentView) === null || _b === void 0 ? void 0 : _b.component;
        }
        if (component instanceof BeagleComponent) {
            component.getBeagleContext = () => getContext(this._viewId, this._elementId);
        }
    }
};
BeagleContextDirective.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: ElementRef }
];
__decorate([
    Input(),
    __metadata("design:type", String)
], BeagleContextDirective.prototype, "_elementId", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], BeagleContextDirective.prototype, "_viewId", void 0);
BeagleContextDirective = __decorate([
    Directive({
        selector: `[${contextSelector}]`,
    }),
    __metadata("design:paramtypes", [ViewContainerRef, ElementRef])
], BeagleContextDirective);

let BeagleContextModule = class BeagleContextModule {
};
BeagleContextModule = __decorate([
    NgModule({
        declarations: [BeagleContextDirective],
        exports: [BeagleContextDirective],
    })
], BeagleContextModule);

function BeagleModule(config) {
    return function (target) {
        Reflect.defineMetadata('beagleConfig', config, target);
    };
}
function getBeagleConfigMetadata(beagleModuleClass) {
    return Reflect.getMetadata('beagleConfig', beagleModuleClass);
}

/**
 * Generated bundle index. Do not edit.
 */

export { AbstractBeagleProvider, AbstractBeagleRemoteView, BeagleComponent, BeagleContextModule, BeagleModule, getBeagleConfigMetadata, BeagleContextDirective as ɵa, contextSelector as ɵb };
//# sourceMappingURL=beagle-angular.js.map
