import { EventEmitter } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { Component, Input, Output} from '@angular/core';
import { Producto } from '../interfaces/producto.interface';
import { FlexLayoutModule } from '@angular/flex-layout';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductoComponent {
  @Input() producto!: Producto;
  @Output() addToCartClick = new EventEmitter<Producto>()

  onClick(): void{
    this.addToCartClick.emit(this.producto);
  }
}
