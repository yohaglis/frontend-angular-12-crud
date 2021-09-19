import { Component, OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';
import { Producto } from 'src/app/modules/productos/interfaces/producto.interface';

const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements AfterViewInit {
  total$ = this._shoppingCartSvc.totalAction$;
  cart$ = this._shoppingCartSvc.cartAction$;

  displayedColumns: string[] = ['name', 'qty', 'price', 'subTotal'];
  dataSource: MatTableDataSource<Producto>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _shoppingCartSvc: ShoppingCartService) {
     // Assign the data to the data source for the table to render
     this.dataSource = new MatTableDataSource();

   }
   ngOnInit() {
    this.renderDataTable();
  }
   renderDataTable() {
    this._shoppingCartSvc.cartAction$
      .subscribe(
          x => {
    this.dataSource = new MatTableDataSource();
    this.dataSource.data = x;
    console.log(this.dataSource.data);
  },
  error => {
    console.log('There was an error while retrieving Usuarios!' + error);
  });
}

   ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
