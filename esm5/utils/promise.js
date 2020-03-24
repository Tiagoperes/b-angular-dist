export function createStaticPromise() {
    var staticPromise = {};
    staticPromise.promise = new Promise(function (resolve, reject) {
        staticPromise.resolve = resolve;
        staticPromise.reject = reject;
    });
    return staticPromise;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvbWlzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2JlYWdsZS1hbmd1bGFyLyIsInNvdXJjZXMiOlsidXRpbHMvcHJvbWlzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQSxNQUFNLFVBQVUsbUJBQW1CO0lBQ2pDLElBQU0sYUFBYSxHQUE4QixFQUFFLENBQUE7SUFFbkQsYUFBYSxDQUFDLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1FBQ2xELGFBQWEsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFBO1FBQy9CLGFBQWEsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFBO0lBQy9CLENBQUMsQ0FBQyxDQUFBO0lBRUYsT0FBTyxhQUFpQyxDQUFBO0FBQzFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIFN0YXRpY1Byb21pc2U8VD4ge1xuICByZXNvbHZlOiAodmFsdWU6IGFueSkgPT4gdm9pZCxcbiAgcmVqZWN0OiAoZXJyb3I6IGFueSkgPT4gdm9pZCxcbiAgcHJvbWlzZTogUHJvbWlzZTxUPixcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN0YXRpY1Byb21pc2U8VCA9IGFueT4oKSB7XG4gIGNvbnN0IHN0YXRpY1Byb21pc2U6IFBhcnRpYWw8U3RhdGljUHJvbWlzZTxUPj4gPSB7fVxuXG4gIHN0YXRpY1Byb21pc2UucHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBzdGF0aWNQcm9taXNlLnJlc29sdmUgPSByZXNvbHZlXG4gICAgc3RhdGljUHJvbWlzZS5yZWplY3QgPSByZWplY3RcbiAgfSlcblxuICByZXR1cm4gc3RhdGljUHJvbWlzZSBhcyBTdGF0aWNQcm9taXNlPFQ+XG59Il19