import createCoreBeagleUIService from 'beagle-web';
var AbstractBeagleProvider = /** @class */ (function () {
    function AbstractBeagleProvider() {
    }
    AbstractBeagleProvider.prototype.start = function (config) {
        if (this.service) {
            console.error('Beagle service has already started!');
            return;
        }
        // @ts-ignore // fixme
        this.service = createCoreBeagleUIService(config);
    };
    AbstractBeagleProvider.prototype.getBeagleUIService = function () {
        return this.service;
    };
    return AbstractBeagleProvider;
}());
export { AbstractBeagleProvider };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWJzdHJhY3RCZWFnbGVQcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2JlYWdsZS1hbmd1bGFyLyIsInNvdXJjZXMiOlsicnVudGltZS9BYnN0cmFjdEJlYWdsZVByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8seUJBQTRDLE1BQU0sWUFBWSxDQUFBO0FBRXJFO0lBQUE7SUFlQSxDQUFDO0lBWkMsc0NBQUssR0FBTCxVQUE4QixNQUFtQztRQUMvRCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFBO1lBQ3BELE9BQU07U0FDUDtRQUNELHNCQUFzQjtRQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLHlCQUF5QixDQUFTLE1BQU0sQ0FBQyxDQUFBO0lBQzFELENBQUM7SUFFRCxtREFBa0IsR0FBbEI7UUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUE7SUFDckIsQ0FBQztJQUNILDZCQUFDO0FBQUQsQ0FBQyxBQWZELElBZUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCZWFnbGVBbmd1bGFyQ29uZmlnLCBCZWFnbGVBbmd1bGFyVUlTZXJ2aWNlIH0gZnJvbSAnLi4vdHlwZXMnXG5pbXBvcnQgY3JlYXRlQ29yZUJlYWdsZVVJU2VydmljZSwgeyBEZWZhdWx0U2NoZW1hIH0gZnJvbSAnYmVhZ2xlLXdlYidcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0QmVhZ2xlUHJvdmlkZXIge1xuICBwcml2YXRlIHNlcnZpY2U6IEJlYWdsZUFuZ3VsYXJVSVNlcnZpY2UgfCB1bmRlZmluZWRcblxuICBzdGFydDxTY2hlbWEgPSBEZWZhdWx0U2NoZW1hPihjb25maWc6IEJlYWdsZUFuZ3VsYXJDb25maWc8U2NoZW1hPikge1xuICAgIGlmICh0aGlzLnNlcnZpY2UpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0JlYWdsZSBzZXJ2aWNlIGhhcyBhbHJlYWR5IHN0YXJ0ZWQhJylcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBAdHMtaWdub3JlIC8vIGZpeG1lXG4gICAgdGhpcy5zZXJ2aWNlID0gY3JlYXRlQ29yZUJlYWdsZVVJU2VydmljZTxTY2hlbWE+KGNvbmZpZylcbiAgfVxuXG4gIGdldEJlYWdsZVVJU2VydmljZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zZXJ2aWNlXG4gIH1cbn1cbiJdfQ==