import {Component, Input} from '@angular/core';
import {NgIf, NgSwitch, NgSwitchCase} from "@angular/common";
import {DropdownComponent} from "../dropdown/dropdown.component";


@Component({
  selector: 'app-table-cell',
  standalone: true,
  imports: [
    NgSwitch,
    NgSwitchCase,
    DropdownComponent,
    NgIf
  ],
  templateUrl: './table-cell.component.html',
  styleUrl: './table-cell.component.css'
})
export class TableCellComponent {
  @Input() waarde?: string|number|boolean|undefined;
  @Input() checkbox?: boolean|undefined

}
