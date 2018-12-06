import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContactService } from '../../services/contact.service';
import { IContact } from '../../models/contact.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  contacts: Array<IContact>;
  contactSub: Subscription;
  constructor(
    public navCtrl: NavController,
    private contactService: ContactService
  ) {
  }

  ionViewDidLoad(): void {
    this.getContacts();
  }

  ionViewDidLeave(): void {
    if (!!this.contactSub) { this.contactSub.unsubscribe(); }
  }

  getContacts(): void {
    this.contactSub = this.contactService.getContacts()
      .subscribe(res => {
        this.contacts = res;
        console.log(this.contacts);
      },
        () => {

        }, () => {
          this.contactSub.unsubscribe();
        })
  }
  removeContact(c){
    this.contactService.deleteContact(c);
  }

}
