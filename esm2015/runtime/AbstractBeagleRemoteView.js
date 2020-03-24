import { __awaiter } from "tslib";
import { registerView, unregisterView } from './beagle-context/context';
import { createStaticPromise } from './utils/promise';
import BeagleRuntimeError from './errors';
let nextViewId = 1;
export class AbstractBeagleRemoteView {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWJzdHJhY3RCZWFnbGVSZW1vdGVWaWV3LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYmVhZ2xlLWFuZ3VsYXIvIiwic291cmNlcyI6WyJydW50aW1lL0Fic3RyYWN0QmVhZ2xlUmVtb3RlVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBV0EsT0FBTyxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQTtBQUN2RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQTtBQUNyRCxPQUFPLGtCQUFrQixNQUFNLFVBQVUsQ0FBQTtBQUV6QyxJQUFJLFVBQVUsR0FBRyxDQUFDLENBQUE7QUFFbEIsTUFBTSxPQUFnQix3QkFBd0I7SUFVNUMsWUFDRSxjQUF1QyxFQUN2QyxNQUFlLEVBQ2YsY0FBa0M7UUFacEMsZUFBVSxHQUFlLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFBO1FBR3JDLFdBQU0sR0FBRyxHQUFHLFVBQVUsRUFBRSxFQUFFLENBQUE7UUFJMUIsc0JBQWlCLEdBQUcsbUJBQW1CLEVBQWMsQ0FBQTtRQW1DckQsZUFBVSxHQUFHLENBQUMsTUFBd0MsRUFBRSxFQUFFO1lBQ3hELElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRTtnQkFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUE7Z0JBQ2xCLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxFQUFFLENBQUE7WUFDckMsQ0FBQyxDQUFDLENBQUE7UUFDSixDQUFDLENBQUE7UUFqQ0MsSUFBSSxjQUFjO1lBQUUsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUE7UUFDeEQsSUFBSSxNQUFNO1lBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUE7UUFDaEMsSUFBSSxjQUFjO1lBQUUsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUE7SUFDMUQsQ0FBQztJQUVELGdCQUFnQjtRQUNkLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsa0JBQWtCLEVBQUUsQ0FBQTtRQUM5RCxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ2xCLE1BQU0sSUFBSSxrQkFBa0IsQ0FBQyxtRUFBbUUsQ0FBQyxDQUFBO1NBQ2xHO1FBQ0QsSUFBSSxDQUFDLElBQUksR0FBRyxhQUFhLENBQUMsVUFBVSxFQUFFLENBQUE7UUFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxhQUFhLEVBQUUsRUFBRTtZQUMzQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7Z0JBQzlCLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDdEIsQ0FBQyxDQUFDLENBQUE7UUFDSixDQUFDLENBQUMsQ0FBQTtRQUNGLFlBQVksQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDekMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDM0MsQ0FBQztJQUVELFdBQVcsQ0FBQyxhQUF1RDtRQUNqRSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFO1lBQ3hCLE9BQU8sQ0FBQyxJQUFJLENBQUMseUJBQXlCLGFBQWEsOENBQThDLENBQUMsQ0FBQTtTQUNuRztRQUNELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFBO0lBQzVCLENBQUM7SUFTRCxlQUFlLENBQUMsS0FBYSxFQUFFLE9BQXlDO1FBQ3RFLE9BQU8sT0FBTyxDQUFDLEVBQUUsQ0FBQTtJQUNuQixDQUFDO0lBRUQsT0FBTztRQUNMLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQTtJQUN2QyxDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDaEUsTUFBTSxJQUFJLGtCQUFrQixDQUFDLCtKQUErSixDQUFDLENBQUE7U0FDOUw7UUFDRCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQTtRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDNUMsQ0FBQztJQUVLLFdBQVcsQ0FBQyxPQUFzQjs7WUFDdEMsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLFVBQVUsRUFBRTtnQkFDakMsSUFDRSxPQUFPLENBQUMsVUFBVSxDQUFDLGFBQWE7dUJBQzdCLE9BQU8sQ0FBQyxVQUFVLENBQUMsYUFBYSxLQUFLLE9BQU8sQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUN2RTtvQkFDQSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUE7aUJBQzNDO2FBQ0Y7UUFDSCxDQUFDO0tBQUE7SUFFRCxXQUFXO1FBQ1QsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUM3QixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBPbkRlc3Ryb3ksXG4gIE9uQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIE5nWm9uZSxcbiAgVGVtcGxhdGVSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQgeyBBYnN0cmFjdEJlYWdsZVByb3ZpZGVyIH0gZnJvbSAnLi9BYnN0cmFjdEJlYWdsZVByb3ZpZGVyJ1xuaW1wb3J0IHsgTG9hZFBhcmFtcywgQmVhZ2xlVmlldywgSWRlbnRpZmlhYmxlQmVhZ2xlVUlFbGVtZW50IH0gZnJvbSAnYmVhZ2xlLXdlYidcbmltcG9ydCB7IHJlZ2lzdGVyVmlldywgdW5yZWdpc3RlclZpZXcgfSBmcm9tICcuL2JlYWdsZS1jb250ZXh0L2NvbnRleHQnXG5pbXBvcnQgeyBjcmVhdGVTdGF0aWNQcm9taXNlIH0gZnJvbSAnLi91dGlscy9wcm9taXNlJ1xuaW1wb3J0IEJlYWdsZVJ1bnRpbWVFcnJvciBmcm9tICcuL2Vycm9ycydcblxubGV0IG5leHRWaWV3SWQgPSAxXG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdEJlYWdsZVJlbW90ZVZpZXcgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG4gIGxvYWRQYXJhbXM6IExvYWRQYXJhbXMgPSB7IHBhdGg6ICcnIH1cbiAgdHJlZTogSWRlbnRpZmlhYmxlQmVhZ2xlVUlFbGVtZW50PGFueT5cbiAgdmlldzogQmVhZ2xlVmlld1xuICB2aWV3SWQgPSBgJHtuZXh0Vmlld0lkKyt9YFxuICBiZWFnbGVQcm92aWRlcjogQWJzdHJhY3RCZWFnbGVQcm92aWRlclxuICBuZ1pvbmU6IE5nWm9uZVxuICBjaGFuZ2VEZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgdmlld1N0YXRpY1Byb21pc2UgPSBjcmVhdGVTdGF0aWNQcm9taXNlPEJlYWdsZVZpZXc+KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBiZWFnbGVQcm92aWRlcj86IEFic3RyYWN0QmVhZ2xlUHJvdmlkZXIsXG4gICAgbmdab25lPzogTmdab25lLFxuICAgIGNoYW5nZURldGVjdG9yPzogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICkge1xuICAgIGlmIChiZWFnbGVQcm92aWRlcikgdGhpcy5iZWFnbGVQcm92aWRlciA9IGJlYWdsZVByb3ZpZGVyXG4gICAgaWYgKG5nWm9uZSkgdGhpcy5uZ1pvbmUgPSBuZ1pvbmVcbiAgICBpZiAoY2hhbmdlRGV0ZWN0b3IpIHRoaXMuY2hhbmdlRGV0ZWN0b3IgPSBjaGFuZ2VEZXRlY3RvclxuICB9XG5cbiAgY3JlYXRlQmVhZ2xlVmlldygpIHtcbiAgICBjb25zdCBiZWFnbGVTZXJ2aWNlID0gdGhpcy5iZWFnbGVQcm92aWRlci5nZXRCZWFnbGVVSVNlcnZpY2UoKVxuICAgIGlmICghYmVhZ2xlU2VydmljZSkge1xuICAgICAgdGhyb3cgbmV3IEJlYWdsZVJ1bnRpbWVFcnJvcigneW91IG5lZWQgdG8gc3RhcnQgdGhlIGJlYWdsZSBwcm92aWRlciBiZWZvcmUgdXNpbmcgYSByZW1vdGUgdmlldy4nKVxuICAgIH1cbiAgICB0aGlzLnZpZXcgPSBiZWFnbGVTZXJ2aWNlLmNyZWF0ZVZpZXcoKVxuICAgIHRoaXMudmlldy5zdWJzY3JpYmUodGhpcy51cGRhdGVWaWV3KVxuICAgIHRoaXMudmlldy5hZGRFcnJvckxpc3RlbmVyKChlcnJvckxpc3RlbmVyKSA9PiB7XG4gICAgICBlcnJvckxpc3RlbmVyLmZvckVhY2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgICB9KVxuICAgIH0pXG4gICAgcmVnaXN0ZXJWaWV3KGAke3RoaXMudmlld0lkfWAsIHRoaXMudmlldylcbiAgICB0aGlzLnZpZXdTdGF0aWNQcm9taXNlLnJlc29sdmUodGhpcy52aWV3KVxuICB9XG5cbiAgZ2V0VGVtcGxhdGUoY29tcG9uZW50TmFtZTogSWRlbnRpZmlhYmxlQmVhZ2xlVUlFbGVtZW50PGFueT5bJ3R5cGUnXSk6IFRlbXBsYXRlUmVmPGFueT4ge1xuICAgIGlmICghdGhpc1tjb21wb25lbnROYW1lXSkge1xuICAgICAgY29uc29sZS53YXJuKGBCZWFnbGU6IHRoZSBjb21wb25lbnQgJHtjb21wb25lbnROYW1lfSB3YXMgbm90IGRlY2xhcmVkIGluIEJlYWdsZSdzIGNvbmZpZ3VyYXRpb24uYClcbiAgICB9XG4gICAgcmV0dXJuIHRoaXNbY29tcG9uZW50TmFtZV1cbiAgfVxuXG4gIHVwZGF0ZVZpZXcgPSAodWlUcmVlOiBJZGVudGlmaWFibGVCZWFnbGVVSUVsZW1lbnQ8YW55PikgPT4ge1xuICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICB0aGlzLnRyZWUgPSB1aVRyZWVcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpXG4gICAgfSlcbiAgfVxuXG4gIGVsZW1lbnRJZGVudGl0eShpbmRleDogbnVtYmVyLCBlbGVtZW50OiBJZGVudGlmaWFibGVCZWFnbGVVSUVsZW1lbnQ8YW55Pikge1xuICAgIHJldHVybiBlbGVtZW50LmlkXG4gIH1cblxuICBnZXRWaWV3KCkge1xuICAgIHJldHVybiB0aGlzLnZpZXdTdGF0aWNQcm9taXNlLnByb21pc2VcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBpZiAoIXRoaXMuYmVhZ2xlUHJvdmlkZXIgfHwgIXRoaXMubmdab25lIHx8ICF0aGlzLmNoYW5nZURldGVjdG9yKSB7XG4gICAgICB0aHJvdyBuZXcgQmVhZ2xlUnVudGltZUVycm9yKGBcImJlYWdsZVByb3ZpZGVyXCIsIFwibmdab25lXCIgYW5kIFwiY2hhbmdlRGV0ZWN0b3JcIiBtdXN0IGJlIHNldCBiZWZvcmUgdGhlIEFmdGVyVmlld0luaXQgcnVucy4gVXNlIHRoZSBjb25zdHJ1Y3RvciBvciB0aGUgY29tcG9uZW50IGluc3RhbmNlIHRvIHNldCB0aGVpciB2YWx1ZXMuYClcbiAgICB9XG4gICAgdGhpcy5jcmVhdGVCZWFnbGVWaWV3KClcbiAgICB0aGlzLnZpZXcudXBkYXRlV2l0aEZldGNoKHRoaXMubG9hZFBhcmFtcylcbiAgfVxuXG4gIGFzeW5jIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoY2hhbmdlcyAmJiBjaGFuZ2VzLmxvYWRQYXJhbXMpIHtcbiAgICAgIGlmIChcbiAgICAgICAgY2hhbmdlcy5sb2FkUGFyYW1zLnByZXZpb3VzVmFsdWVcbiAgICAgICAgJiYgY2hhbmdlcy5sb2FkUGFyYW1zLnByZXZpb3VzVmFsdWUgIT09IGNoYW5nZXMubG9hZFBhcmFtcy5jdXJyZW50VmFsdWVcbiAgICAgICkge1xuICAgICAgICB0aGlzLnZpZXcudXBkYXRlV2l0aEZldGNoKHRoaXMubG9hZFBhcmFtcylcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB1bnJlZ2lzdGVyVmlldyh0aGlzLnZpZXdJZClcbiAgfVxufVxuIl19