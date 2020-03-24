import { __extends } from "tslib";
var BeagleError = /** @class */ (function (_super) {
    __extends(BeagleError, _super);
    function BeagleError(message) {
        var _this = _super.call(this, "Beagle: " + message) || this;
        _this.name = 'BeagleError';
        return _this;
    }
    return BeagleError;
}(Error));
export { BeagleError };
var BeagleMetadataError = /** @class */ (function (_super) {
    __extends(BeagleMetadataError, _super);
    function BeagleMetadataError() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'BeagleMetadataError';
        return _this;
    }
    return BeagleMetadataError;
}(BeagleError));
export { BeagleMetadataError };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3JzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYmVhZ2xlLWFuZ3VsYXIvIiwic291cmNlcyI6WyJlcnJvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0lBQWlDLCtCQUFLO0lBR3BDLHFCQUFZLE9BQWU7UUFBM0IsWUFDRSxrQkFBTSxhQUFXLE9BQVMsQ0FBQyxTQUM1QjtRQUpELFVBQUksR0FBRyxhQUFhLENBQUE7O0lBSXBCLENBQUM7SUFDSCxrQkFBQztBQUFELENBQUMsQUFORCxDQUFpQyxLQUFLLEdBTXJDOztBQUVEO0lBQXlDLHVDQUFXO0lBQXBEO1FBQUEscUVBRUM7UUFEQyxVQUFJLEdBQUcscUJBQXFCLENBQUE7O0lBQzlCLENBQUM7SUFBRCwwQkFBQztBQUFELENBQUMsQUFGRCxDQUF5QyxXQUFXLEdBRW5EIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEJlYWdsZUVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBuYW1lID0gJ0JlYWdsZUVycm9yJ1xuXG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZykge1xuICAgIHN1cGVyKGBCZWFnbGU6ICR7bWVzc2FnZX1gKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCZWFnbGVNZXRhZGF0YUVycm9yIGV4dGVuZHMgQmVhZ2xlRXJyb3Ige1xuICBuYW1lID0gJ0JlYWdsZU1ldGFkYXRhRXJyb3InXG59XG4iXX0=