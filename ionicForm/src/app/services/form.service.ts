//Normal inports
import { Injectable } from '@angular/core';

import  {AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore/'

//Interfaces
import { Form } from '../interface/form' 

//Tools
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private formCollection : AngularFirestoreCollection<Form>;

  private forms : Observable<Form[]>;

  constructor(private db: AngularFirestore) {
    this.formCollection= db.collection<Form>('forms')
    this.forms = this.formCollection.snapshotChanges().pipe(map(
      actions => {
        return actions.map(a => {
          const data = a.payload.doc.data()
          const id = a.payload.doc.id
          return {id, ...data}
        })
      }
    ))
   }

   getForm (id: string) {
    return this.formCollection.doc<Form>(id).valueChanges()
   }

    getForms() {
    return this.forms
   }

  updateForm (form: Form , id: string) {
    return this.formCollection.doc<Form>(id).update(form)
  }

  addForm (input : Form) {
    return this.formCollection.add(input) 
  }

  removeForm (id: string) {
    return this.formCollection.doc(id).delete()
  }

  sendForm(data,id){
    return this.db.collection('resform').doc(id).set(data);
  }

  getResFom(){
    return this.db.collection('resform')
  }
}
