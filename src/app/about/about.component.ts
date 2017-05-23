import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'about',
    templateUrl: 'about.component.html',
    styleUrls: ['about.component.scss', 'about.media.component.scss']
})
export class AboutComponent implements OnInit {

    about: string;
    Addresses: Array<Object>;
    constructor() { }

    ngOnInit() {
        this.about = "Hello, my name is Maciek. In case you didn't notice this is my personal website. Nice to see you scrolled down here! But back to me. I'm a web developer. Seriously. Since 2012 if you wonder. And I am a student, of course. I live in Wrocaw, Poland. But what about being a programmer, you ask? Well, I'm one too. I know stuff. Not whole bunch, but some. Do I like it? Of course I do. Everything I've made has been a pleasure. So, if I interested you go checkout my profiles. Hope you'd like it! Cheers.";

        this.Addresses = [
            { icon: 'linkedin', value: 'Maciej Bakowicz', link: 'https://www.linkedin.com/in/maciej-bakowicz-730b93141/' },
            { icon: 'paper-plane', value: 'kontakt@maciejbakowicz.pl', link: 'mailto:kontakt@maciejbakowicz.pl' },
            { icon: 'github', value: '@bakowroc', link: 'http://github.com/bakowroc' }
        ];
    }
}
