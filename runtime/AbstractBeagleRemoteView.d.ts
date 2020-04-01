import { AfterViewInit, OnDestroy, OnChanges, SimpleChanges, ChangeDetectorRef, NgZone, TemplateRef } from '@angular/core';
import { LoadParams, BeagleView, IdentifiableBeagleUIElement } from '@zup-it/beagle-web';
import { AbstractBeagleProvider } from './AbstractBeagleProvider';
export declare abstract class AbstractBeagleRemoteView implements AfterViewInit, OnDestroy, OnChanges {
    loadParams: LoadParams;
    tree: IdentifiableBeagleUIElement<any>;
    view: BeagleView;
    viewId: string;
    beagleProvider: AbstractBeagleProvider;
    ngZone: NgZone;
    changeDetector: ChangeDetectorRef;
    viewStaticPromise: import("./utils/promise").StaticPromise<BeagleView<Record<string, Record<string, any>>>>;
    constructor(beagleProvider?: AbstractBeagleProvider, ngZone?: NgZone, changeDetector?: ChangeDetectorRef);
    createBeagleView(): void;
    getTemplate(componentName: IdentifiableBeagleUIElement<any>['type']): TemplateRef<any>;
    updateView: (uiTree: IdentifiableBeagleUIElement<any>) => void;
    elementIdentity(index: number, element: IdentifiableBeagleUIElement<any>): string;
    getView(): Promise<BeagleView<Record<string, Record<string, any>>>>;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): Promise<void>;
    ngOnDestroy(): void;
}
