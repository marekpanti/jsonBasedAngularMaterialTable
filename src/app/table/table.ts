import { CommonModule } from '@angular/common';
import { Component, input, Input, ViewChild } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

export interface ColumnConfig {
  key: string;
  label: string;
  sortable?: boolean;
  filterable?: boolean;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.html',
  styleUrls: ['./table.css'],
  imports: [
    MatTableModule,
    CommonModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
    MatSortModule,
  ],
})
export class MyTableComponent {
  columns = input<ColumnConfig[]>([]);
  tableData = input<any[]>([]);

  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  get displayedColumns() {
    return this.columns().map((c) => c.key);
  }

  // should be effect probably based on his.tableData()
  ngOnChanges() {
    this.dataSource = new MatTableDataSource(this.tableData());

    if (this.sort) this.dataSource.sort = this.sort;
    if (this.paginator) this.dataSource.paginator = this.paginator;
  }

  protected isFilterable(): boolean {
    return this.columns().some((c) => c.filterable);
  }

  protected applyFilter(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.dataSource.filter = value.trim().toLowerCase();
  }
}
