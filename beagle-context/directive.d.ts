import { ViewContainerRef, ElementRef, OnInit } from '@angular/core';
export declare class BeagleContextDirective implements OnInit {
    viewContainerRef: ViewContainerRef;
    elementRef: ElementRef;
    _elementId: string;
    _viewId: string;
    constructor(viewContainerRef: ViewContainerRef, elementRef: ElementRef);
    ngOnInit(): void;
}
