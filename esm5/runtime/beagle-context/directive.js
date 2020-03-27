import { __decorate, __metadata } from "tslib";
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
        Input(),
        __metadata("design:type", String)
    ], BeagleContextDirective.prototype, "_elementId", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], BeagleContextDirective.prototype, "_viewId", void 0);
    BeagleContextDirective = __decorate([
        Directive({
            selector: "[" + contextSelector + "]",
        }),
        __metadata("design:paramtypes", [ViewContainerRef, ElementRef])
    ], BeagleContextDirective);
    return BeagleContextDirective;
}());
export { BeagleContextDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYmVhZ2xlLWFuZ3VsYXIvIiwic291cmNlcyI6WyJydW50aW1lL2JlYWdsZS1jb250ZXh0L2RpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUN0RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUJBQWlCLENBQUE7QUFDakQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFBO0FBQ3BELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxXQUFXLENBQUE7QUFLdEM7SUFJRSxnQ0FBbUIsZ0JBQWtDLEVBQVMsVUFBc0I7UUFBakUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFTLGVBQVUsR0FBVixVQUFVLENBQVk7SUFBSSxDQUFDO0lBRXpGLHlDQUFRLEdBQVI7UUFBQSxpQkFnQkM7O1FBZkMsSUFBSSxTQUFTLENBQUE7UUFFYixhQUFhO1FBQ2IsSUFBSSxFQUFFLElBQUksT0FBTyxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsS0FBSyxVQUFVLEVBQUU7WUFDakQsb0VBQW9FO1lBQ3BFLGFBQWE7WUFDYixTQUFTLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFBO1NBQzNEO2FBQU07WUFFTCxhQUFhO1lBQ2IsU0FBUyxlQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLDBDQUFFLGFBQWEsMENBQUUsU0FBUyxDQUFBO1NBQ2xFO1FBQ0QsSUFBSSxTQUFTLFlBQVksZUFBZSxFQUFFO1lBQ3hDLFNBQVMsQ0FBQyxnQkFBZ0IsR0FBRyxjQUFNLE9BQUEsVUFBVSxDQUFDLEtBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxFQUF6QyxDQUF5QyxDQUFBO1NBQzdFO0lBQ0gsQ0FBQzs7Z0JBbEJvQyxnQkFBZ0I7Z0JBQXFCLFVBQVU7O0lBSDNFO1FBQVIsS0FBSyxFQUFFOzs4REFBbUI7SUFDbEI7UUFBUixLQUFLLEVBQUU7OzJEQUFnQjtJQUZiLHNCQUFzQjtRQUhsQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBSSxlQUFlLE1BQUc7U0FDakMsQ0FBQzt5Q0FLcUMsZ0JBQWdCLEVBQXFCLFVBQVU7T0FKekUsc0JBQXNCLENBdUJsQztJQUFELDZCQUFDO0NBQUEsQUF2QkQsSUF1QkM7U0F2Qlksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBWaWV3Q29udGFpbmVyUmVmLCBFbGVtZW50UmVmLCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7IGNvbnRleHRTZWxlY3RvciB9IGZyb20gJy4uLy4uL2NvbnN0YW50cydcbmltcG9ydCB7IEJlYWdsZUNvbXBvbmVudCB9IGZyb20gJy4uL0JlYWdsZUNvbXBvbmVudCdcbmltcG9ydCB7IGdldENvbnRleHQgfSBmcm9tICcuL2NvbnRleHQnXG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogYFske2NvbnRleHRTZWxlY3Rvcn1dYCxcbn0pXG5leHBvcnQgY2xhc3MgQmVhZ2xlQ29udGV4dERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIF9lbGVtZW50SWQ6IHN0cmluZ1xuICBASW5wdXQoKSBfdmlld0lkOiBzdHJpbmdcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZiwgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGxldCBjb21wb25lbnRcblxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBpZiAobmcgJiYgdHlwZW9mIChuZy5nZXRDb21wb25lbnQpID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvL0lWWSBwcm92aWRlcyBuZy5nZXRDb21wb25lbnQgZnVuY3Rpb24gd2hlcmVhcyBvdGhlciB2ZXJzaW9ucyBkb24ndFxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgY29tcG9uZW50ID0gbmcuZ2V0Q29tcG9uZW50KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KVxuICAgIH0gZWxzZSB7XG4gICAgICBcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIGNvbXBvbmVudCA9IHRoaXMudmlld0NvbnRhaW5lclJlZi5fZGF0YT8uY29tcG9uZW50Vmlldz8uY29tcG9uZW50XG4gICAgfVxuICAgIGlmIChjb21wb25lbnQgaW5zdGFuY2VvZiBCZWFnbGVDb21wb25lbnQpIHtcbiAgICAgIGNvbXBvbmVudC5nZXRCZWFnbGVDb250ZXh0ID0gKCkgPT4gZ2V0Q29udGV4dCh0aGlzLl92aWV3SWQsIHRoaXMuX2VsZW1lbnRJZClcbiAgICB9XG4gIH1cbn1cbiJdfQ==