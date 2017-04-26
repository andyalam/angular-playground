import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') emailForm: NgForm;
  private subscriptions: string[] = ["Basic", "Advanced", "Pro"];
  private defaultSubscription: string = this.subscriptions[1];
  private submitted: boolean = false;
  private data;

  onSubmit() {
    console.log(this.emailForm);
    this.submitted = true;
    this.data = {
      email: this.emailForm.value.email,
      subscription: this.emailForm.value.subscription,
      password: this.emailForm.value.password
    }
  }
}
