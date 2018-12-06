import { Injectable } from '@angular/core';
import 'firebase/firestore';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';
import { IContact } from '../models/contact.interface';
@Injectable()
export class ContactService {
  contacts: Observable<Array<IContact>>;
  constructor(
    private fireStore: AngularFirestore
  ) {
    this.contacts = this.fireStore.collection('contacts').valueChanges();
  }

  getContacts(): Observable<Array<IContact>> {
    return this.contacts;
  }
}