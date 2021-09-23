import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

const MENUITEMS = [
  { state: 'productos', name: 'Products', type: 'link', icon: 'av_timer' },
  { state: 'about', type: 'link', name: 'About us', icon: 'crop_7_5' },
  { state: 'contact', type: 'link', name: 'Contact', icon: 'view_comfy' }
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
