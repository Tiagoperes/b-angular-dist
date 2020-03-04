import { __awaiter, __generator } from "tslib";
import { registerView, unregisterView } from './context';
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
export { BeagleRemoteView };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmVhZ2xlUmVtb3RlVmlldy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2JlYWdsZS1hbmd1bGFyLyIsInNvdXJjZXMiOlsiQmVhZ2xlUmVtb3RlVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBV0EsT0FBTyxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsTUFBTSxXQUFXLENBQUE7QUFFeEQsSUFBSSxVQUFVLEdBQUcsQ0FBQyxDQUFBO0FBRWxCO0lBUUUsMEJBQ0UsY0FBOEIsRUFDOUIsTUFBYyxFQUNkLGNBQWlDO1FBSG5DLGlCQWNDO1FBckJELGVBQVUsR0FBZSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQTtRQUdyQyxXQUFNLEdBQUcsS0FBRyxVQUFVLEVBQUksQ0FBQTtRQXdCMUIsZUFBVSxHQUFHLFVBQUMsTUFBNEI7WUFDeEMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7Z0JBQ2QsS0FBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUE7Z0JBQ2xCLEtBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxFQUFFLENBQUE7WUFDckMsQ0FBQyxDQUFDLENBQUE7UUFDSixDQUFDLENBQUE7UUFwQkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUE7UUFDcEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUE7UUFDcEMsSUFBTSxhQUFhLEdBQUcsY0FBYyxDQUFDLGtCQUFrQixFQUFFLENBQUE7UUFDekQsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNsQixNQUFNLElBQUksS0FBSyxDQUFDLDJFQUEyRSxDQUFDLENBQUE7U0FDN0Y7UUFDRCxJQUFJLENBQUMsSUFBSSxHQUFHLGFBQWEsQ0FBQyxVQUFVLEVBQUUsQ0FBQTtRQUN0QyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDcEMsWUFBWSxDQUFDLEtBQUcsSUFBSSxDQUFDLE1BQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDM0MsQ0FBQztJQUVELHNDQUFXLEdBQVgsVUFBWSxhQUEyQztRQUNyRCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQTtJQUM1QixDQUFDO0lBU0QsMENBQWUsR0FBZjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtJQUM1QyxDQUFDO0lBRUssc0NBQVcsR0FBakIsVUFBa0IsT0FBc0I7OztnQkFDdEMsSUFBRyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQVUsRUFBRTtvQkFDaEMsSUFDRSxPQUFPLENBQUMsVUFBVSxDQUFDLGFBQWE7MkJBQzdCLE9BQU8sQ0FBQyxVQUFVLENBQUMsYUFBYSxLQUFLLE9BQU8sQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUN2RTt3QkFDQSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUE7cUJBQzNDO2lCQUNGOzs7O0tBQ0Y7SUFFRCxzQ0FBVyxHQUFYO1FBQ0UsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUM3QixDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQUFDLEFBckRELElBcURDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgT25EZXN0cm95LFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBOZ1pvbmUsXG4gIFRlbXBsYXRlUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHsgQmVhZ2xlUHJvdmlkZXIgfSBmcm9tICcuL3Byb3ZpZGVyJ1xuaW1wb3J0IHsgTG9hZFBhcmFtcywgQmVhZ2xlVmlldywgQmVhZ2xlVUlFbGVtZW50IH0gZnJvbSAnYmVhZ2xlLXdlYidcbmltcG9ydCB7IHJlZ2lzdGVyVmlldywgdW5yZWdpc3RlclZpZXcgfSBmcm9tICcuL2NvbnRleHQnXG5cbmxldCBuZXh0Vmlld0lkID0gMVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmVhZ2xlUmVtb3RlVmlldyBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcbiAgbG9hZFBhcmFtczogTG9hZFBhcmFtcyA9IHsgcGF0aDogJycgfVxuICB0cmVlOiBCZWFnbGVVSUVsZW1lbnQ8YW55PlxuICB2aWV3OiBCZWFnbGVWaWV3XG4gIHZpZXdJZCA9IGAke25leHRWaWV3SWQrK31gXG4gIG5nWm9uZTogTmdab25lXG4gIGNoYW5nZURldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZlxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGJlYWdsZVByb3ZpZGVyOiBCZWFnbGVQcm92aWRlcixcbiAgICBuZ1pvbmU6IE5nWm9uZSxcbiAgICBjaGFuZ2VEZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICkge1xuICAgIHRoaXMubmdab25lID0gbmdab25lXG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvciA9IGNoYW5nZURldGVjdG9yXG4gICAgY29uc3QgYmVhZ2xlU2VydmljZSA9IGJlYWdsZVByb3ZpZGVyLmdldEJlYWdsZVVJU2VydmljZSgpXG4gICAgaWYgKCFiZWFnbGVTZXJ2aWNlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0JlYWdsZTogeW91IG5lZWQgdG8gc3RhcnQgdGhlIGJlYWdsZSBwcm92aWRlciBiZWZvcmUgdXNpbmcgYSByZW1vdGUgdmlldy4nKVxuICAgIH1cbiAgICB0aGlzLnZpZXcgPSBiZWFnbGVTZXJ2aWNlLmNyZWF0ZVZpZXcoKVxuICAgIHRoaXMudmlldy5zdWJzY3JpYmUodGhpcy51cGRhdGVWaWV3KVxuICAgIHJlZ2lzdGVyVmlldyhgJHt0aGlzLnZpZXdJZH1gLCB0aGlzLnZpZXcpXG4gIH1cblxuICBnZXRUZW1wbGF0ZShjb21wb25lbnROYW1lOiBCZWFnbGVVSUVsZW1lbnQ8YW55PlsndHlwZSddKTogVGVtcGxhdGVSZWY8YW55PiB7XG4gICAgcmV0dXJuIHRoaXNbY29tcG9uZW50TmFtZV1cbiAgfVxuXG4gIHVwZGF0ZVZpZXcgPSAodWlUcmVlOiBCZWFnbGVVSUVsZW1lbnQ8YW55PikgPT4ge1xuICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICB0aGlzLnRyZWUgPSB1aVRyZWVcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpXG4gICAgfSlcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLnZpZXcudXBkYXRlV2l0aEZldGNoKHRoaXMubG9hZFBhcmFtcylcbiAgfVxuXG4gIGFzeW5jIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZihjaGFuZ2VzICYmIGNoYW5nZXMubG9hZFBhcmFtcykge1xuICAgICAgaWYgKFxuICAgICAgICBjaGFuZ2VzLmxvYWRQYXJhbXMucHJldmlvdXNWYWx1ZVxuICAgICAgICAmJiBjaGFuZ2VzLmxvYWRQYXJhbXMucHJldmlvdXNWYWx1ZSAhPT0gY2hhbmdlcy5sb2FkUGFyYW1zLmN1cnJlbnRWYWx1ZVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMudmlldy51cGRhdGVXaXRoRmV0Y2godGhpcy5sb2FkUGFyYW1zKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHVucmVnaXN0ZXJWaWV3KHRoaXMudmlld0lkKVxuICB9XG59XG4iXX0=