import { Directive, ElementRef, Renderer } from '@angular/core';

// Directive decorator
@Directive({ selector: '[onScroll]' })
// Directive class
export class OnScrollDirective {
    constructor(el: ElementRef, renderer: Renderer) {
     // Use renderer to render the element with styles
        window.onscroll = function (e) {

            const standardBody = document.body;
            const welcome = el.nativeElement;
            welcome.style.transition = '0s all ease';
            welcome.style.transform = 'translateY(-' + standardBody.scrollTop/3 + 'px)';
            welcome.style.opacity = 120/standardBody.scrollTop


        }

    }
}
