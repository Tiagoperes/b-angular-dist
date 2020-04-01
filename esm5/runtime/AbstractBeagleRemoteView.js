import { __awaiter, __generator } from "tslib";
import { registerView, unregisterView } from './beagle-context/context';
import { createStaticPromise } from './utils/promise';
import BeagleRuntimeError from './errors';
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
export { AbstractBeagleRemoteView };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWJzdHJhY3RCZWFnbGVSZW1vdGVWaWV3LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYmVhZ2xlLWFuZ3VsYXIvIiwic291cmNlcyI6WyJydW50aW1lL0Fic3RyYWN0QmVhZ2xlUmVtb3RlVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBV0EsT0FBTyxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQTtBQUN2RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQTtBQUNyRCxPQUFPLGtCQUFrQixNQUFNLFVBQVUsQ0FBQTtBQUV6QyxJQUFJLFVBQVUsR0FBRyxDQUFDLENBQUE7QUFFbEI7SUFVRSxrQ0FDRSxjQUF1QyxFQUN2QyxNQUFlLEVBQ2YsY0FBa0M7UUFIcEMsaUJBUUM7UUFqQkQsZUFBVSxHQUFlLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFBO1FBR3JDLFdBQU0sR0FBRyxLQUFHLFVBQVUsRUFBSSxDQUFBO1FBSTFCLHNCQUFpQixHQUFHLG1CQUFtQixFQUFjLENBQUE7UUF1Q3JELGVBQVUsR0FBRyxVQUFDLE1BQXdDO1lBQ3BELEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO2dCQUNkLEtBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFBO2dCQUNsQixLQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsRUFBRSxDQUFBO1lBQ3JDLENBQUMsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUFBO1FBckNDLElBQUksY0FBYztZQUFFLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFBO1FBQ3hELElBQUksTUFBTTtZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFBO1FBQ2hDLElBQUksY0FBYztZQUFFLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFBO0lBQzFELENBQUM7SUFFRCxtREFBZ0IsR0FBaEI7UUFDRSxJQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGtCQUFrQixFQUFFLENBQUE7UUFDOUQsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNsQixNQUFNLElBQUksa0JBQWtCLENBQzFCLG1FQUFtRSxDQUNwRSxDQUFBO1NBQ0Y7UUFDRCxJQUFJLENBQUMsSUFBSSxHQUFHLGFBQWEsQ0FBQyxVQUFVLEVBQUUsQ0FBQTtRQUN0QyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFDLGFBQWE7WUFDdkMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQUs7Z0JBQzFCLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDdEIsQ0FBQyxDQUFDLENBQUE7UUFDSixDQUFDLENBQUMsQ0FBQTtRQUNGLFlBQVksQ0FBQyxLQUFHLElBQUksQ0FBQyxNQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3pDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQzNDLENBQUM7SUFFRCw4Q0FBVyxHQUFYLFVBQVksYUFBdUQ7UUFDakUsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRTtZQUN4QixPQUFPLENBQUMsSUFBSSxDQUNWLDJCQUF5QixhQUFhLGlEQUE4QyxDQUNyRixDQUFBO1NBQ0Y7UUFDRCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQTtJQUM1QixDQUFDO0lBU0Qsa0RBQWUsR0FBZixVQUFnQixLQUFhLEVBQUUsT0FBeUM7UUFDdEUsT0FBTyxPQUFPLENBQUMsRUFBRSxDQUFBO0lBQ25CLENBQUM7SUFFRCwwQ0FBTyxHQUFQO1FBQ0UsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFBO0lBQ3ZDLENBQUM7SUFFRCxrREFBZSxHQUFmO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUNoRSxNQUFNLElBQUksa0JBQWtCLENBQzFCLCtKQUErSixDQUNoSyxDQUFBO1NBQ0Y7UUFDRCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQTtRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDNUMsQ0FBQztJQUVLLDhDQUFXLEdBQWpCLFVBQWtCLE9BQXNCOzs7Z0JBQ3RDLElBQUksT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUU7b0JBQ2pDLElBQ0UsT0FBTyxDQUFDLFVBQVUsQ0FBQyxhQUFhOzJCQUM3QixPQUFPLENBQUMsVUFBVSxDQUFDLGFBQWEsS0FBSyxPQUFPLENBQUMsVUFBVSxDQUFDLFlBQVksRUFDdkU7d0JBQ0EsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO3FCQUMzQztpQkFDRjs7OztLQUNGO0lBRUQsOENBQVcsR0FBWDtRQUNFLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDN0IsQ0FBQztJQUNILCtCQUFDO0FBQUQsQ0FBQyxBQXRGRCxJQXNGQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIE9uRGVzdHJveSxcbiAgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgTmdab25lLFxuICBUZW1wbGF0ZVJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7IExvYWRQYXJhbXMsIEJlYWdsZVZpZXcsIElkZW50aWZpYWJsZUJlYWdsZVVJRWxlbWVudCB9IGZyb20gJ0B6dXAtaXQvYmVhZ2xlLXdlYidcbmltcG9ydCB7IEFic3RyYWN0QmVhZ2xlUHJvdmlkZXIgfSBmcm9tICcuL0Fic3RyYWN0QmVhZ2xlUHJvdmlkZXInXG5pbXBvcnQgeyByZWdpc3RlclZpZXcsIHVucmVnaXN0ZXJWaWV3IH0gZnJvbSAnLi9iZWFnbGUtY29udGV4dC9jb250ZXh0J1xuaW1wb3J0IHsgY3JlYXRlU3RhdGljUHJvbWlzZSB9IGZyb20gJy4vdXRpbHMvcHJvbWlzZSdcbmltcG9ydCBCZWFnbGVSdW50aW1lRXJyb3IgZnJvbSAnLi9lcnJvcnMnXG5cbmxldCBuZXh0Vmlld0lkID0gMVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RCZWFnbGVSZW1vdGVWaWV3IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuICBsb2FkUGFyYW1zOiBMb2FkUGFyYW1zID0geyBwYXRoOiAnJyB9XG4gIHRyZWU6IElkZW50aWZpYWJsZUJlYWdsZVVJRWxlbWVudDxhbnk+XG4gIHZpZXc6IEJlYWdsZVZpZXdcbiAgdmlld0lkID0gYCR7bmV4dFZpZXdJZCsrfWBcbiAgYmVhZ2xlUHJvdmlkZXI6IEFic3RyYWN0QmVhZ2xlUHJvdmlkZXJcbiAgbmdab25lOiBOZ1pvbmVcbiAgY2hhbmdlRGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmXG4gIHZpZXdTdGF0aWNQcm9taXNlID0gY3JlYXRlU3RhdGljUHJvbWlzZTxCZWFnbGVWaWV3PigpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgYmVhZ2xlUHJvdmlkZXI/OiBBYnN0cmFjdEJlYWdsZVByb3ZpZGVyLFxuICAgIG5nWm9uZT86IE5nWm9uZSxcbiAgICBjaGFuZ2VEZXRlY3Rvcj86IENoYW5nZURldGVjdG9yUmVmLFxuICApIHtcbiAgICBpZiAoYmVhZ2xlUHJvdmlkZXIpIHRoaXMuYmVhZ2xlUHJvdmlkZXIgPSBiZWFnbGVQcm92aWRlclxuICAgIGlmIChuZ1pvbmUpIHRoaXMubmdab25lID0gbmdab25lXG4gICAgaWYgKGNoYW5nZURldGVjdG9yKSB0aGlzLmNoYW5nZURldGVjdG9yID0gY2hhbmdlRGV0ZWN0b3JcbiAgfVxuXG4gIGNyZWF0ZUJlYWdsZVZpZXcoKSB7XG4gICAgY29uc3QgYmVhZ2xlU2VydmljZSA9IHRoaXMuYmVhZ2xlUHJvdmlkZXIuZ2V0QmVhZ2xlVUlTZXJ2aWNlKClcbiAgICBpZiAoIWJlYWdsZVNlcnZpY2UpIHtcbiAgICAgIHRocm93IG5ldyBCZWFnbGVSdW50aW1lRXJyb3IoXG4gICAgICAgICd5b3UgbmVlZCB0byBzdGFydCB0aGUgYmVhZ2xlIHByb3ZpZGVyIGJlZm9yZSB1c2luZyBhIHJlbW90ZSB2aWV3LicsXG4gICAgICApXG4gICAgfVxuICAgIHRoaXMudmlldyA9IGJlYWdsZVNlcnZpY2UuY3JlYXRlVmlldygpXG4gICAgdGhpcy52aWV3LnN1YnNjcmliZSh0aGlzLnVwZGF0ZVZpZXcpXG4gICAgdGhpcy52aWV3LmFkZEVycm9yTGlzdGVuZXIoKGVycm9yTGlzdGVuZXIpID0+IHtcbiAgICAgIGVycm9yTGlzdGVuZXIuZm9yRWFjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcbiAgICAgIH0pXG4gICAgfSlcbiAgICByZWdpc3RlclZpZXcoYCR7dGhpcy52aWV3SWR9YCwgdGhpcy52aWV3KVxuICAgIHRoaXMudmlld1N0YXRpY1Byb21pc2UucmVzb2x2ZSh0aGlzLnZpZXcpXG4gIH1cblxuICBnZXRUZW1wbGF0ZShjb21wb25lbnROYW1lOiBJZGVudGlmaWFibGVCZWFnbGVVSUVsZW1lbnQ8YW55PlsndHlwZSddKTogVGVtcGxhdGVSZWY8YW55PiB7XG4gICAgaWYgKCF0aGlzW2NvbXBvbmVudE5hbWVdKSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGBCZWFnbGU6IHRoZSBjb21wb25lbnQgJHtjb21wb25lbnROYW1lfSB3YXMgbm90IGRlY2xhcmVkIGluIEJlYWdsZSdzIGNvbmZpZ3VyYXRpb24uYCxcbiAgICAgIClcbiAgICB9XG4gICAgcmV0dXJuIHRoaXNbY29tcG9uZW50TmFtZV1cbiAgfVxuXG4gIHVwZGF0ZVZpZXcgPSAodWlUcmVlOiBJZGVudGlmaWFibGVCZWFnbGVVSUVsZW1lbnQ8YW55PikgPT4ge1xuICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICB0aGlzLnRyZWUgPSB1aVRyZWVcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpXG4gICAgfSlcbiAgfVxuXG4gIGVsZW1lbnRJZGVudGl0eShpbmRleDogbnVtYmVyLCBlbGVtZW50OiBJZGVudGlmaWFibGVCZWFnbGVVSUVsZW1lbnQ8YW55Pikge1xuICAgIHJldHVybiBlbGVtZW50LmlkXG4gIH1cblxuICBnZXRWaWV3KCkge1xuICAgIHJldHVybiB0aGlzLnZpZXdTdGF0aWNQcm9taXNlLnByb21pc2VcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBpZiAoIXRoaXMuYmVhZ2xlUHJvdmlkZXIgfHwgIXRoaXMubmdab25lIHx8ICF0aGlzLmNoYW5nZURldGVjdG9yKSB7XG4gICAgICB0aHJvdyBuZXcgQmVhZ2xlUnVudGltZUVycm9yKFxuICAgICAgICAnXCJiZWFnbGVQcm92aWRlclwiLCBcIm5nWm9uZVwiIGFuZCBcImNoYW5nZURldGVjdG9yXCIgbXVzdCBiZSBzZXQgYmVmb3JlIHRoZSBBZnRlclZpZXdJbml0IHJ1bnMuIFVzZSB0aGUgY29uc3RydWN0b3Igb3IgdGhlIGNvbXBvbmVudCBpbnN0YW5jZSB0byBzZXQgdGhlaXIgdmFsdWVzLicsXG4gICAgICApXG4gICAgfVxuICAgIHRoaXMuY3JlYXRlQmVhZ2xlVmlldygpXG4gICAgdGhpcy52aWV3LnVwZGF0ZVdpdGhGZXRjaCh0aGlzLmxvYWRQYXJhbXMpXG4gIH1cblxuICBhc3luYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXMgJiYgY2hhbmdlcy5sb2FkUGFyYW1zKSB7XG4gICAgICBpZiAoXG4gICAgICAgIGNoYW5nZXMubG9hZFBhcmFtcy5wcmV2aW91c1ZhbHVlXG4gICAgICAgICYmIGNoYW5nZXMubG9hZFBhcmFtcy5wcmV2aW91c1ZhbHVlICE9PSBjaGFuZ2VzLmxvYWRQYXJhbXMuY3VycmVudFZhbHVlXG4gICAgICApIHtcbiAgICAgICAgdGhpcy52aWV3LnVwZGF0ZVdpdGhGZXRjaCh0aGlzLmxvYWRQYXJhbXMpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdW5yZWdpc3RlclZpZXcodGhpcy52aWV3SWQpXG4gIH1cbn1cbiJdfQ==