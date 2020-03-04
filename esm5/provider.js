import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import createCoreBeagleUIService from 'beagle-web';
var BeagleProvider = /** @class */ (function () {
    function BeagleProvider() {
    }
    BeagleProvider.prototype.start = function (config) {
        if (this.service) {
            console.error('Beagle service has already started!');
            return;
        }
        // @ts-ignore // fixme
        this.service = createCoreBeagleUIService(config);
    };
    BeagleProvider.prototype.getBeagleUIService = function () {
        return this.service;
    };
    BeagleProvider = __decorate([
        Injectable()
    ], BeagleProvider);
    return BeagleProvider;
}());
export { BeagleProvider };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmlkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9iZWFnbGUtYW5ndWxhci8iLCJzb3VyY2VzIjpbInByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBRTFDLE9BQU8seUJBQTRDLE1BQU0sWUFBWSxDQUFBO0FBR3JFO0lBQUE7SUFlQSxDQUFDO0lBWkMsOEJBQUssR0FBTCxVQUE4QixNQUFtQztRQUMvRCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFBO1lBQ3BELE9BQU07U0FDUDtRQUNELHNCQUFzQjtRQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLHlCQUF5QixDQUFTLE1BQU0sQ0FBQyxDQUFBO0lBQzFELENBQUM7SUFFRCwyQ0FBa0IsR0FBbEI7UUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUE7SUFDckIsQ0FBQztJQWRVLGNBQWM7UUFEMUIsVUFBVSxFQUFFO09BQ0EsY0FBYyxDQWUxQjtJQUFELHFCQUFDO0NBQUEsQUFmRCxJQWVDO1NBZlksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHsgQmVhZ2xlQW5ndWxhckNvbmZpZywgQmVhZ2xlQW5ndWxhclVJU2VydmljZSB9IGZyb20gJy4vdHlwZXMnXG5pbXBvcnQgY3JlYXRlQ29yZUJlYWdsZVVJU2VydmljZSwgeyBEZWZhdWx0U2NoZW1hIH0gZnJvbSAnYmVhZ2xlLXdlYidcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJlYWdsZVByb3ZpZGVyIHtcbiAgcHJpdmF0ZSBzZXJ2aWNlOiBCZWFnbGVBbmd1bGFyVUlTZXJ2aWNlIHwgdW5kZWZpbmVkXG5cbiAgc3RhcnQ8U2NoZW1hID0gRGVmYXVsdFNjaGVtYT4oY29uZmlnOiBCZWFnbGVBbmd1bGFyQ29uZmlnPFNjaGVtYT4pIHtcbiAgICBpZiAodGhpcy5zZXJ2aWNlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdCZWFnbGUgc2VydmljZSBoYXMgYWxyZWFkeSBzdGFydGVkIScpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gQHRzLWlnbm9yZSAvLyBmaXhtZVxuICAgIHRoaXMuc2VydmljZSA9IGNyZWF0ZUNvcmVCZWFnbGVVSVNlcnZpY2U8U2NoZW1hPihjb25maWcpXG4gIH1cblxuICBnZXRCZWFnbGVVSVNlcnZpY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VydmljZVxuICB9XG59XG4iXX0=