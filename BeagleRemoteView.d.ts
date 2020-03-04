import { AfterViewInit, OnDestroy, OnChanges, SimpleChanges, ChangeDetectorRef, NgZone, TemplateRef } from '@angular/core';
import { BeagleProvider } from './provider';
import { LoadParams, BeagleView, BeagleUIElement } from 'beagle-web';
export declare abstract class BeagleRemoteView implements AfterViewInit, OnDestroy, OnChanges {
    loadParams: LoadParams;
    tree: BeagleUIElement<any>;
    view: BeagleView;
    viewId: string;
    ngZone: NgZone;
    changeDetector: ChangeDetectorRef;
    constructor(beagleProvider: BeagleProvider, ngZone: NgZone, changeDetector: ChangeDetectorRef);
    getTemplate(componentName: BeagleUIElement<any>['type']): TemplateRef<any>;
    updateView: (uiTree: BeagleUIElement<any>) => void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): Promise<void>;
    ngOnDestroy(): void;
}
