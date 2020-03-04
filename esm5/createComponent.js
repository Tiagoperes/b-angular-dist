import { __read } from "tslib";
function kebabToCamelCase(str) {
    return str.replace(/-\w/g, function (_a) {
        var _b = __read(_a, 2), _ = _b[0], letter = _b[1];
        return letter.toUpperCase();
    });
}
function getComponentAnnotations(component) {
    return component.__annotations__[0];
}
function getComponentInputs(component) {
    var props = component.__prop__metadata__ || {};
    var propNames = Object.keys(props);
    return propNames.filter(function (name) {
        var decoratorKeys = Object.keys(props[name][0]);
        var isInput = decoratorKeys.indexOf('bindingPropertyName') !== -1;
        return isInput;
    });
}
function createTemplateForComponent(selector, inputs) {
    var templateName = kebabToCamelCase(selector);
    var templateInputs = inputs.map(function (input) { return "let-" + input + "=\"" + input + "\""; }).join(' ');
    var componentInputs = inputs.map(function (input) { return input === 'onChange' ? "(" + input + ")=\"" + input + "\"" : "[" + input + "]=\"" + input + "\""; }).join(' ');
    return "\n    <ng-template #" + templateName + " " + templateInputs + " let-children=\"children\">\n      <" + selector + " " + componentInputs + ">\n        <ng-container *ngFor=\"let child of children\">\n          <ng-container *ngTemplateOutlet=\"getTemplate(child.type);context:child\"></ng-container>\n        </ng-container>\n      </" + selector + ">\n    </ng-template>\n  ";
}
function createTemplate(components) {
    var componentTemplates = components.map(function (componentType) {
        var selector = getComponentAnnotations(componentType).selector;
        var inputs = getComponentInputs(componentType);
        return createTemplateForComponent(selector, inputs);
    });
    var container = "\n    <ng-container #__view_container>\n      <ng-container *ngIf=\"!!tree\">\n        <ng-container *ngTemplateOutlet=\"getTemplate(tree.type);context:tree\">\n        </ng-container>\n      </ng-container>\n    </ng-container>\n  ";
    return "" + componentTemplates.join('') + container;
}
function createBeagleComponent(components) {
    // const componentNames = Object.keys(components)
    // const componentTypes = Object.values(components)
    // const template = createTemplate(componentTypes)
    // const inputs = ['loadParams']
    // const queries = componentNames.reduce((result, name) => {
    //   const selector = getComponentAnnotations(components[name]).selector
    //   const templateName = kebabToCamelCase(selector)
    //   return { ...result, [name]: new ViewChild(templateName) }
    // }, {})
    // return Component({
    //   template,
    //   selector,
    //   inputs,
    //   queries,
    // })(BeagleRemoteView)
}
export default createBeagleComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlQ29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYmVhZ2xlLWFuZ3VsYXIvIiwic291cmNlcyI6WyJjcmVhdGVDb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQVFBLFNBQVMsZ0JBQWdCLENBQUMsR0FBVztJQUNuQyxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLFVBQUMsRUFBVztZQUFYLGtCQUFXLEVBQVYsU0FBQyxFQUFFLGNBQU07UUFBTSxPQUFBLE1BQU0sQ0FBQyxXQUFXLEVBQUU7SUFBcEIsQ0FBb0IsQ0FBQyxDQUFBO0FBQ25FLENBQUM7QUFFRCxTQUFTLHVCQUF1QixDQUFDLFNBQW9CO0lBQ25ELE9BQVEsU0FBaUIsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFDOUMsQ0FBQztBQUVELFNBQVMsa0JBQWtCLENBQUMsU0FBb0I7SUFDOUMsSUFBTSxLQUFLLEdBQUksU0FBaUIsQ0FBQyxrQkFBa0IsSUFBSSxFQUFFLENBQUE7SUFDekQsSUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUNwQyxPQUFPLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBQyxJQUFJO1FBQzNCLElBQU0sYUFBYSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDakQsSUFBTSxPQUFPLEdBQUcsYUFBYSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO1FBQ25FLE9BQU8sT0FBTyxDQUFBO0lBQ2hCLENBQUMsQ0FBQyxDQUFBO0FBQ0osQ0FBQztBQUVELFNBQVMsMEJBQTBCLENBQUMsUUFBZ0IsRUFBRSxNQUFnQjtJQUNwRSxJQUFNLFlBQVksR0FBRyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUMvQyxJQUFNLGNBQWMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsU0FBTyxLQUFLLFdBQUssS0FBSyxPQUFHLEVBQXpCLENBQXlCLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDL0UsSUFBTSxlQUFlLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDLE1BQUksS0FBSyxZQUFNLEtBQUssT0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFJLEtBQUssWUFBTSxLQUFLLE9BQUcsRUFBeEUsQ0FBd0UsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUMvSCxPQUFPLHlCQUNXLFlBQVksU0FBSSxjQUFjLDRDQUN6QyxRQUFRLFNBQUksZUFBZSwwTUFJMUIsUUFBUSw4QkFFZixDQUFBO0FBQ0gsQ0FBQztBQUVELFNBQVMsY0FBYyxDQUFDLFVBQXVCO0lBQzdDLElBQU0sa0JBQWtCLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxVQUFDLGFBQWtCO1FBQzNELElBQU0sUUFBUSxHQUFHLHVCQUF1QixDQUFDLGFBQWEsQ0FBQyxDQUFDLFFBQVEsQ0FBQTtRQUNoRSxJQUFNLE1BQU0sR0FBRyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsQ0FBQTtRQUNoRCxPQUFPLDBCQUEwQixDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQTtJQUNyRCxDQUFDLENBQUMsQ0FBQTtJQUVGLElBQU0sU0FBUyxHQUFHLDBPQU9qQixDQUFBO0lBRUQsT0FBTyxLQUFHLGtCQUFrQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFXLENBQUE7QUFDckQsQ0FBQztBQUVELFNBQVMscUJBQXFCLENBQzVCLFVBQXFDO0lBRXJDLGlEQUFpRDtJQUNqRCxtREFBbUQ7SUFDbkQsa0RBQWtEO0lBQ2xELGdDQUFnQztJQUNoQyw0REFBNEQ7SUFDNUQsd0VBQXdFO0lBQ3hFLG9EQUFvRDtJQUNwRCw4REFBOEQ7SUFDOUQsU0FBUztJQUVULHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsY0FBYztJQUNkLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0FBQ3pCLENBQUM7QUFFRCxlQUFlLHFCQUFxQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgVHlwZSxcclxuICBWaWV3Q2hpbGQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuaW1wb3J0IHsgc2VsZWN0b3IgfSBmcm9tICcuL2NvbnN0YW50cydcclxuaW1wb3J0IHsgQmVhZ2xlUmVtb3RlVmlldyB9IGZyb20gJy4vQmVhZ2xlUmVtb3RlVmlldydcclxuXHJcbmZ1bmN0aW9uIGtlYmFiVG9DYW1lbENhc2Uoc3RyOiBzdHJpbmcpIHtcclxuICByZXR1cm4gc3RyLnJlcGxhY2UoLy1cXHcvZywgKFtfLCBsZXR0ZXJdKSA9PiBsZXR0ZXIudG9VcHBlckNhc2UoKSlcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50QW5ub3RhdGlvbnMoY29tcG9uZW50OiBUeXBlPGFueT4pIHtcclxuICByZXR1cm4gKGNvbXBvbmVudCBhcyBhbnkpLl9fYW5ub3RhdGlvbnNfX1swXVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRDb21wb25lbnRJbnB1dHMoY29tcG9uZW50OiBUeXBlPGFueT4pIHtcclxuICBjb25zdCBwcm9wcyA9IChjb21wb25lbnQgYXMgYW55KS5fX3Byb3BfX21ldGFkYXRhX18gfHwge31cclxuICBjb25zdCBwcm9wTmFtZXMgPSBPYmplY3Qua2V5cyhwcm9wcylcclxuICByZXR1cm4gcHJvcE5hbWVzLmZpbHRlcigobmFtZSkgPT4ge1xyXG4gICAgY29uc3QgZGVjb3JhdG9yS2V5cyA9IE9iamVjdC5rZXlzKHByb3BzW25hbWVdWzBdKVxyXG4gICAgY29uc3QgaXNJbnB1dCA9IGRlY29yYXRvcktleXMuaW5kZXhPZignYmluZGluZ1Byb3BlcnR5TmFtZScpICE9PSAtMVxyXG4gICAgcmV0dXJuIGlzSW5wdXRcclxuICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUZW1wbGF0ZUZvckNvbXBvbmVudChzZWxlY3Rvcjogc3RyaW5nLCBpbnB1dHM6IHN0cmluZ1tdKSB7XHJcbiAgY29uc3QgdGVtcGxhdGVOYW1lID0ga2ViYWJUb0NhbWVsQ2FzZShzZWxlY3RvcilcclxuICBjb25zdCB0ZW1wbGF0ZUlucHV0cyA9IGlucHV0cy5tYXAoaW5wdXQgPT4gYGxldC0ke2lucHV0fT1cIiR7aW5wdXR9XCJgKS5qb2luKCcgJylcclxuICBjb25zdCBjb21wb25lbnRJbnB1dHMgPSBpbnB1dHMubWFwKGlucHV0ID0+IGlucHV0ID09PSAnb25DaGFuZ2UnID8gYCgke2lucHV0fSk9XCIke2lucHV0fVwiYCA6IGBbJHtpbnB1dH1dPVwiJHtpbnB1dH1cImApLmpvaW4oJyAnKVxyXG4gIHJldHVybiBgXHJcbiAgICA8bmctdGVtcGxhdGUgIyR7dGVtcGxhdGVOYW1lfSAke3RlbXBsYXRlSW5wdXRzfSBsZXQtY2hpbGRyZW49XCJjaGlsZHJlblwiPlxyXG4gICAgICA8JHtzZWxlY3Rvcn0gJHtjb21wb25lbnRJbnB1dHN9PlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGNoaWxkIG9mIGNoaWxkcmVuXCI+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiZ2V0VGVtcGxhdGUoY2hpbGQudHlwZSk7Y29udGV4dDpjaGlsZFwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8LyR7c2VsZWN0b3J9PlxyXG4gICAgPC9uZy10ZW1wbGF0ZT5cclxuICBgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRlbXBsYXRlKGNvbXBvbmVudHM6IFR5cGU8YW55PltdKSB7XHJcbiAgY29uc3QgY29tcG9uZW50VGVtcGxhdGVzID0gY29tcG9uZW50cy5tYXAoKGNvbXBvbmVudFR5cGU6IGFueSkgPT4ge1xyXG4gICAgY29uc3Qgc2VsZWN0b3IgPSBnZXRDb21wb25lbnRBbm5vdGF0aW9ucyhjb21wb25lbnRUeXBlKS5zZWxlY3RvclxyXG4gICAgY29uc3QgaW5wdXRzID0gZ2V0Q29tcG9uZW50SW5wdXRzKGNvbXBvbmVudFR5cGUpXHJcbiAgICByZXR1cm4gY3JlYXRlVGVtcGxhdGVGb3JDb21wb25lbnQoc2VsZWN0b3IsIGlucHV0cylcclxuICB9KVxyXG5cclxuICBjb25zdCBjb250YWluZXIgPSBgXHJcbiAgICA8bmctY29udGFpbmVyICNfX3ZpZXdfY29udGFpbmVyPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiISF0cmVlXCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImdldFRlbXBsYXRlKHRyZWUudHlwZSk7Y29udGV4dDp0cmVlXCI+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgYFxyXG5cclxuICByZXR1cm4gYCR7Y29tcG9uZW50VGVtcGxhdGVzLmpvaW4oJycpfSR7Y29udGFpbmVyfWBcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQmVhZ2xlQ29tcG9uZW50KFxyXG4gIGNvbXBvbmVudHM6IFJlY29yZDxzdHJpbmcsIFR5cGU8YW55Pj4sXHJcbikge1xyXG4gIC8vIGNvbnN0IGNvbXBvbmVudE5hbWVzID0gT2JqZWN0LmtleXMoY29tcG9uZW50cylcclxuICAvLyBjb25zdCBjb21wb25lbnRUeXBlcyA9IE9iamVjdC52YWx1ZXMoY29tcG9uZW50cylcclxuICAvLyBjb25zdCB0ZW1wbGF0ZSA9IGNyZWF0ZVRlbXBsYXRlKGNvbXBvbmVudFR5cGVzKVxyXG4gIC8vIGNvbnN0IGlucHV0cyA9IFsnbG9hZFBhcmFtcyddXHJcbiAgLy8gY29uc3QgcXVlcmllcyA9IGNvbXBvbmVudE5hbWVzLnJlZHVjZSgocmVzdWx0LCBuYW1lKSA9PiB7XHJcbiAgLy8gICBjb25zdCBzZWxlY3RvciA9IGdldENvbXBvbmVudEFubm90YXRpb25zKGNvbXBvbmVudHNbbmFtZV0pLnNlbGVjdG9yXHJcbiAgLy8gICBjb25zdCB0ZW1wbGF0ZU5hbWUgPSBrZWJhYlRvQ2FtZWxDYXNlKHNlbGVjdG9yKVxyXG4gIC8vICAgcmV0dXJuIHsgLi4ucmVzdWx0LCBbbmFtZV06IG5ldyBWaWV3Q2hpbGQodGVtcGxhdGVOYW1lKSB9XHJcbiAgLy8gfSwge30pXHJcblxyXG4gIC8vIHJldHVybiBDb21wb25lbnQoe1xyXG4gIC8vICAgdGVtcGxhdGUsXHJcbiAgLy8gICBzZWxlY3RvcixcclxuICAvLyAgIGlucHV0cyxcclxuICAvLyAgIHF1ZXJpZXMsXHJcbiAgLy8gfSkoQmVhZ2xlUmVtb3RlVmlldylcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQmVhZ2xlQ29tcG9uZW50XHJcbiJdfQ==