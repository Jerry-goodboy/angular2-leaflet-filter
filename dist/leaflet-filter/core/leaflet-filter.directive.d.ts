/// <reference types="leaflet" />
import { EventEmitter, OnChanges, OnInit, SimpleChange } from '@angular/core';
import * as L from 'leaflet';
import '@asymmetrik/leaflet-filter';
import { LeafletDirective, LeafletDirectiveWrapper } from '@asymmetrik/angular2-leaflet';
export declare class LeafletFilterDirective implements OnChanges, OnInit {
    leafletDirective: LeafletDirectiveWrapper;
    filterControl: L.Control.FilterControl;
    featureGroup: L.FeatureGroup;
    filterOptions: L.Control.FilterControlOptions;
    filterState: any;
    filterStateChange: EventEmitter<any>;
    controlReady: EventEmitter<any>;
    constructor(leafletDirective: LeafletDirective);
    ngOnInit(): void;
    ngOnChanges(changes: {
        [key: string]: SimpleChange;
    }): void;
    initializeFilterOptions(options: L.Control.FilterControlOptions): L.Control.FilterControlOptions;
}
