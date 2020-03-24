import createCoreBeagleUIService from 'beagle-web';
var AbstractBeagleProvider = /** @class */ (function () {
    function AbstractBeagleProvider() {
    }
    AbstractBeagleProvider.prototype.start = function (baseUrl) {
        if (this.service) {
            console.error('Beagle service has already started!');
            return;
        }
        // @ts-ignore // fixme
        this.service = createCoreBeagleUIService({ baseUrl: baseUrl });
    };
    AbstractBeagleProvider.prototype.getBeagleUIService = function () {
        return this.service;
    };
    return AbstractBeagleProvider;
}());
export { AbstractBeagleProvider };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWJzdHJhY3RCZWFnbGVQcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2JlYWdsZS1hbmd1bGFyLyIsInNvdXJjZXMiOlsiQWJzdHJhY3RCZWFnbGVQcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLHlCQUE0QyxNQUFNLFlBQVksQ0FBQTtBQUVyRTtJQUFBO0lBZUEsQ0FBQztJQVpDLHNDQUFLLEdBQUwsVUFBOEIsT0FBZTtRQUMzQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFBO1lBQ3BELE9BQU07U0FDUDtRQUNELHNCQUFzQjtRQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLHlCQUF5QixDQUFTLEVBQUUsT0FBTyxTQUFBLEVBQUUsQ0FBQyxDQUFBO0lBQy9ELENBQUM7SUFFRCxtREFBa0IsR0FBbEI7UUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUE7SUFDckIsQ0FBQztJQUNILDZCQUFDO0FBQUQsQ0FBQyxBQWZELElBZUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCZWFnbGVBbmd1bGFyQ29uZmlnLCBCZWFnbGVBbmd1bGFyVUlTZXJ2aWNlIH0gZnJvbSAnLi90eXBlcydcbmltcG9ydCBjcmVhdGVDb3JlQmVhZ2xlVUlTZXJ2aWNlLCB7IERlZmF1bHRTY2hlbWEgfSBmcm9tICdiZWFnbGUtd2ViJ1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RCZWFnbGVQcm92aWRlciB7XG4gIHByaXZhdGUgc2VydmljZTogQmVhZ2xlQW5ndWxhclVJU2VydmljZSB8IHVuZGVmaW5lZFxuXG4gIHN0YXJ0PFNjaGVtYSA9IERlZmF1bHRTY2hlbWE+KGJhc2VVcmw6IHN0cmluZykge1xuICAgIGlmICh0aGlzLnNlcnZpY2UpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0JlYWdsZSBzZXJ2aWNlIGhhcyBhbHJlYWR5IHN0YXJ0ZWQhJylcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBAdHMtaWdub3JlIC8vIGZpeG1lXG4gICAgdGhpcy5zZXJ2aWNlID0gY3JlYXRlQ29yZUJlYWdsZVVJU2VydmljZTxTY2hlbWE+KHsgYmFzZVVybCB9KVxuICB9XG5cbiAgZ2V0QmVhZ2xlVUlTZXJ2aWNlKCkge1xuICAgIHJldHVybiB0aGlzLnNlcnZpY2VcbiAgfVxufVxuIl19