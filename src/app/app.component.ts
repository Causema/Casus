import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {TableComponent} from "./table/table.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {EditModalComponent} from "./edit-modal/edit-modal.component";
import {Koppeling} from "./Koppeling";
import {KOPPELINGEN} from "../../test_data";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TableComponent, FontAwesomeModule, EditModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CasusTopicus';
  editModalOpen:boolean=false;
  modalOpenFor: Koppeling=KOPPELINGEN[0];
  EditModalOpened($event: Koppeling) {
    this.editModalOpen=true
    this.modalOpenFor=$event
  }
  EditModalClosed() {
    this.editModalOpen=false
  }
  EditModalSaved($event:Koppeling) {
    let index=KOPPELINGEN.indexOf(this.modalOpenFor)
    KOPPELINGEN[index]=$event
    this.editModalOpen=false
  }
}
