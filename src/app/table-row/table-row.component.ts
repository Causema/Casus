import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Koppeling} from "../Koppeling";
import {TableCellComponent} from "../table-cell/table-cell.component";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faPenSquare} from "@fortawesome/free-solid-svg-icons/faPenSquare";
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-table-row',
  standalone: true,
  imports: [
    TableCellComponent,
    FaIconComponent,
    NgStyle
  ],
  templateUrl: './table-row.component.html',
  styleUrl: './table-row.component.css'
})
export class TableRowComponent {
  @Input() koppeling!: Koppeling;
  protected readonly faPenSquare:IconDefinition = faPenSquare;
  @Output() modalOpened= new EventEmitter();
  openEditModal(){
    this.modalOpened.emit()
  }

}
