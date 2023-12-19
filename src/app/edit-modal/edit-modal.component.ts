import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Koppeling} from "../Koppeling";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-edit-modal',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './edit-modal.component.html',
  styleUrl: './edit-modal.component.css'
})
export class EditModalComponent {
  @Input() koppeling!: Koppeling
  @Output() closeEditModal = new EventEmitter();
  @Output() saveEditModal = new EventEmitter();

  modalClosed() {
    this.closeEditModal.emit()
  }
}
