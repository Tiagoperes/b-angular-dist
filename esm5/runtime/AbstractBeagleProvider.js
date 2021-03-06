import createCoreBeagleUIService from '@zup-it/beagle-web';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWJzdHJhY3RCZWFnbGVQcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2JlYWdsZS1hbmd1bGFyLyIsInNvdXJjZXMiOlsicnVudGltZS9BYnN0cmFjdEJlYWdsZVByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8seUJBQTRDLE1BQU0sb0JBQW9CLENBQUE7QUFHN0U7SUFBQTtJQWVBLENBQUM7SUFaQyxzQ0FBSyxHQUFMLFVBQThCLE1BQW1DO1FBQy9ELElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixPQUFPLENBQUMsS0FBSyxDQUFDLHFDQUFxQyxDQUFDLENBQUE7WUFDcEQsT0FBTTtTQUNQO1FBQ0Qsc0JBQXNCO1FBQ3RCLElBQUksQ0FBQyxPQUFPLEdBQUcseUJBQXlCLENBQVMsTUFBTSxDQUFDLENBQUE7SUFDMUQsQ0FBQztJQUVELG1EQUFrQixHQUFsQjtRQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQTtJQUNyQixDQUFDO0lBQ0gsNkJBQUM7QUFBRCxDQUFDLEFBZkQsSUFlQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcmVhdGVDb3JlQmVhZ2xlVUlTZXJ2aWNlLCB7IERlZmF1bHRTY2hlbWEgfSBmcm9tICdAenVwLWl0L2JlYWdsZS13ZWInXG5pbXBvcnQgeyBCZWFnbGVBbmd1bGFyQ29uZmlnLCBCZWFnbGVBbmd1bGFyVUlTZXJ2aWNlIH0gZnJvbSAnLi4vdHlwZXMnXG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdEJlYWdsZVByb3ZpZGVyIHtcbiAgcHJpdmF0ZSBzZXJ2aWNlOiBCZWFnbGVBbmd1bGFyVUlTZXJ2aWNlIHwgdW5kZWZpbmVkXG5cbiAgc3RhcnQ8U2NoZW1hID0gRGVmYXVsdFNjaGVtYT4oY29uZmlnOiBCZWFnbGVBbmd1bGFyQ29uZmlnPFNjaGVtYT4pIHtcbiAgICBpZiAodGhpcy5zZXJ2aWNlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdCZWFnbGUgc2VydmljZSBoYXMgYWxyZWFkeSBzdGFydGVkIScpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gQHRzLWlnbm9yZSAvLyBmaXhtZVxuICAgIHRoaXMuc2VydmljZSA9IGNyZWF0ZUNvcmVCZWFnbGVVSVNlcnZpY2U8U2NoZW1hPihjb25maWcpXG4gIH1cblxuICBnZXRCZWFnbGVVSVNlcnZpY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VydmljZVxuICB9XG59XG4iXX0=