import { __decorate } from "tslib";
import { Directive, ViewContainerRef, ElementRef, OnInit, Input } from '@angular/core';
import { contextSelector } from '../../constants';
import { BeagleComponent } from '../BeagleComponent';
import { getContext } from './context';
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
export { BeagleContextDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYmVhZ2xlLWFuZ3VsYXIvIiwic291cmNlcyI6WyJydW50aW1lL2JlYWdsZS1jb250ZXh0L2RpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUN0RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUJBQWlCLENBQUE7QUFDakQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFBO0FBQ3BELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxXQUFXLENBQUE7QUFLdEM7SUFJRSxnQ0FBbUIsZ0JBQWtDLEVBQVMsVUFBc0I7UUFBakUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFTLGVBQVUsR0FBVixVQUFVLENBQVk7SUFBSSxDQUFDO0lBRXpGLHlDQUFRLEdBQVI7UUFBQSxpQkFnQkM7O1FBZkMsSUFBSSxTQUFTLENBQUE7UUFFYixhQUFhO1FBQ2IsSUFBSSxFQUFFLElBQUksT0FBTyxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsS0FBSyxVQUFVLEVBQUU7WUFDakQsb0VBQW9FO1lBQ3BFLGFBQWE7WUFDYixTQUFTLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFBO1NBQzNEO2FBQU07WUFFTCxhQUFhO1lBQ2IsU0FBUyxlQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLDBDQUFFLGFBQWEsMENBQUUsU0FBUyxDQUFBO1NBQ2xFO1FBQ0QsSUFBSSxTQUFTLFlBQVksZUFBZSxFQUFFO1lBQ3hDLFNBQVMsQ0FBQyxnQkFBZ0IsR0FBRyxjQUFNLE9BQUEsVUFBVSxDQUFDLEtBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxFQUF6QyxDQUF5QyxDQUFBO1NBQzdFO0lBQ0gsQ0FBQzs7Z0JBbEJvQyxnQkFBZ0I7Z0JBQXFCLFVBQVU7O0lBSDNFO1FBQVIsS0FBSyxFQUFFOzhEQUFtQjtJQUNsQjtRQUFSLEtBQUssRUFBRTsyREFBZ0I7SUFGYixzQkFBc0I7UUFIbEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQUksZUFBZSxNQUFHO1NBQ2pDLENBQUM7T0FDVyxzQkFBc0IsQ0F1QmxDO0lBQUQsNkJBQUM7Q0FBQSxBQXZCRCxJQXVCQztTQXZCWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIFZpZXdDb250YWluZXJSZWYsIEVsZW1lbnRSZWYsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHsgY29udGV4dFNlbGVjdG9yIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJ1xuaW1wb3J0IHsgQmVhZ2xlQ29tcG9uZW50IH0gZnJvbSAnLi4vQmVhZ2xlQ29tcG9uZW50J1xuaW1wb3J0IHsgZ2V0Q29udGV4dCB9IGZyb20gJy4vY29udGV4dCdcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiBgWyR7Y29udGV4dFNlbGVjdG9yfV1gLFxufSlcbmV4cG9ydCBjbGFzcyBCZWFnbGVDb250ZXh0RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgX2VsZW1lbnRJZDogc3RyaW5nXG4gIEBJbnB1dCgpIF92aWV3SWQ6IHN0cmluZ1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLCBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZikgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgbGV0IGNvbXBvbmVudFxuXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGlmIChuZyAmJiB0eXBlb2YgKG5nLmdldENvbXBvbmVudCkgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vSVZZIHByb3ZpZGVzIG5nLmdldENvbXBvbmVudCBmdW5jdGlvbiB3aGVyZWFzIG90aGVyIHZlcnNpb25zIGRvbid0XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBjb21wb25lbnQgPSBuZy5nZXRDb21wb25lbnQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpXG4gICAgfSBlbHNlIHtcbiAgICAgIFxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgY29tcG9uZW50ID0gdGhpcy52aWV3Q29udGFpbmVyUmVmLl9kYXRhPy5jb21wb25lbnRWaWV3Py5jb21wb25lbnRcbiAgICB9XG4gICAgaWYgKGNvbXBvbmVudCBpbnN0YW5jZW9mIEJlYWdsZUNvbXBvbmVudCkge1xuICAgICAgY29tcG9uZW50LmdldEJlYWdsZUNvbnRleHQgPSAoKSA9PiBnZXRDb250ZXh0KHRoaXMuX3ZpZXdJZCwgdGhpcy5fZWxlbWVudElkKVxuICAgIH1cbiAgfVxufVxuIl19