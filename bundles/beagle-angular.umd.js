(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@zup-it/beagle-web/dist/utils/tree-reading'), require('@zup-it/beagle-web'), require('@angular/core'), require('reflect-metadata')) :
    typeof define === 'function' && define.amd ? define('beagle-angular', ['exports', '@zup-it/beagle-web/dist/utils/tree-reading', '@zup-it/beagle-web', '@angular/core', 'reflect-metadata'], factory) :
    (global = global || self, factory(global['beagle-angular'] = {}, global.treeReading, global.createCoreBeagleUIService, global.ng.core));
}(this, (function (exports, treeReading, createCoreBeagleUIService, core) { 'use strict';

    createCoreBeagleUIService = createCoreBeagleUIService && createCoreBeagleUIService.hasOwnProperty('default') ? createCoreBeagleUIService['default'] : createCoreBeagleUIService;

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    var views = {};
    function createContext(view, elementId) {
        return {
            replace: function (params) { return view.updateWithFetch(params, elementId, 'replace'); },
            append: function (params) { return view.updateWithFetch(params, elementId, 'append'); },
            prepend: function (params) { return view.updateWithFetch(params, elementId, 'prepend'); },
            updateWithTree: function (params) { return view.updateWithTree(__assign(__assign({}, params), { elementId: elementId })); },
            getElementId: function () { return elementId; },
            getElement: function () { return treeReading.findById(view.getTree(), elementId); },
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
                throw new BeagleRuntimeError('"beagleProvider", "ngZone" and "changeDetector" must be set before the AfterViewInit runs. Use the constructor or the component instance to set their values.');
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
        AbstractBeagleProvider.prototype.start = function (config) {
            if (this.service) {
                console.error('Beagle service has already started!');
                return;
            }
            // @ts-ignore // fixme
            this.service = createCoreBeagleUIService(config);
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
            { type: core.ViewContainerRef },
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], BeagleContextDirective.prototype, "_elementId", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], BeagleContextDirective.prototype, "_viewId", void 0);
        BeagleContextDirective = __decorate([
            core.Directive({
                selector: "[" + contextSelector + "]",
            }),
            __metadata("design:paramtypes", [core.ViewContainerRef, core.ElementRef])
        ], BeagleContextDirective);
        return BeagleContextDirective;
    }());

    var BeagleContextModule = /** @class */ (function () {
        function BeagleContextModule() {
        }
        BeagleContextModule = __decorate([
            core.NgModule({
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
    function getBeagleConfigMetadata(beagleModuleClass) {
        return Reflect.getMetadata('beagleConfig', beagleModuleClass);
    }

    exports.AbstractBeagleProvider = AbstractBeagleProvider;
    exports.AbstractBeagleRemoteView = AbstractBeagleRemoteView;
    exports.BeagleComponent = BeagleComponent;
    exports.BeagleContextModule = BeagleContextModule;
    exports.BeagleModule = BeagleModule;
    exports.getBeagleConfigMetadata = getBeagleConfigMetadata;
    exports.ɵa = BeagleContextDirective;
    exports.ɵb = contextSelector;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=beagle-angular.umd.js.map
