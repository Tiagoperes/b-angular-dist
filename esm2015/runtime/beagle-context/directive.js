import { __decorate } from "tslib";
import { Directive, ViewContainerRef, ElementRef, OnInit, Input } from '@angular/core';
import { contextSelector } from '../../constants';
import { BeagleComponent } from '../BeagleComponent';
import { getContext } from './context';
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
    Input()
], BeagleContextDirective.prototype, "_elementId", void 0);
__decorate([
    Input()
], BeagleContextDirective.prototype, "_viewId", void 0);
BeagleContextDirective = __decorate([
    Directive({
        selector: `[${contextSelector}]`,
    })
], BeagleContextDirective);
export { BeagleContextDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYmVhZ2xlLWFuZ3VsYXIvIiwic291cmNlcyI6WyJydW50aW1lL2JlYWdsZS1jb250ZXh0L2RpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUN0RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUJBQWlCLENBQUE7QUFDakQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFBO0FBQ3BELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxXQUFXLENBQUE7QUFLdEMsSUFBYSxzQkFBc0IsR0FBbkMsTUFBYSxzQkFBc0I7SUFJakMsWUFBbUIsZ0JBQWtDLEVBQVMsVUFBc0I7UUFBakUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFTLGVBQVUsR0FBVixVQUFVLENBQVk7SUFBSSxDQUFDO0lBRXpGLFFBQVE7O1FBQ04sSUFBSSxTQUFTLENBQUE7UUFFYixhQUFhO1FBQ2IsSUFBSSxFQUFFLElBQUksT0FBTyxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsS0FBSyxVQUFVLEVBQUU7WUFDakQsb0VBQW9FO1lBQ3BFLGFBQWE7WUFDYixTQUFTLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFBO1NBQzNEO2FBQU07WUFFTCxhQUFhO1lBQ2IsU0FBUyxlQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLDBDQUFFLGFBQWEsMENBQUUsU0FBUyxDQUFBO1NBQ2xFO1FBQ0QsSUFBSSxTQUFTLFlBQVksZUFBZSxFQUFFO1lBQ3hDLFNBQVMsQ0FBQyxnQkFBZ0IsR0FBRyxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUE7U0FDN0U7SUFDSCxDQUFDO0NBQ0YsQ0FBQTs7WUFuQnNDLGdCQUFnQjtZQUFxQixVQUFVOztBQUgzRTtJQUFSLEtBQUssRUFBRTswREFBbUI7QUFDbEI7SUFBUixLQUFLLEVBQUU7dURBQWdCO0FBRmIsc0JBQXNCO0lBSGxDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxJQUFJLGVBQWUsR0FBRztLQUNqQyxDQUFDO0dBQ1csc0JBQXNCLENBdUJsQztTQXZCWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIFZpZXdDb250YWluZXJSZWYsIEVsZW1lbnRSZWYsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHsgY29udGV4dFNlbGVjdG9yIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJ1xuaW1wb3J0IHsgQmVhZ2xlQ29tcG9uZW50IH0gZnJvbSAnLi4vQmVhZ2xlQ29tcG9uZW50J1xuaW1wb3J0IHsgZ2V0Q29udGV4dCB9IGZyb20gJy4vY29udGV4dCdcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiBgWyR7Y29udGV4dFNlbGVjdG9yfV1gLFxufSlcbmV4cG9ydCBjbGFzcyBCZWFnbGVDb250ZXh0RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgX2VsZW1lbnRJZDogc3RyaW5nXG4gIEBJbnB1dCgpIF92aWV3SWQ6IHN0cmluZ1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLCBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZikgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgbGV0IGNvbXBvbmVudFxuXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGlmIChuZyAmJiB0eXBlb2YgKG5nLmdldENvbXBvbmVudCkgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vSVZZIHByb3ZpZGVzIG5nLmdldENvbXBvbmVudCBmdW5jdGlvbiB3aGVyZWFzIG90aGVyIHZlcnNpb25zIGRvbid0XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBjb21wb25lbnQgPSBuZy5nZXRDb21wb25lbnQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpXG4gICAgfSBlbHNlIHtcbiAgICAgIFxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgY29tcG9uZW50ID0gdGhpcy52aWV3Q29udGFpbmVyUmVmLl9kYXRhPy5jb21wb25lbnRWaWV3Py5jb21wb25lbnRcbiAgICB9XG4gICAgaWYgKGNvbXBvbmVudCBpbnN0YW5jZW9mIEJlYWdsZUNvbXBvbmVudCkge1xuICAgICAgY29tcG9uZW50LmdldEJlYWdsZUNvbnRleHQgPSAoKSA9PiBnZXRDb250ZXh0KHRoaXMuX3ZpZXdJZCwgdGhpcy5fZWxlbWVudElkKVxuICAgIH1cbiAgfVxufVxuIl19