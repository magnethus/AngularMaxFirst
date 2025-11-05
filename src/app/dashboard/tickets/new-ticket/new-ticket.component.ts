import { Component, ViewChild, ElementRef, output } from '@angular/core';
import { ButtonComponent } from "../../../shared/button/button.component";
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-new-ticket',
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent { 
  @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  //private form: viewChild.required<ElementRef<HTMLFormElement>>('form'); //Alternative way with signals
  add = output<{title: string, text: string}>();


  onSubmit(title: string, ticketText: string) {   
    this.add.emit({title: title, text: ticketText})
    this.form?.nativeElement.reset();
  }
}
