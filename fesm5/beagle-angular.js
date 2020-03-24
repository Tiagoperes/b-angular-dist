import { __assign, __extends, __awaiter, __generator, __decorate } from 'tslib';
import { findById } from 'beagle-web/dist/utils/tree-reading';
import createCoreBeagleUIService from 'beagle-web';
import { ViewContainerRef, ElementRef, Input, Directive, NgModule } from '@angular/core';
import 'reflect-metadata';

var views = {};
function createContext(view, elementId) {
    return {
        replace: function (params) { return view.updateWithFetch(params, elementId, 'replace'); },
        append: function (params) { return view.updateWithFetch(params, elementId, 'append'); },
        prepend: function (params) { return view.updateWithFetch(params, elementId, 'prepend'); },
        updateWithTree: function (params) { return view.updateWithTree(__assign(__assign({}, params), { elementId: elementId })); },
        getElementId: function () { return elementId; },
        getElement: function () { return findById(view.getTree(), elementId); },
        getView: function () { return view; }
    };
}
function getContext(viewId, elementId) {
    if (!viewId || !elementId)
        throw Error('Beagle: getContext couldn\'t find viewId or elementId');
    var view = views[viewId];
    if (!view)
        throw Error("Beagle: getContext couldn't find view with id " + viewId);
    return createContext(view, elementId);
}
function registerView(viewId, view) {
    views[viewId] = view;
}
function unregisterView(viewId) {
    delete views[viewId];
}

function createStaticPromise() {
    var staticPromise = {};
    staticPromise.promise = new Promise(function (resolve, reject) {
        staticPromise.resolve = resolve;
        staticPromise.reject = reject;
    });
    return staticPromise;
}

var BeagleError = /** @class */ (function (_super) {
    __extends(BeagleError, _super);
    function BeagleError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = _this.constructor.name;
        return _this;
    }
    return BeagleError;
}(Error));

var BeagleRuntimeError = /** @class */ (function (_super) {
    __extends(BeagleRuntimeError, _super);
    function BeagleRuntimeError(message) {
        return _super.call(this, "Beagle runtime error: " + message) || this;
    }
    return BeagleRuntimeError;
}(BeagleError));

var nextViewId = 1;
var AbstractBeagleRemoteView = /** @class */ (function () {
    function AbstractBeagleRemoteView(beagleProvider, ngZone, changeDetector) {
        var _this = this;
        this.loadParams = { path: '' };
        this.viewId = "" + nextViewId++;
        this.viewStaticPromise = createStaticPromise();
        this.updateView = function (uiTree) {
            _this.ngZone.run(function () {
                _this.tree = uiTree;
                _this.changeDetector.detectChanges();
            });
        };
        if (beagleProvider)
            this.beagleProvider = beagleProvider;
        if (ngZone)
            this.ngZone = ngZone;
        if (changeDetector)
            this.changeDetector = changeDetector;
    }
    AbstractBeagleRemoteView.prototype.createBeagleView = function () {
        var beagleService = this.beagleProvider.getBeagleUIService();
        if (!beagleService) {
            throw new BeagleRuntimeError('you need to start the beagle provider before using a remote view.');
        }
        this.view = beagleService.createView();
        this.view.subscribe(this.updateView);
        this.view.addErrorListener(function (errorListener) {
            errorListener.forEach(function (error) {
                console.error(error);
            });
        });
        registerView("" + this.viewId, this.view);
        this.viewStaticPromise.resolve(this.view);
    };
    AbstractBeagleRemoteView.prototype.getTemplate = function (componentName) {
        if (!this[componentName]) {
            console.warn("Beagle: the component " + componentName + " was not declared in Beagle's configuration.");
        }
        return this[componentName];
    };
    AbstractBeagleRemoteView.prototype.elementIdentity = function (index, element) {
        return element.id;
    };
    AbstractBeagleRemoteView.prototype.getView = function () {
        return this.viewStaticPromise.promise;
    };
    AbstractBeagleRemoteView.prototype.ngAfterViewInit = function () {
        if (!this.beagleProvider || !this.ngZone || !this.changeDetector) {
            throw new BeagleRuntimeError("\"beagleProvider\", \"ngZone\" and \"changeDetector\" must be set before the AfterViewInit runs. Use the constructor or the component instance to set their values.");
        }
        this.createBeagleView();
        this.view.updateWithFetch(this.loadParams);
    };
    AbstractBeagleRemoteView.prototype.ngOnChanges = function (changes) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (changes && changes.loadParams) {
                    if (changes.loadParams.previousValue
                        && changes.loadParams.previousValue !== changes.loadParams.currentValue) {
                        this.view.updateWithFetch(this.loadParams);
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    AbstractBeagleRemoteView.prototype.ngOnDestroy = function () {
        unregisterView(this.viewId);
    };
    return AbstractBeagleRemoteView;
}());

var AbstractBeagleProvider = /** @class */ (function () {
    function AbstractBeagleProvider() {
    }
    AbstractBeagleProvider.prototype.start = function (baseUrl) {
        if (this.service) {
            console.error('Beagle service has already started!');
            return;
        }
        // @ts-ignore // fixme
        this.service = createCoreBeagleUIService({ baseUrl: baseUrl });
    };
    AbstractBeagleProvider.prototype.getBeagleUIService = function () {
        return this.service;
    };
    return AbstractBeagleProvider;
}());

var viewIdAttributeName = '__beagle_view_id';
var remoteViewSelector = 'beagle-remote-view';
var contextSelector = 'beagle-context';

var BeagleComponent = /** @class */ (function () {
    function BeagleComponent() {
    }
    return BeagleComponent;
}());

var BeagleContextDirective = /** @class */ (function () {
    function BeagleContextDirective(viewContainerRef, elementRef) {
        this.viewContainerRef = viewContainerRef;
        this.elementRef = elementRef;
    }
    BeagleContextDirective.prototype.ngOnInit = function () {
        var _this = this;
        var _a, _b;
        var component;
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
            component.getBeagleContext = function () { return getContext(_this._viewId, _this._elementId); };
        }
    };
    BeagleContextDirective.ctorParameters = function () { return [
        { type: ViewContainerRef },
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], BeagleContextDirective.prototype, "_elementId", void 0);
    __decorate([
        Input()
    ], BeagleContextDirective.prototype, "_viewId", void 0);
    BeagleContextDirective = __decorate([
        Directive({
            selector: "[" + contextSelector + "]",
        })
    ], BeagleContextDirective);
    return BeagleContextDirective;
}());

var BeagleContextModule = /** @class */ (function () {
    function BeagleContextModule() {
    }
    BeagleContextModule = __decorate([
        NgModule({
            declarations: [BeagleContextDirective],
            exports: [BeagleContextDirective],
        })
    ], BeagleContextModule);
    return BeagleContextModule;
}());

function BeagleModule(config) {
    return function (target) {
        Reflect.defineMetadata('beagleConfig', config, target);
    };
}

/**
 * Generated bundle index. Do not edit.
 */

export { AbstractBeagleProvider, AbstractBeagleRemoteView, BeagleComponent, BeagleContextModule, BeagleModule, BeagleContextDirective as ɵa, contextSelector as ɵb };
//# sourceMappingURL=beagle-angular.js.map
