import { findById } from 'beagle-web/dist/utils/tree-reading';
import { selector, viewIdAttributeName } from './constants';
const views = {};
function createContext(view, elementId) {
    return {
        replace: (params) => (view.updateWithFetch(params, elementId, 'replace')),
        append: (params) => (view.updateWithFetch(params, elementId, 'append')),
        prepend: (params) => (view.updateWithFetch(params, elementId, 'prepend')),
        getElementId: () => elementId,
        getElement: () => findById(view.getTree(), elementId),
        getView: () => view
    };
}
function getContextByViewIdAndElementId(viewId, elementId) {
    const view = views[viewId];
    if (!viewId)
        throw Error(`Beagle: getContext couldn\'t find view with id ${viewId}`);
    return createContext(view, elementId);
}
export function getContext(viewRef) {
    const viewId = viewRef.element.nativeElement.closest(selector).getAttribute(viewIdAttributeName);
    const elementId = viewRef.element.nativeElement.id;
    return getContextByViewIdAndElementId(viewId, elementId);
}
export function registerView(viewId, view) {
    views[viewId] = view;
}
export function unregisterView(viewId) {
    delete views[viewId];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2JlYWdsZS1hbmd1bGFyLyIsInNvdXJjZXMiOlsiY29udGV4dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0NBQW9DLENBQUE7QUFFN0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGFBQWEsQ0FBQTtBQUczRCxNQUFNLEtBQUssR0FBK0IsRUFBRSxDQUFBO0FBRTVDLFNBQVMsYUFBYSxDQUFDLElBQWdCLEVBQUUsU0FBaUI7SUFDeEQsT0FBTztRQUNMLE9BQU8sRUFBRSxDQUFDLE1BQWtCLEVBQUUsRUFBRSxDQUFDLENBQy9CLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FDbkQ7UUFDRCxNQUFNLEVBQUUsQ0FBQyxNQUFrQixFQUFFLEVBQUUsQ0FBQyxDQUM5QixJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQ2xEO1FBQ0QsT0FBTyxFQUFFLENBQUMsTUFBa0IsRUFBRSxFQUFFLENBQUMsQ0FDL0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUNuRDtRQUNELFlBQVksRUFBRSxHQUFHLEVBQUUsQ0FBQyxTQUFTO1FBQzdCLFVBQVUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLFNBQVMsQ0FBQztRQUNyRCxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSTtLQUNwQixDQUFBO0FBQ0gsQ0FBQztBQUVELFNBQVMsOEJBQThCLENBQUMsTUFBYyxFQUFFLFNBQWlCO0lBQ3ZFLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUMxQixJQUFJLENBQUMsTUFBTTtRQUFFLE1BQU0sS0FBSyxDQUFDLGtEQUFrRCxNQUFNLEVBQUUsQ0FBQyxDQUFBO0lBQ3BGLE9BQU8sYUFBYSxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQTtBQUN2QyxDQUFDO0FBRUQsTUFBTSxVQUFVLFVBQVUsQ0FBQyxPQUF5QjtJQUNsRCxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLG1CQUFtQixDQUFDLENBQUE7SUFDaEcsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFBO0lBQ2xELE9BQU8sOEJBQThCLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFBO0FBQzFELENBQUM7QUFFRCxNQUFNLFVBQVUsWUFBWSxDQUFDLE1BQU0sRUFBRSxJQUFnQjtJQUNuRCxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFBO0FBQ3RCLENBQUM7QUFFRCxNQUFNLFVBQVUsY0FBYyxDQUFDLE1BQU07SUFDbkMsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUE7QUFDdEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJlYWdsZVZpZXcsIExvYWRQYXJhbXMgfSBmcm9tICdiZWFnbGUtd2ViJ1xuaW1wb3J0IHsgZmluZEJ5SWQgfSBmcm9tICdiZWFnbGUtd2ViL2Rpc3QvdXRpbHMvdHJlZS1yZWFkaW5nJ1xuaW1wb3J0IHsgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQgeyBzZWxlY3Rvciwgdmlld0lkQXR0cmlidXRlTmFtZSB9IGZyb20gJy4vY29uc3RhbnRzJ1xuaW1wb3J0IHsgQmVhZ2xlQ29udGV4dCB9IGZyb20gJy4vdHlwZXMnXG5cbmNvbnN0IHZpZXdzOiBSZWNvcmQ8c3RyaW5nLCBCZWFnbGVWaWV3PiA9IHt9XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRleHQodmlldzogQmVhZ2xlVmlldywgZWxlbWVudElkOiBzdHJpbmcpOiBCZWFnbGVDb250ZXh0IHtcbiAgcmV0dXJuIHtcbiAgICByZXBsYWNlOiAocGFyYW1zOiBMb2FkUGFyYW1zKSA9PiAoXG4gICAgICB2aWV3LnVwZGF0ZVdpdGhGZXRjaChwYXJhbXMsIGVsZW1lbnRJZCwgJ3JlcGxhY2UnKVxuICAgICksXG4gICAgYXBwZW5kOiAocGFyYW1zOiBMb2FkUGFyYW1zKSA9PiAoXG4gICAgICB2aWV3LnVwZGF0ZVdpdGhGZXRjaChwYXJhbXMsIGVsZW1lbnRJZCwgJ2FwcGVuZCcpXG4gICAgKSxcbiAgICBwcmVwZW5kOiAocGFyYW1zOiBMb2FkUGFyYW1zKSA9PiAoXG4gICAgICB2aWV3LnVwZGF0ZVdpdGhGZXRjaChwYXJhbXMsIGVsZW1lbnRJZCwgJ3ByZXBlbmQnKVxuICAgICksXG4gICAgZ2V0RWxlbWVudElkOiAoKSA9PiBlbGVtZW50SWQsXG4gICAgZ2V0RWxlbWVudDogKCkgPT4gZmluZEJ5SWQodmlldy5nZXRUcmVlKCksIGVsZW1lbnRJZCksXG4gICAgZ2V0VmlldzogKCkgPT4gdmlld1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldENvbnRleHRCeVZpZXdJZEFuZEVsZW1lbnRJZCh2aWV3SWQ6IHN0cmluZywgZWxlbWVudElkOiBzdHJpbmcpIHtcbiAgY29uc3QgdmlldyA9IHZpZXdzW3ZpZXdJZF1cbiAgaWYgKCF2aWV3SWQpIHRocm93IEVycm9yKGBCZWFnbGU6IGdldENvbnRleHQgY291bGRuXFwndCBmaW5kIHZpZXcgd2l0aCBpZCAke3ZpZXdJZH1gKVxuICByZXR1cm4gY3JlYXRlQ29udGV4dCh2aWV3LCBlbGVtZW50SWQpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb250ZXh0KHZpZXdSZWY6IFZpZXdDb250YWluZXJSZWYpIHtcbiAgY29uc3Qgdmlld0lkID0gdmlld1JlZi5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2xvc2VzdChzZWxlY3RvcikuZ2V0QXR0cmlidXRlKHZpZXdJZEF0dHJpYnV0ZU5hbWUpXG4gIGNvbnN0IGVsZW1lbnRJZCA9IHZpZXdSZWYuZWxlbWVudC5uYXRpdmVFbGVtZW50LmlkXG4gIHJldHVybiBnZXRDb250ZXh0QnlWaWV3SWRBbmRFbGVtZW50SWQodmlld0lkLCBlbGVtZW50SWQpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlclZpZXcodmlld0lkLCB2aWV3OiBCZWFnbGVWaWV3KSB7XG4gIHZpZXdzW3ZpZXdJZF0gPSB2aWV3XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnJlZ2lzdGVyVmlldyh2aWV3SWQpIHtcbiAgZGVsZXRlIHZpZXdzW3ZpZXdJZF1cbn1cbiJdfQ==