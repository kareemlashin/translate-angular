import { Component, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  dir = localStorage.getItem('dir') || 'ltr';
  rtl: boolean = this.dir == 'rtl' ? true : false;
  lang: any = '';

  constructor(private translate: TranslateService) {
    this.lang = localStorage.getItem('dir') == 'rtl' ? 'ar' : 'en';
    this.translate.use(this.lang);
  }
  option = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      760: {
        items: 3
      },
      1000: {
        items: 4
      }
    },
    nav: true
  };

  customOptions: OwlOptions = {
    ...this.option,
    rtl: false,

  };

  customOptions2: OwlOptions = {
    rtl: true,
    ...this.option,

  };
  useLanguage(lan: any) {
    if (lan == 'ar') {
      this.dir = "rtl";
      this.rtl = true;
      this.customOptions.rtl = true;
      localStorage.setItem('dir', 'rtl');
    } else {
      this.dir = "ltr";
      this.rtl = false;
      this.customOptions.rtl = false;
      localStorage.setItem('dir', 'ltr');

    }
    this.translate.use(lan);

  }
}
