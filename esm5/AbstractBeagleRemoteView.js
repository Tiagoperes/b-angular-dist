import { __awaiter, __generator } from "tslib";
import { registerView, unregisterView } from './beagle-context/context';
import { createStaticPromise } from './utils/promise';
import { BeagleError } from './errors';
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
            throw new BeagleError('you need to start the beagle provider before using a remote view.');
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
            throw new BeagleError("Beagle: \"beagleProvider\", \"ngZone\" and \"changeDetector\" must be set before the AfterViewInit runs. Use the constructor or the component instance to set their values.");
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
export { AbstractBeagleRemoteView };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWJzdHJhY3RCZWFnbGVSZW1vdGVWaWV3LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYmVhZ2xlLWFuZ3VsYXIvIiwic291cmNlcyI6WyJBYnN0cmFjdEJlYWdsZVJlbW90ZVZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQVdBLE9BQU8sRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUE7QUFDdkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0saUJBQWlCLENBQUE7QUFDckQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFVBQVUsQ0FBQTtBQUV0QyxJQUFJLFVBQVUsR0FBRyxDQUFDLENBQUE7QUFFbEI7SUFVRSxrQ0FDRSxjQUF1QyxFQUN2QyxNQUFlLEVBQ2YsY0FBa0M7UUFIcEMsaUJBUUM7UUFqQkQsZUFBVSxHQUFlLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFBO1FBR3JDLFdBQU0sR0FBRyxLQUFHLFVBQVUsRUFBSSxDQUFBO1FBSTFCLHNCQUFpQixHQUFHLG1CQUFtQixFQUFjLENBQUE7UUFtQ3JELGVBQVUsR0FBRyxVQUFDLE1BQXdDO1lBQ3BELEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO2dCQUNkLEtBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFBO2dCQUNsQixLQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsRUFBRSxDQUFBO1lBQ3JDLENBQUMsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUFBO1FBakNDLElBQUksY0FBYztZQUFFLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFBO1FBQ3hELElBQUksTUFBTTtZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFBO1FBQ2hDLElBQUksY0FBYztZQUFFLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFBO0lBQzFELENBQUM7SUFFRCxtREFBZ0IsR0FBaEI7UUFDRSxJQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGtCQUFrQixFQUFFLENBQUE7UUFDOUQsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNsQixNQUFNLElBQUksV0FBVyxDQUFDLG1FQUFtRSxDQUFDLENBQUE7U0FDM0Y7UUFDRCxJQUFJLENBQUMsSUFBSSxHQUFHLGFBQWEsQ0FBQyxVQUFVLEVBQUUsQ0FBQTtRQUN0QyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFDLGFBQWE7WUFDdkMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQUs7Z0JBQzFCLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDdEIsQ0FBQyxDQUFDLENBQUE7UUFDSixDQUFDLENBQUMsQ0FBQTtRQUNGLFlBQVksQ0FBQyxLQUFHLElBQUksQ0FBQyxNQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3pDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQzNDLENBQUM7SUFFRCw4Q0FBVyxHQUFYLFVBQVksYUFBdUQ7UUFDakUsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRTtZQUN4QixPQUFPLENBQUMsSUFBSSxDQUFDLDJCQUF5QixhQUFhLGlEQUE4QyxDQUFDLENBQUE7U0FDbkc7UUFDRCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQTtJQUM1QixDQUFDO0lBU0Qsa0RBQWUsR0FBZixVQUFnQixLQUFhLEVBQUUsT0FBeUM7UUFDdEUsT0FBTyxPQUFPLENBQUMsRUFBRSxDQUFBO0lBQ25CLENBQUM7SUFFRCwwQ0FBTyxHQUFQO1FBQ0UsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFBO0lBQ3ZDLENBQUM7SUFFRCxrREFBZSxHQUFmO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUNoRSxNQUFNLElBQUksV0FBVyxDQUFDLDZLQUF1SyxDQUFDLENBQUE7U0FDL0w7UUFDRCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQTtRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDNUMsQ0FBQztJQUVLLDhDQUFXLEdBQWpCLFVBQWtCLE9BQXNCOzs7Z0JBQ3RDLElBQUksT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUU7b0JBQ2pDLElBQ0UsT0FBTyxDQUFDLFVBQVUsQ0FBQyxhQUFhOzJCQUM3QixPQUFPLENBQUMsVUFBVSxDQUFDLGFBQWEsS0FBSyxPQUFPLENBQUMsVUFBVSxDQUFDLFlBQVksRUFDdkU7d0JBQ0EsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO3FCQUMzQztpQkFDRjs7OztLQUNGO0lBRUQsOENBQVcsR0FBWDtRQUNFLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDN0IsQ0FBQztJQUNILCtCQUFDO0FBQUQsQ0FBQyxBQWhGRCxJQWdGQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIE9uRGVzdHJveSxcbiAgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgTmdab25lLFxuICBUZW1wbGF0ZVJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7IEFic3RyYWN0QmVhZ2xlUHJvdmlkZXIgfSBmcm9tICcuL0Fic3RyYWN0QmVhZ2xlUHJvdmlkZXInXG5pbXBvcnQgeyBMb2FkUGFyYW1zLCBCZWFnbGVWaWV3LCBJZGVudGlmaWFibGVCZWFnbGVVSUVsZW1lbnQgfSBmcm9tICdiZWFnbGUtd2ViJ1xuaW1wb3J0IHsgcmVnaXN0ZXJWaWV3LCB1bnJlZ2lzdGVyVmlldyB9IGZyb20gJy4vYmVhZ2xlLWNvbnRleHQvY29udGV4dCdcbmltcG9ydCB7IGNyZWF0ZVN0YXRpY1Byb21pc2UgfSBmcm9tICcuL3V0aWxzL3Byb21pc2UnXG5pbXBvcnQgeyBCZWFnbGVFcnJvciB9IGZyb20gJy4vZXJyb3JzJ1xuXG5sZXQgbmV4dFZpZXdJZCA9IDFcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0QmVhZ2xlUmVtb3RlVmlldyBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcbiAgbG9hZFBhcmFtczogTG9hZFBhcmFtcyA9IHsgcGF0aDogJycgfVxuICB0cmVlOiBJZGVudGlmaWFibGVCZWFnbGVVSUVsZW1lbnQ8YW55PlxuICB2aWV3OiBCZWFnbGVWaWV3XG4gIHZpZXdJZCA9IGAke25leHRWaWV3SWQrK31gXG4gIGJlYWdsZVByb3ZpZGVyOiBBYnN0cmFjdEJlYWdsZVByb3ZpZGVyXG4gIG5nWm9uZTogTmdab25lXG4gIGNoYW5nZURldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZlxuICB2aWV3U3RhdGljUHJvbWlzZSA9IGNyZWF0ZVN0YXRpY1Byb21pc2U8QmVhZ2xlVmlldz4oKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGJlYWdsZVByb3ZpZGVyPzogQWJzdHJhY3RCZWFnbGVQcm92aWRlcixcbiAgICBuZ1pvbmU/OiBOZ1pvbmUsXG4gICAgY2hhbmdlRGV0ZWN0b3I/OiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgKSB7XG4gICAgaWYgKGJlYWdsZVByb3ZpZGVyKSB0aGlzLmJlYWdsZVByb3ZpZGVyID0gYmVhZ2xlUHJvdmlkZXJcbiAgICBpZiAobmdab25lKSB0aGlzLm5nWm9uZSA9IG5nWm9uZVxuICAgIGlmIChjaGFuZ2VEZXRlY3RvcikgdGhpcy5jaGFuZ2VEZXRlY3RvciA9IGNoYW5nZURldGVjdG9yXG4gIH1cblxuICBjcmVhdGVCZWFnbGVWaWV3KCkge1xuICAgIGNvbnN0IGJlYWdsZVNlcnZpY2UgPSB0aGlzLmJlYWdsZVByb3ZpZGVyLmdldEJlYWdsZVVJU2VydmljZSgpXG4gICAgaWYgKCFiZWFnbGVTZXJ2aWNlKSB7XG4gICAgICB0aHJvdyBuZXcgQmVhZ2xlRXJyb3IoJ3lvdSBuZWVkIHRvIHN0YXJ0IHRoZSBiZWFnbGUgcHJvdmlkZXIgYmVmb3JlIHVzaW5nIGEgcmVtb3RlIHZpZXcuJylcbiAgICB9XG4gICAgdGhpcy52aWV3ID0gYmVhZ2xlU2VydmljZS5jcmVhdGVWaWV3KClcbiAgICB0aGlzLnZpZXcuc3Vic2NyaWJlKHRoaXMudXBkYXRlVmlldylcbiAgICB0aGlzLnZpZXcuYWRkRXJyb3JMaXN0ZW5lcigoZXJyb3JMaXN0ZW5lcikgPT4ge1xuICAgICAgZXJyb3JMaXN0ZW5lci5mb3JFYWNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgICAgfSlcbiAgICB9KVxuICAgIHJlZ2lzdGVyVmlldyhgJHt0aGlzLnZpZXdJZH1gLCB0aGlzLnZpZXcpXG4gICAgdGhpcy52aWV3U3RhdGljUHJvbWlzZS5yZXNvbHZlKHRoaXMudmlldylcbiAgfVxuXG4gIGdldFRlbXBsYXRlKGNvbXBvbmVudE5hbWU6IElkZW50aWZpYWJsZUJlYWdsZVVJRWxlbWVudDxhbnk+Wyd0eXBlJ10pOiBUZW1wbGF0ZVJlZjxhbnk+IHtcbiAgICBpZiAoIXRoaXNbY29tcG9uZW50TmFtZV0pIHtcbiAgICAgIGNvbnNvbGUud2FybihgQmVhZ2xlOiB0aGUgY29tcG9uZW50ICR7Y29tcG9uZW50TmFtZX0gd2FzIG5vdCBkZWNsYXJlZCBpbiBCZWFnbGUncyBjb25maWd1cmF0aW9uLmApXG4gICAgfVxuICAgIHJldHVybiB0aGlzW2NvbXBvbmVudE5hbWVdXG4gIH1cblxuICB1cGRhdGVWaWV3ID0gKHVpVHJlZTogSWRlbnRpZmlhYmxlQmVhZ2xlVUlFbGVtZW50PGFueT4pID0+IHtcbiAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgdGhpcy50cmVlID0gdWlUcmVlXG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yLmRldGVjdENoYW5nZXMoKVxuICAgIH0pXG4gIH1cblxuICBlbGVtZW50SWRlbnRpdHkoaW5kZXg6IG51bWJlciwgZWxlbWVudDogSWRlbnRpZmlhYmxlQmVhZ2xlVUlFbGVtZW50PGFueT4pIHtcbiAgICByZXR1cm4gZWxlbWVudC5pZFxuICB9XG5cbiAgZ2V0VmlldygpIHtcbiAgICByZXR1cm4gdGhpcy52aWV3U3RhdGljUHJvbWlzZS5wcm9taXNlXG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgaWYgKCF0aGlzLmJlYWdsZVByb3ZpZGVyIHx8ICF0aGlzLm5nWm9uZSB8fCAhdGhpcy5jaGFuZ2VEZXRlY3Rvcikge1xuICAgICAgdGhyb3cgbmV3IEJlYWdsZUVycm9yKGBCZWFnbGU6IFwiYmVhZ2xlUHJvdmlkZXJcIiwgXCJuZ1pvbmVcIiBhbmQgXCJjaGFuZ2VEZXRlY3RvclwiIG11c3QgYmUgc2V0IGJlZm9yZSB0aGUgQWZ0ZXJWaWV3SW5pdCBydW5zLiBVc2UgdGhlIGNvbnN0cnVjdG9yIG9yIHRoZSBjb21wb25lbnQgaW5zdGFuY2UgdG8gc2V0IHRoZWlyIHZhbHVlcy5gKVxuICAgIH1cbiAgICB0aGlzLmNyZWF0ZUJlYWdsZVZpZXcoKVxuICAgIHRoaXMudmlldy51cGRhdGVXaXRoRmV0Y2godGhpcy5sb2FkUGFyYW1zKVxuICB9XG5cbiAgYXN5bmMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VzICYmIGNoYW5nZXMubG9hZFBhcmFtcykge1xuICAgICAgaWYgKFxuICAgICAgICBjaGFuZ2VzLmxvYWRQYXJhbXMucHJldmlvdXNWYWx1ZVxuICAgICAgICAmJiBjaGFuZ2VzLmxvYWRQYXJhbXMucHJldmlvdXNWYWx1ZSAhPT0gY2hhbmdlcy5sb2FkUGFyYW1zLmN1cnJlbnRWYWx1ZVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMudmlldy51cGRhdGVXaXRoRmV0Y2godGhpcy5sb2FkUGFyYW1zKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHVucmVnaXN0ZXJWaWV3KHRoaXMudmlld0lkKVxuICB9XG59XG4iXX0=