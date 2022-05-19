import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent implements OnInit {
  public myTitle: string;
  public collection$: Observable<Order[]>;
  public headers: string[];

  constructor(private ordersService: OrdersService) {
    this.myTitle = 'my list of orders';
    this.collection$ = this.ordersService.collection$;
    this.headers = [
      'type',
      'client',
      'nbjours',
      'tjmht',
      'total ht',
      'total ttc',
      'state',
    ];
  }

  ngOnInit(): void {}

  public changeTitle(): void {
    this.myTitle = 'title changed';
  }
}
