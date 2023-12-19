import {Component, EventEmitter, Output} from '@angular/core';
import {TableRowComponent} from "../table-row/table-row.component";
import {TableHeaderComponent} from "../table-header/table-header.component";
import {Koppeling} from "../Koppeling";
import {KOPPELINGEN} from "../../../test_data";
import {NgForOf, NgIf} from "@angular/common";
import {EditModalComponent} from "../edit-modal/edit-modal.component";
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    TableHeaderComponent,
    NgForOf,
    TableRowComponent,
    EditModalComponent,
    NgIf
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  @Output() openEditModal= new EventEmitter();

  koppelingen: Koppeling[]=KOPPELINGEN

  propagateEditModal($event: Koppeling) {
    this.openEditModal.emit($event)
  }
}
