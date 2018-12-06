import { Injectable } from '@angular/core';
import 'firebase/firestore';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { IContact } from '../models/contact.interface';
import { map } from 'rxjs/operators';

@Injectable()
export class ContactService {
  contactsCollection: AngularFirestoreCollection<IContact>;
  contacts: Observable<Array<IContact>>;
  contactsDoc: AngularFirestoreDocument<IContact>;

  constructor(
    private angularFirestore: AngularFirestore
  ) {
    this.contactsCollection = this.angularFirestore.collection<IContact>('contacts');
    this.contacts = this.contactsCollection.snapshotChanges()
      .pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as IContact;
          const id = a.payload.doc.id;
          return { id, ...data };
        }))
      );
  }

  getContacts(): Observable<Array<IContact>> {
    return this.contacts;
  }

  deleteContact(contact){
    this.contactsDoc = this.angularFirestore.doc(`contacts/${contact.id}`);
    this.contactsDoc.delete();
  }
}