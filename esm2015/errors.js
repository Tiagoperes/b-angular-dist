export class BeagleError extends Error {
    constructor(message) {
        super(`Beagle: ${message}`);
        this.name = 'BeagleError';
    }
}
export class BeagleMetadataError extends BeagleError {
    constructor() {
        super(...arguments);
        this.name = 'BeagleMetadataError';
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3JzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYmVhZ2xlLWFuZ3VsYXIvIiwic291cmNlcyI6WyJlcnJvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxPQUFPLFdBQVksU0FBUSxLQUFLO0lBR3BDLFlBQVksT0FBZTtRQUN6QixLQUFLLENBQUMsV0FBVyxPQUFPLEVBQUUsQ0FBQyxDQUFBO1FBSDdCLFNBQUksR0FBRyxhQUFhLENBQUE7SUFJcEIsQ0FBQztDQUNGO0FBRUQsTUFBTSxPQUFPLG1CQUFvQixTQUFRLFdBQVc7SUFBcEQ7O1FBQ0UsU0FBSSxHQUFHLHFCQUFxQixDQUFBO0lBQzlCLENBQUM7Q0FBQSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBCZWFnbGVFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgbmFtZSA9ICdCZWFnbGVFcnJvcidcblxuICBjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICBzdXBlcihgQmVhZ2xlOiAke21lc3NhZ2V9YClcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQmVhZ2xlTWV0YWRhdGFFcnJvciBleHRlbmRzIEJlYWdsZUVycm9yIHtcbiAgbmFtZSA9ICdCZWFnbGVNZXRhZGF0YUVycm9yJ1xufVxuIl19