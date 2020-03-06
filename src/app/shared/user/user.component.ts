import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'pwe-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() user: any; // todo change any
  private formIsVisible: boolean;

  constructor() {
    this.formIsVisible = false;
  }

  ngOnInit() {
  }
  showForm() {
    this.formIsVisible = true;
  }
  hideForm($event) {
    this.formIsVisible = false;
  }

}
