import { Directive , ElementRef } from "@angular/core";

@Directive({selector: '[backgroundBlue]'})

export class BackgroundBlue{
    constructor(public eleRef: ElementRef){
        this.eleRef.nativeElement.style.background = 'aqua';
    }
}
