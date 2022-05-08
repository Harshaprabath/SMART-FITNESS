import { Injectable } from '@angular/core'

export class WeightEvent {
    id: number;
    title: string;
    description: string;
    entranceFee: number;
    entrants: number;
    isActive: boolean;
}