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
        // @ts-ignore
        var component = (_b = (_a = this.viewContainerRef._data) === null || _a === void 0 ? void 0 : _a.componentView) === null || _b === void 0 ? void 0 : _b.component;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYmVhZ2xlLWFuZ3VsYXIvIiwic291cmNlcyI6WyJydW50aW1lL2JlYWdsZS1jb250ZXh0L2RpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUN0RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUJBQWlCLENBQUE7QUFDakQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFBO0FBQ3BELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxXQUFXLENBQUE7QUFLdEM7SUFJRSxnQ0FBbUIsZ0JBQWtDLEVBQVMsVUFBc0I7UUFBakUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFTLGVBQVUsR0FBVixVQUFVLENBQVk7SUFBRyxDQUFDO0lBRXhGLHlDQUFRLEdBQVI7UUFBQSxpQkFNQzs7UUFMQyxhQUFhO1FBQ2IsSUFBTSxTQUFTLGVBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssMENBQUUsYUFBYSwwQ0FBRSxTQUFTLENBQUE7UUFDdkUsSUFBSSxTQUFTLFlBQVksZUFBZSxFQUFFO1lBQ3hDLFNBQVMsQ0FBQyxnQkFBZ0IsR0FBRyxjQUFNLE9BQUEsVUFBVSxDQUFDLEtBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxFQUF6QyxDQUF5QyxDQUFBO1NBQzdFO0lBQ0gsQ0FBQzs7Z0JBUm9DLGdCQUFnQjtnQkFBcUIsVUFBVTs7SUFIM0U7UUFBUixLQUFLLEVBQUU7OERBQW1CO0lBQ2xCO1FBQVIsS0FBSyxFQUFFOzJEQUFnQjtJQUZiLHNCQUFzQjtRQUhsQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBSSxlQUFlLE1BQUc7U0FDakMsQ0FBQztPQUNXLHNCQUFzQixDQWFsQztJQUFELDZCQUFDO0NBQUEsQUFiRCxJQWFDO1NBYlksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBWaWV3Q29udGFpbmVyUmVmLCBFbGVtZW50UmVmLCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7IGNvbnRleHRTZWxlY3RvciB9IGZyb20gJy4uLy4uL2NvbnN0YW50cydcbmltcG9ydCB7IEJlYWdsZUNvbXBvbmVudCB9IGZyb20gJy4uL0JlYWdsZUNvbXBvbmVudCdcbmltcG9ydCB7IGdldENvbnRleHQgfSBmcm9tICcuL2NvbnRleHQnXG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogYFske2NvbnRleHRTZWxlY3Rvcn1dYCxcbn0pXG5leHBvcnQgY2xhc3MgQmVhZ2xlQ29udGV4dERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIF9lbGVtZW50SWQ6IHN0cmluZ1xuICBASW5wdXQoKSBfdmlld0lkOiBzdHJpbmdcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZiwgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGNvbnN0IGNvbXBvbmVudCA9IHRoaXMudmlld0NvbnRhaW5lclJlZi5fZGF0YT8uY29tcG9uZW50Vmlldz8uY29tcG9uZW50XG4gICAgaWYgKGNvbXBvbmVudCBpbnN0YW5jZW9mIEJlYWdsZUNvbXBvbmVudCkge1xuICAgICAgY29tcG9uZW50LmdldEJlYWdsZUNvbnRleHQgPSAoKSA9PiBnZXRDb250ZXh0KHRoaXMuX3ZpZXdJZCwgdGhpcy5fZWxlbWVudElkKVxuICAgIH1cbiAgfVxufVxuIl19