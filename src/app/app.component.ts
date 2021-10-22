import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public data = [
    {name: 'Mfuon Leonard', email: 'test@gmail.com', website: 'bfb.com'},
    {name: 'Leo', email: 'leonard@gmail.com', website: 'bb.com'},
    {name: 'Francis', email: 'tesddt@gmail.com', website: 'uiioo.com'},
    {name: 'Angela', email: 'teqweqwest@gmail.com', website: 'oo.com'},
    {name: 'Antony', email: 'antony@gmail.com', website: 'bb.com'},
  ];
  title = 'Data tables';
  dtOptions: any = {};

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10, //should be dynamic
      processing: true,
      lengthMenu : [10, 20, 30],
      dom: 'Bfrtip',
      buttons: [
        'copy', 'csv', 'excel', 'print'
      ]
    };
  }
}
