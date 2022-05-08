import { Injectable } from '@angular/core';

export class Agenda {
   
    id: number;
    title: string;
    description: string;
    time: string;
    date: Date;
    
    isActive:boolean;
    
}