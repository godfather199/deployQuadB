import { Component, OnInit } from '@angular/core';
import {UtilService} from '../../services/util.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  product_Content: any= [];

  constructor(private utilService: UtilService) { }

  ngOnInit(): void {
    this.utilService.getFunction()
      .subscribe((response) => {
        this.product_Content= response;
        console.log(response);
      });
  }

}
