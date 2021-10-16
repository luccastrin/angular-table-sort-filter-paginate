import { Component, OnInit } from '@angular/core';
import { Table } from './table.model';
import { TableService } from './table.service';

@Component({
  selector: 'app-table',
  templateUrl: 'table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {
  tableHeader: any[] = [null, 'Nome', 'Email', 'Corpo', 'Teste', 'Teste'];
  tableContent!: Table[];

  constructor(private tableService: TableService) { }

  ngOnInit() {
    this.getComments();
  }

  getComments() {
    this.tableService.getComments().subscribe({
      next: (response: any) => {
        console.log(response)
        this.tableContent = response;
      },
      error: (error: any) => console.log(error)
    })
  }

  checkboxEvent(event: any) {
    console.log(event)
  }
}