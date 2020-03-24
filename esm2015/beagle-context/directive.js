import { __decorate } from "tslib";
import { Directive, ViewContainerRef, ElementRef, OnInit, Input } from '@angular/core';
import { contextSelector } from '../constants';
import { BeagleComponent } from '../BeagleComponent';
import { getContext } from './context';
let BeagleContextDirective = class BeagleContextDirective {
    constructor(viewContainerRef, elementRef) {
        this.viewContainerRef = viewContainerRef;
        this.elementRef = elementRef;
    }
    ngOnInit() {
        var _a, _b;
        // @ts-ignore
        const component = (_b = (_a = this.viewContainerRef._data) === null || _a === void 0 ? void 0 : _a.componentView) === null || _b === void 0 ? void 0 : _b.component;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYmVhZ2xlLWFuZ3VsYXIvIiwic291cmNlcyI6WyJiZWFnbGUtY29udGV4dC9kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFDdEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQTtBQUM5QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUE7QUFDcEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFdBQVcsQ0FBQTtBQUt0QyxJQUFhLHNCQUFzQixHQUFuQyxNQUFhLHNCQUFzQjtJQUlqQyxZQUFtQixnQkFBa0MsRUFBUyxVQUFzQjtRQUFqRSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtJQUFHLENBQUM7SUFFeEYsUUFBUTs7UUFDTixhQUFhO1FBQ2IsTUFBTSxTQUFTLGVBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssMENBQUUsYUFBYSwwQ0FBRSxTQUFTLENBQUE7UUFDdkUsSUFBSSxTQUFTLFlBQVksZUFBZSxFQUFFO1lBQ3hDLFNBQVMsQ0FBQyxnQkFBZ0IsR0FBRyxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUE7U0FDN0U7SUFDSCxDQUFDO0NBQ0YsQ0FBQTs7WUFUc0MsZ0JBQWdCO1lBQXFCLFVBQVU7O0FBSDNFO0lBQVIsS0FBSyxFQUFFOzBEQUFtQjtBQUNsQjtJQUFSLEtBQUssRUFBRTt1REFBZ0I7QUFGYixzQkFBc0I7SUFIbEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLElBQUksZUFBZSxHQUFHO0tBQ2pDLENBQUM7R0FDVyxzQkFBc0IsQ0FhbEM7U0FiWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIFZpZXdDb250YWluZXJSZWYsIEVsZW1lbnRSZWYsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHsgY29udGV4dFNlbGVjdG9yIH0gZnJvbSAnLi4vY29uc3RhbnRzJ1xuaW1wb3J0IHsgQmVhZ2xlQ29tcG9uZW50IH0gZnJvbSAnLi4vQmVhZ2xlQ29tcG9uZW50J1xuaW1wb3J0IHsgZ2V0Q29udGV4dCB9IGZyb20gJy4vY29udGV4dCdcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiBgWyR7Y29udGV4dFNlbGVjdG9yfV1gLFxufSlcbmV4cG9ydCBjbGFzcyBCZWFnbGVDb250ZXh0RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgX2VsZW1lbnRJZDogc3RyaW5nXG4gIEBJbnB1dCgpIF92aWV3SWQ6IHN0cmluZ1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLCBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZikge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgY29uc3QgY29tcG9uZW50ID0gdGhpcy52aWV3Q29udGFpbmVyUmVmLl9kYXRhPy5jb21wb25lbnRWaWV3Py5jb21wb25lbnRcbiAgICBpZiAoY29tcG9uZW50IGluc3RhbmNlb2YgQmVhZ2xlQ29tcG9uZW50KSB7XG4gICAgICBjb21wb25lbnQuZ2V0QmVhZ2xlQ29udGV4dCA9ICgpID0+IGdldENvbnRleHQodGhpcy5fdmlld0lkLCB0aGlzLl9lbGVtZW50SWQpXG4gICAgfVxuICB9XG59XG4iXX0=