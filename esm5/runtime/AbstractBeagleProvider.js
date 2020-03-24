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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWJzdHJhY3RCZWFnbGVQcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2JlYWdsZS1hbmd1bGFyLyIsInNvdXJjZXMiOlsicnVudGltZS9BYnN0cmFjdEJlYWdsZVByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8seUJBQTRDLE1BQU0sWUFBWSxDQUFBO0FBRXJFO0lBQUE7SUFlQSxDQUFDO0lBWkMsc0NBQUssR0FBTCxVQUE4QixPQUFlO1FBQzNDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixPQUFPLENBQUMsS0FBSyxDQUFDLHFDQUFxQyxDQUFDLENBQUE7WUFDcEQsT0FBTTtTQUNQO1FBQ0Qsc0JBQXNCO1FBQ3RCLElBQUksQ0FBQyxPQUFPLEdBQUcseUJBQXlCLENBQVMsRUFBRSxPQUFPLFNBQUEsRUFBRSxDQUFDLENBQUE7SUFDL0QsQ0FBQztJQUVELG1EQUFrQixHQUFsQjtRQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQTtJQUNyQixDQUFDO0lBQ0gsNkJBQUM7QUFBRCxDQUFDLEFBZkQsSUFlQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJlYWdsZUFuZ3VsYXJDb25maWcsIEJlYWdsZUFuZ3VsYXJVSVNlcnZpY2UgfSBmcm9tICcuLi90eXBlcydcbmltcG9ydCBjcmVhdGVDb3JlQmVhZ2xlVUlTZXJ2aWNlLCB7IERlZmF1bHRTY2hlbWEgfSBmcm9tICdiZWFnbGUtd2ViJ1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RCZWFnbGVQcm92aWRlciB7XG4gIHByaXZhdGUgc2VydmljZTogQmVhZ2xlQW5ndWxhclVJU2VydmljZSB8IHVuZGVmaW5lZFxuXG4gIHN0YXJ0PFNjaGVtYSA9IERlZmF1bHRTY2hlbWE+KGJhc2VVcmw6IHN0cmluZykge1xuICAgIGlmICh0aGlzLnNlcnZpY2UpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0JlYWdsZSBzZXJ2aWNlIGhhcyBhbHJlYWR5IHN0YXJ0ZWQhJylcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBAdHMtaWdub3JlIC8vIGZpeG1lXG4gICAgdGhpcy5zZXJ2aWNlID0gY3JlYXRlQ29yZUJlYWdsZVVJU2VydmljZTxTY2hlbWE+KHsgYmFzZVVybCB9KVxuICB9XG5cbiAgZ2V0QmVhZ2xlVUlTZXJ2aWNlKCkge1xuICAgIHJldHVybiB0aGlzLnNlcnZpY2VcbiAgfVxufVxuIl19