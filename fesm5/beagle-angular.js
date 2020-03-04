import { __awaiter, __generator, __decorate } from 'tslib';
import { findById } from 'beagle-web/dist/utils/tree-reading';
import { Injectable } from '@angular/core';
import createCoreBeagleUIService from 'beagle-web';

var hasAlreadyCreatedModule = false;
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

var viewIdAttributeName = '__beagle_view_id';
var selector = 'beagle-remote-view';

var views = {};
function createContext(view, elementId) {
    return {
        replace: function (params) { return (view.updateWithFetch(params, elementId, 'replace')); },
        append: function (params) { return (view.updateWithFetch(params, elementId, 'append')); },
        prepend: function (params) { return (view.updateWithFetch(params, elementId, 'prepend')); },
        getElementId: function () { return elementId; },
        getElement: function () { return findById(view.getTree(), elementId); },
        getView: function () { return view; }
    };
}
function getContextByViewIdAndElementId(viewId, elementId) {
    var view = views[viewId];
    if (!viewId)
        throw Error("Beagle: getContext couldn't find view with id " + viewId);
    return createContext(view, elementId);
}
function getContext(viewRef) {
    var viewId = viewRef.element.nativeElement.closest(selector).getAttribute(viewIdAttributeName);
    var elementId = viewRef.element.nativeElement.id;
    return getContextByViewIdAndElementId(viewId, elementId);
}
function registerView(viewId, view) {
    views[viewId] = view;
}
function unregisterView(viewId) {
    delete views[viewId];
}

var nextViewId = 1;
var BeagleRemoteView = /** @class */ (function () {
    function BeagleRemoteView(beagleProvider, ngZone, changeDetector) {
        var _this = this;
        this.loadParams = { path: '' };
        this.viewId = "" + nextViewId++;
        this.updateView = function (uiTree) {
            _this.ngZone.run(function () {
                _this.tree = uiTree;
                _this.changeDetector.detectChanges();
            });
        };
        this.ngZone = ngZone;
        this.changeDetector = changeDetector;
        var beagleService = beagleProvider.getBeagleUIService();
        if (!beagleService) {
            throw new Error('Beagle: you need to start the beagle provider before using a remote view.');
        }
        this.view = beagleService.createView();
        this.view.subscribe(this.updateView);
        registerView("" + this.viewId, this.view);
    }
    BeagleRemoteView.prototype.getTemplate = function (componentName) {
        return this[componentName];
    };
    BeagleRemoteView.prototype.ngAfterViewInit = function () {
        this.view.updateWithFetch(this.loadParams);
    };
    BeagleRemoteView.prototype.ngOnChanges = function (changes) {
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
    BeagleRemoteView.prototype.ngOnDestroy = function () {
        unregisterView(this.viewId);
    };
    return BeagleRemoteView;
}());

var BeagleProvider = /** @class */ (function () {
    function BeagleProvider() {
    }
    BeagleProvider.prototype.start = function (config) {
        if (this.service) {
            console.error('Beagle service has already started!');
            return;
        }
        // @ts-ignore // fixme
        this.service = createCoreBeagleUIService(config);
    };
    BeagleProvider.prototype.getBeagleUIService = function () {
        return this.service;
    };
    BeagleProvider = __decorate([
        Injectable()
    ], BeagleProvider);
    return BeagleProvider;
}());

var createBeagleModule$1 = createBeagleModule;

/**
 * Generated bundle index. Do not edit.
 */

export { BeagleProvider, BeagleRemoteView, createBeagleModule$1 as createBeagleModule };
//# sourceMappingURL=beagle-angular.js.map
