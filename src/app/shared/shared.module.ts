import { NgModule } from '@angular/core';
import { MenuItems } from './menu-items/menu-items';
import { AccordionAnchorDirective, AccordionLinkDirective, AccordionDirective } from './accordion';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HeaderComponent } from './layout/header/header.component';
import { cartComponent } from './layout/cart/cart.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { SpinnerComponent } from './spinner/spinner.component';



const components = [
SidebarComponent,
HeaderComponent,
cartComponent,
SpinnerComponent
];
@NgModule({
  declarations: [
    components,
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FlexLayoutModule
  ],
  exports: [
    components,
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    FlexLayoutModule,
    MaterialModule
   ],
  providers: [ MenuItems ]
})
export class SharedModule { }

