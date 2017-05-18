import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'about',
    templateUrl: 'about.component.html',
    styleUrls: ['about.component.scss']
})
export class AboutComponent implements OnInit {

    about: string;
    Addresses: Array<Object>;
    constructor() {  }

    ngOnInit() {
        this.about = "Hi, my name is Maciek and since 2012 I've been working as a freelancer webdeveloper / webdesigner. I live in Wrocław (Poland) and I'm studying at University of Technology (Politechnika Wrocławska). I have a knowledge about a few developer's languages. I keep in touch with webdev technologies whole time and try to spend every free moment on learning new ones. I did a lot of works for my customers. More or less complicated websites or graphic stuffs. Not so long ago I used to be an administrator of a medium webdesign / webdevelopment forum. Hope you enjoy my works and my code!";

        this.Addresses = [
            {icon: 'linkedin', value: 'Maciej Bakowicz', link: 'https://www.linkedin.com/in/maciej-bakowicz-730b93141/'},
            {icon: 'paper-plane', value: 'kontakt@maciejbakowicz.pl', link: 'mailto:kontakt@maciejbakowicz.pl'},
            {icon: 'github', value: '@bakowroc', link: 'http://github.com/bakowroc'}
        ];
    }
}
